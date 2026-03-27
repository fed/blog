---
title: Some thoughts from the migration from axios to fetch
date: 2025-08-26
tags: general
draft: true
---

TODO: Intro paragraph, why we migrated (bundle size/dropping a dependency/native support in Node 18+)

## The core swap

Axios wraps a lot of convenience around HTTP requests. Dropping it for the native `fetch` means you take on that responsibility yourself. The main changes:

- `params` is no longer a config option. You build the query string manually via `URL` and `searchParams`.
- The response body isn't automagically parsed anymore. Call `.json()` explicitly.
- `fetch` only rejects on *network failures*, not on HTTP error status codes. You must check `response.ok` yourself.
- `AxiosRequestConfig` maps to `RequestInit` in TypeScript.

## Building search params with `URL`

Using the `URL` constructor with `searchParams` is the safest approach. It correctly handles existing query strings, URL fragments, encoding, and avoids brittle string concatenation.

```ts
const base =
  typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost";

const u = new URL(url, base);

for (const [key, value] of Object.entries(params ?? {})) {
  if (Array.isArray(value)) {
    for (const v of value) u.searchParams.append(key, String(v));
  } else if (value != null) {
    u.searchParams.append(key, String(value));
  }
}

const requestUrl = u.toString();
```

### Do you actually need the base argument?

Only if `url` might be relative.

- **Absolute URL** (e.g. `https://api.rawr.com/foo`): `new URL(url)` works fine. The base is ignored.
- **Relative URL** (e.g. `/foo`, `./bar`, `../bar`, `?q=1`): `new URL(url)` throws `Invalid URL`. You must provide a base.

**Choosing a base:**

- `window.location.origin` anchors to the site root. Usually the safer choice because it won't inherit the current page's path, query, or hash.
- `window.location.href` resolves relative to the current page path, which can produce surprises.
- In Node/SSR, `window` is undefined. Use a fixed base from config: `const base = process.env.PUBLIC_URL ?? "http://localhost"`.

**Rule of thumb:** guaranteed absolute URL --> omit the base. URL might be relative --> provide one (prefer `origin` in browsers).

## Handling errors

`fetch` only rejects on network failures. A 404 or 500 response resolves normally, so you need to check `response.ok` (true for status codes 200–299) and throw manually.

### Basic pattern

```ts
if (!response.ok) {
  throw new Error(await response.text());
}
```

`response.text()` returns the body as a string, even if empty. It's unlikely to fail, but it *can* throw if the body stream is corrupted or already consumed.

### With a fallback message

Adding a fallback costs a line of verbosity but helps debugging if `response.text()` itself fails:

```ts
if (!response.ok) {
  throw new Error(
    await response.text().catch(
      () => `Request failed with status code ${response.status}`
    )
  );
}
```

### With extra safeguards

For production code, you might also want to guard against 204/205 (no content) and non JSON responses:

```ts
const handle = async (response: Response) => {
  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      `HTTP ${response.status} ${response.statusText}${
        details ? ` — ${details}` : ""
      }`
    );
  }

  if (response.status === 204 || response.status === 205) return null;

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");

  if (!isJson) throw new Error("Expected JSON response");

  return response.json();
};
```
## Wrapping everything in try/catch

Your `fetch` call can throw in several places: network failures, JSON parse errors, and the manual `throw` above. A try/catch around the whole thing prevents unhandled promise rejections and gives you a single place to log or surface errors.

TODO: Expand on using a shared error handler across the monorepo

## A reusable fetcher function

Putting it all together into a single utility:

```ts
async function seeSawFetcher(
  requestOptions: SeeSawFetcherOptions
): Promise<SeeSawResponseType | Error | any> {
  const { url, params, ...fetchOptions } = requestOptions;
  const urlWithParams = new URL(url, window.location.origin);

  Object.entries(params ?? {}).forEach(([key, value]) => {
    urlWithParams.searchParams.append(key, String(value));
  });

  if (
    fetchOptions.body !== null &&
    typeof fetchOptions.body === "object" &&
    Object.prototype.toString.call(fetchOptions.body) === "[object Object]"
  ) {
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  const response = await fetch(urlWithParams.toString(), fetchOptions);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
```

TODO: Walk through design decisions, why automatically stringify plain objects and why not handle arrays in params here

## Real world example

Before (Axios):

```ts
const data = await axios
  .post("https://www.google.com/recaptcha/api/siteverify", null, {
    params: {
      secret: process.env.RECAPTCHA_INVISIBLE_SECRET_KEY,
      response: token,
    },
  })
  .then((response) => response.data)
  .catch((error) => error);
```

After (Fetch):

```ts
const token = String(req.query.token) || "";
const secret = process.env.RECAPTCHA_INVISIBLE_SECRET_KEY || "";
const url = new URL("https://www.google.com/recaptcha/api/siteverify");

url.searchParams.append("secret", secret);
url.searchParams.append("response", token);

let data;

try {
  const response = await fetch(url.toString(), { method: "POST" });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  data = await response.json();
} catch (error) {
  data = error;
}

return res.json(data);
```

TODO: Commentary on the tradeoffs, more verbose, but no dependency and more explicit control flow


## Gotchas and edge cases

- **204/205 No Content:** `response.json()` throws on an empty body. Guard for it.
- **Non-JSON responses:** Check `Content-Type` before calling `.json()`.
- **Array params:** `String(value)` on an array produces `"a,b"` instead of repeated keys (`key=a&key=b`). Append each element individually.
- **Node version:** `fetch` is global in Node 18+. For older versions, use a polyfill like `undici`.
- **TypeScript:** Cast parsed values explicitly, e.g. `const data = (await response.json()) as MyType`.
