---
title: Adding dark mode to my Eleventy blog
description: A summary of how I shipped a theme toggle for my 11ty blog using the `light-dark()` CSS function and a tiny inline script.
date: 2026-04-29
tags: css
---

Finally got around to adding a dark theme to this blog! The whole change came in at a very small pull request, and I want to walk through how everything fits together because the modern CSS toolkit makes this much less painful than what this was a few years ago.

The requirements for this change were: stick to the user's OS preference by default, let them override it with a button in the nav, persist that override across visits, and avoid the white flash on page load you sometimes get in some websites. I also didn't want any build step changes, or any `data-theme` attributes scattered through every selector.

Modern browsers ship a CSS function called [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) that returns one of two values depending on the `color-scheme` of the `<html>` element. If I declare semantic tokens once like `--color-bg: light-dark(white, black);` and then set `color-scheme` on the root, the whole page repaints in the right colour scheme automagically. The only thing the toggle needs to do is flip `color-scheme` between `light` and `dark` on the page's `<html>`, and CSS will do the switch/repainting for me:

```html
<html lang="en" style="color-scheme: dark;"></html>
```

## 1) Create a new layer of semantic tokens

The blog already had a `tokens.css` file holding flat colour primitives such as `--token-color-blue` and `--token-color-gray-medium`. The problem with those names is that they describe what the colour is, not what it means (they are tier 1 primitive tokens). With the designs I had in mind, a blue link in light mode becomes a warm orange link in dark mode, so I needed a layer of abstraction sitting above my colours.

So I went ahead and added a few new primitives for the dark palette (`--token-color-charcoal`, `--token-color-graphite`, `--token-color-black-muted`, `--token-color-white-muted`, `--token-color-orange`) and then introduced a layer of semantic tokens above them:

```css
:root {
	/* primitive tokens */
	--token-color-black: #172b4d;
	--token-color-white: #fff;
	--token-color-blue: #0572e6;
	--token-color-orange: #ffa066;
	--token-color-graphite: #2c2c2e;
	--token-color-charcoal: #23222d;
	/* ... etc. etc. */

	/* semantic tokens */
	color-scheme: light dark;

	--color-bg: light-dark(var(--token-color-white), var(--token-color-black-muted));
	--color-text: light-dark(var(--token-color-black), var(--token-color-white-muted));
	--color-heading: light-dark(var(--token-color-black), var(--token-color-white));
	--color-border: light-dark(var(--token-color-gray-light), var(--token-color-gray-dark));
	--color-accent: light-dark(var(--token-color-blue), var(--token-color-orange));
	--color-focus: light-dark(var(--token-color-red), var(--token-color-orange));
	--color-code: light-dark(var(--token-color-crimson), var(--token-color-white));
	/* ... etc. etc. */
}
```

The `color-scheme: light dark;` declaration is how we tell the browser that by setting `color-scheme: light` on the `<html>` root we want the first value of the `light-dark()` function to be painted. When I later use JavaScript to set `color-scheme: dark` on the `<html>`, every `light-dark()` call in the cascade flips at once.

The semantic layer is what makes the rest of the codebase so easy to migrate. I'm no longer thinking "is this element blue" but rather "is this element an accent colour".

## 2) Replace raw/primitive tokens across all stylesheets

This was the boring part of the work, but it's also when you start seeing the results. I went through every rule across the entire codebase that referenced a primitive token in a way that needed to change between modes, and swapped it for its semantic equivalent.

A few representative swaps:

```css
/* before */
body {
	color: var(--token-color-black);
}
.common-link {
	color: var(--token-color-blue);
}

/* after */
body {
	background-color: var(--color-bg);
	color: var(--color-text);
}
.common-link {
	color: var(--color-accent);
}
```

