---
title: Some thoughts from migrating a monorepo from Axios to fetch
date: 2025-08-26
tags: general
draft: true
---

We recently migrated an entire monorepo from Axios to the native `fetch` API. The goal was to remove a dependency that had become dead weight: Axios adds roughly 12–20 kB gzipped per client bundle, it's not very tree-shakeable (largely all or nothing), and every entry point that imports it pays the cost. Using native `fetch` adds 0 kB. Even a thin shared wrapper with timeouts, retries, and JSON handling typically lands under 1–2 kB gzipped.

But the bundle size reduction is just the visible benefit. The real value lies in reducing maintenance risk (one less library to audit for vulnerabilities), improving runtime compatibility with platform-native APIs like `AbortController`, `Cache API`, and streams, and unlocking tighter framework integration. For example, [Next.js extends fetch](https://nextjs.org/docs/app/api-reference/functions/fetch) to enable server-side caching, revalidation, request deduplication, and first-class support in Route Handlers and Server Components. None of that works with Axios.

Here are some notes from the migration.


## The core swap

Axios wraps a lot of convenience around HTTP requests. Dropping it for native `fetch` means you take on that responsibility yourself. The main changes:

- `params` is no longer a config option. You build the query string manually via `URL` and `searchParams`.
- The response body isn't automagically parsed anymore. Call `.json()` explicitly.
- `fetch` only rejects on *network failures*, not on HTTP error status codes. You must check `response.ok` yourself.
- POST request bodies need manual `JSON.stringify()` and an explicit `Content-Type` header.
- There's no built-in `timeout` property. Use `AbortController` instead.
- There's no built-in interceptor mechanism. You write a wrapper function.
- `AxiosRequestConfig` maps to `RequestInit` in TypeScript.


## Stringify POST request body

Axios automatically serialises objects to JSON and sets the `Content-Type` header. With `fetch`, both steps are manual:

```ts
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Jane Doe" }),
});
```

One thing to watch: don't unconditionally set `Content-Type` to `application/json`. If the body is `FormData` or a `Blob`, let the browser set the header itself, otherwise the request will break.


## Building search params with `URL`

Axios accepts a `params` object and appends it to the URL for you. With `fetch`, you build the query string yourself. Using the `URL` constructor with `searchParams` is the safest approach. It correctly handles existing query strings, URL fragments, encoding, and avoids brittle string concatenation.

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

- **Absolute URL** (e.g. `https://api.example.com/foo`): `new URL(url)` works fine. The base is ignored.
- **Relative URL** (e.g. `/foo`, `./bar`, `../bar`, `?q=1`): `new URL(url)` throws `Invalid URL`. You must provide a base.

**Choosing a base:**

- `window.location.origin` anchors to the site root. Usually the safer choice because it won't inherit the current page's path, query, or hash.
- `window.location.href` resolves relative to the current page path, which can produce surprises.
- In Node/SSR, `window` is undefined. Use a fixed base from config: `const base = process.env.PUBLIC_URL ?? "http://localhost"`.

**Rule of thumb:** guaranteed absolute URL → omit the base. URL might be relative → provide one (prefer `origin` in browsers).


## Handling errors

`fetch` only rejects on network failures. A 404 or 500 response resolves normally, so you need to check `response.ok` (true for status codes 200–299) and throw manually.

This is the biggest behavioural difference from Axios. Axios throws for any non-2xx status code, meaning all application-level errors land in a single `.catch()`. With `fetch`, a 404 is a "successful" request. If you don't check `response.ok`, your code will silently proceed with an error response.

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

For production code, you might also want to guard against 204/205 (no content) and non-JSON responses:

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


## Request cancellation and timeouts

Axios provides a simple `timeout` property in its config object. With `fetch`, you use the standard `AbortController` API. It's powerful and standardised but a bit more verbose for a simple timeout:

```ts
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch("/data", { signal: controller.signal })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request timed out!");
    }
  })
  .finally(() => clearTimeout(timeoutId));
```

The `finally` block is important: without it, the timeout keeps ticking even after a successful response, which can cause issues if you're reusing the controller or if the abort fires after the response has already been consumed.


## Interceptors

Axios has first-class support for interceptors, which let you run code or modify requests and responses globally before they are sent or handled. This is useful for setting auth tokens, logging, or formatting response data.

`fetch` has no built-in concept of interceptors. You implement your own wrapper or factory function. This is arguably the main source of added complexity in the migration, but it also means the logic is explicit rather than hidden behind a global config.


## Wrapping everything in try/catch

Your `fetch` call can throw in several places: network failures, JSON parse errors, and the manual `throw` above. A try/catch around the whole thing prevents unhandled promise rejections and gives you a single place to log or surface errors.

TODO: Expand on using a shared error handler across the monorepo


## A reusable fetch wrapper

Putting it all together into a single utility that achieves rough feature parity with what Axios gave us out of the box:

```ts
const TOKEN_KEY = "rawr";

function fetchClient(
  url: string,
  { method, timeout, body, baseUrl, ...customConfig }: FetchClientOptions = {}
) {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const headers: Record<string, string> = {
    "content-type": "application/json",
    ...customConfig.headers,
  };
  const resolvedBase = baseUrl || process.env.BASE_API_URL;
  let controller: AbortController | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method: method || "GET",
    ...customConfig,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (timeout) {
    controller = new AbortController();
    timeoutId = setTimeout(() => controller!.abort(), timeout);
    config.signal = controller.signal;
  }

  return window
    .fetch(`${resolvedBase}/${url}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        // Handle auth expiry (clear token, redirect, etc.)
        return;
      }

      if (response.ok) {
        return await response.json();
      }

      const errorMessage = await response.text();
      const error = new Error(errorMessage) as Error & {
        status: number;
        body: string;
      };
      error.status = response.status;
      error.body = errorMessage;

      return Promise.reject(error);
    })
    .finally(() => {
      if (timeoutId) clearTimeout(timeoutId);
    });
}
```

Not included in this version: retries with backoff (not built into Axios either), TypeScript generics for typed responses (e.g. `api.get<User[]>("/users")`), support for non-JSON response types, and merging an external `AbortSignal` with the internal timeout signal.

TODO: Discuss the `Content-Type` caveat. This unconditionally sets `application/json`, which breaks if the body is `FormData` or a `Blob`.


## A migration example

A typical Axios call in the codebase looked like this:

```ts
try {
  const authConfig = { headers: { Authorization: `Bearer ${token}` } };
  const { license: drmAuthCode } = (
    await axios.get(`${endpoint}/${id}`, authConfig)
  ).data;

  return drmAuthCode;
} catch (e: any) {
  console.error(e);
  throw e;
}
```

The key thing to watch in the migration is the response shape. Axios returns an envelope object with `data`, `status`, `statusText`, `headers`, `config`, and `request`. With `fetch`, you get a `Response` object and parse the body yourself:

```ts
try {
  const response = await fetch(`${endpoint}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }

  const { license: drmAuthCode } = await response.json();

  return drmAuthCode;
} catch (e: any) {
  console.error(e);
  throw e;
}
```

Most migration effort was in handling the response, not the request. The arguments to `fetch` are largely the same as what you'd pass to Axios; it's the return value and error semantics that change.


## Real world example: reCAPTCHA verification

Before (Axios):

```ts
const data = await axios
  .post("https://www.google.com/recaptcha/api/siteverify", null, {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    },
  })
  .then((response) => response.data)
  .catch((error) => error);
```

After (Fetch):

```ts
const token = String(req.query.token) || "";
const secret = process.env.RECAPTCHA_SECRET_KEY || "";
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


## Polyfilling

`fetch` is native in modern browsers and available globally in Node.js from v18+. If you need to support older Node versions, consider a polyfill like [undici](https://github.com/nodejs/undici) or [unfetch](https://github.com/developit/unfetch) for a minimal browser polyfill.

Axios works in both the browser and Node.js without polyfills, so this is one area where the migration does add a consideration, albeit a shrinking one as older Node versions fall out of support.


## Gotchas and edge cases

- **204/205 No Content:** `response.json()` throws on an empty body. Guard for it.
- **Non-JSON responses:** Check `Content-Type` before calling `.json()`.
- **Array params:** `String(value)` on an array produces `"a,b"` instead of repeated keys (`key=a&key=b`). Append each element individually.
- **Node version:** `fetch` is global in Node 18+. For older versions, use a polyfill like `undici`.
- **TypeScript:** Cast parsed values explicitly, e.g. `const data = (await response.json()) as MyType`.