I also added an explicit rule I didn't have before, because in the old single theme version headings inherited `--token-color-black` from the body and looked fine. But now in dark mode I wanted slightly more contrast than the body text, so headings get their own token.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
	color: var(--color-heading);
}
```

By the way, primitives that are theme invariant (e.g. spacing, font sizes, border radius) stayed exactly as they were.

## 3) Prevent the flash of unstyled content

If you wait for the DOM to be ready before applying the saved theme, the user sees a flash of light mode for a split second before it flips. It's not very pretty, but luckily it's avoidable!

The fix is a tiny blocking/synchronous script inlined in the `<head>` that runs before the browser paints anything.

```js
(function () {
	let savedTheme = null;

	try {
		savedTheme = localStorage.getItem("theme");
	} catch (e) {}

	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	const theme = savedTheme || systemTheme;

	document.documentElement.style.setProperty("color-scheme", theme);
})();
```

That try/catch wrapping the `localStorage` read is because some browsers throw on `localStorage` access in private modes or when storage is disabled, and a thrown exception in a `<head>` script will tank the entire page. Also not very pretty.

I'm also falling back to `prefers-color-scheme` only if there's no saved preference. That ordering is important: an explicit user choice should always win over the OS preference.

Also, this theme init script gets pulled in by Nunjucks like this:

```njk
<script>
  {% include "scripts/theme-init.js" %}
</script>
```

I'm inlining it rather than linking to a separate file because a external `<script src>` would defeat the whole point, as the browser would have to do a round trip before it could decide which colours to render, and users would get the flash I was trying to avoid in the first place.

## 4) Render the toggle button

The toggle lives in the site header navigation as a `button[role="switch"]` wrapping two SVG icons (a sun for light mode and a moon for dark mode). Only one of these icons is visible at a time:

{% raw %}

```njk
<button id="theme-toggle" class="..." role="switch" aria-label="Dark mode" aria-checked="false">
  <span id="theme-toggle-dark-icon" aria-hidden="true">
    {% include "assets/dark-theme.svg" %}
  </span>
  <span id="theme-toggle-light-icon" aria-hidden="true">
    {% include "assets/light-theme.svg" %}
  </span>
</button>
```

{% endraw %}

CSS decides which icon is visible based on a new `data-theme` attribute that `theme-init.js` adds to the `<html>` root element alongside `color-scheme` (bit of duplication here that I couldn't avoid):

```css
#theme-toggle-light-icon {
	display: none;
}

:root[data-theme="dark"] #theme-toggle-dark-icon {
	display: none;
}

:root[data-theme="dark"] #theme-toggle-light-icon {
	display: flex;
}
```

## 5) Wire the toggle control

The toggling logic lives in a separate file that doesn't need to run before paint, so I defer its loading instead of inlining it to every page:

```njk
<script src="/assets/js/theme-toggle.js" defer></script>
```

This script only flips the `color-scheme` and `data-theme` on the `<html>`, persists the choice in `localStorage`, and keeps `aria-checked` in sync. The `localStorage` write is wrapped in try/catch becayse storage might be unavailable, and a failed write shouldn't break the toggle.

```js
(function () {
	const toggle = document.getElementById("theme-toggle");

	if (!toggle) {
		return;
	}

	toggle.addEventListener("click", () => {
		const isDark = document.documentElement.style.getPropertyValue("color-scheme") === "dark";
		const newTheme = isDark ? "light" : "dark";

		document.documentElement.style.setProperty("color-scheme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
		try {
			localStorage.setItem("theme", newTheme);
		} catch (e) {}

		toggle.setAttribute("aria-checked", newTheme === "dark");
	});
})();
```

## Other implementation alternatives

The one tradeoff of this approach is browser support: `light-dark()` reached "baseline" in mid 2024 and has some solid coverage now, but if you need to support older browsers you'll want a fallback. For a personal blog with a tech audience in 2026 I don't think it's an issue.

Still, if you absolutely must support older browsers, here's some other approaches you could take instead:

### 1) `data-theme` applied to the `<html>` element

Probably the most popular pattern is `<html data-theme="dark">` paired with `[data-theme="dark"] { ...  }` selectors throughout all CSS files. It works fine, but for every property that changes between modes you have to write a full duplicate selector block:

```css
.my-component {
	background-color: white;
	color: black;
}

[data-theme="dark"] .my-component {
	background-color: #1a1a1a;
	color: #e0e0e0;
}
```

The `light-dark()` function lets you write each rule once.

### 2) Using the media query `@media (prefers-color-scheme: dark)`

This honours the OS preference but gives the user no way to override this setting. That's fine for some sites, but if you're going to add a toggle control, you need a mechanism that overrides the media query (`color-scheme` does that natively).

---

The full diff is in [pull request #65](https://github.com/fed/blog/pull/65) and there's also a follow up fix in [commit `2cef42f`](https://github.com/fed/blog/commit/2cef42f7b0b8b498a08e7fc455d2adfafc30c627). The diff is small enough to read in a few minutes, and hopefully it's useful as a template if you're doing the same thing.
