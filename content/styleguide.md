---
title: Styleguide
layout: layouts/styleguide.njk
eleventyExcludeFromCollections: true
---

A reference page for all the design tokens and markdown content elements used on this site.

## Design tokens

### Font families

<div class="styleguide-font-sample">
	<p class="styleguide-font-sample__text" style="font-family: var(--token-font-family-serif); font-size: var(--token-font-size-lg);">The quick brown fox jumps over the lazy dog.</p>
	<p class="styleguide-font-sample__meta">--token-font-family-serif: "Source Serif 4", Georgia, serif</p>
</div>

<div class="styleguide-font-sample">
	<p class="styleguide-font-sample__text" style="font-family: var(--token-font-family-sans-serif); font-size: var(--token-font-size-lg);">The quick brown fox jumps over the lazy dog.</p>
	<p class="styleguide-font-sample__meta">--token-font-family-sans-serif: system-ui, sans-serif</p>
</div>

<div class="styleguide-font-sample">
	<p class="styleguide-font-sample__text" style="font-family: var(--token-font-family-monospace); font-size: var(--token-font-size-lg);">The quick brown fox jumps over the lazy dog.</p>
	<p class="styleguide-font-sample__meta">--token-font-family-monospace: ui-monospace, Consolas, monospace</p>
</div>

### Colours

Semantic colours resolved through `light-dark()` and dependent on the active theme:

<div class="styleguide-swatch-grid">
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-bg);"></div><div class="styleguide-swatch__label">--color-bg</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-bg-alt);"></div><div class="styleguide-swatch__label">--color-bg-alt</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-text);"></div><div class="styleguide-swatch__label">--color-text</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-text-muted);"></div><div class="styleguide-swatch__label">--color-text-muted</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-heading);"></div><div class="styleguide-swatch__label">--color-heading</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-border);"></div><div class="styleguide-swatch__label">--color-border</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-accent);"></div><div class="styleguide-swatch__label">--color-accent</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-accent-alt);"></div><div class="styleguide-swatch__label">--color-accent-alt</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-accent-text);"></div><div class="styleguide-swatch__label">--color-accent-text</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-text-inverse);"></div><div class="styleguide-swatch__label">--color-text-inverse</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-focus);"></div><div class="styleguide-swatch__label">--color-focus</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-code);"></div><div class="styleguide-swatch__label">--color-code</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-code-bg);"></div><div class="styleguide-swatch__label">--color-code-bg</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-forest);"></div><div class="styleguide-swatch__label">--color-forest</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--color-forest-text);"></div><div class="styleguide-swatch__label">--color-forest-text</div></div>
</div>

Base palette of primitive colour tokens:

<div class="styleguide-swatch-grid">
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-black);"></div><div class="styleguide-swatch__label">--token-color-black</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-black-muted);"></div><div class="styleguide-swatch__label">--token-color-black-muted</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-gray-dark);"></div><div class="styleguide-swatch__label">--token-color-gray-dark</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-gray-light);"></div><div class="styleguide-swatch__label">--token-color-gray-light</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-gray-extra-light);"></div><div class="styleguide-swatch__label">--token-color-gray-extra-light</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-gray-warm);"></div><div class="styleguide-swatch__label">--token-color-gray-warm</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-white);"></div><div class="styleguide-swatch__label">--token-color-white</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-white-muted);"></div><div class="styleguide-swatch__label">--token-color-white-muted</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-ivory);"></div><div class="styleguide-swatch__label">--token-color-ivory</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-yellow);"></div><div class="styleguide-swatch__label">--token-color-yellow</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-orange);"></div><div class="styleguide-swatch__label">--token-color-orange</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-crimson);"></div><div class="styleguide-swatch__label">--token-color-crimson</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-blue);"></div><div class="styleguide-swatch__label">--token-color-blue</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-graphite);"></div><div class="styleguide-swatch__label">--token-color-graphite</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-charcoal);"></div><div class="styleguide-swatch__label">--token-color-charcoal</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-forest);"></div><div class="styleguide-swatch__label">--token-color-forest</div></div>
	<div class="styleguide-swatch"><div class="styleguide-swatch__color" style="background-color: var(--token-color-green);"></div><div class="styleguide-swatch__label">--token-color-green</div></div>
</div>

### Font sizes

<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-size-xs (14px)</div>
	<p class="styleguide-row__sample" style="font-size: var(--token-font-size-xs);">The quick brown fox</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-size-sm (18px)</div>
	<p class="styleguide-row__sample" style="font-size: var(--token-font-size-sm);">The quick brown fox</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-size-md (18px to 22px)</div>
	<p class="styleguide-row__sample" style="font-size: var(--token-font-size-md);">The quick brown fox</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-size-lg (24px to 30px)</div>
	<p class="styleguide-row__sample" style="font-size: var(--token-font-size-lg);">The quick brown fox</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-size-xl (36px to 62px)</div>
	<p class="styleguide-row__sample" style="font-size: var(--token-font-size-xl);">The quick brown fox</p>
</div>

### Font weights

<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-weight-light (300)</div>
	<p class="styleguide-row__sample" style="font-weight: var(--token-font-weight-light);">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-weight-normal (400)</div>
	<p class="styleguide-row__sample" style="font-weight: var(--token-font-weight-normal);">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-font-weight-bold (600)</div>
	<p class="styleguide-row__sample" style="font-weight: var(--token-font-weight-bold);">The quick brown fox jumps over the lazy dog.</p>
</div>

### Line heights

<div class="styleguide-row">
	<div class="styleguide-row__label">--token-line-height-sm (1.15)</div>
	<p class="styleguide-row__sample" style="line-height: var(--token-line-height-sm); max-width: 32rem;">Observables represent a collection of events, or values, that arrive over time. Signals represent a single value that changes over time.</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-line-height-md (1.5)</div>
	<p class="styleguide-row__sample" style="line-height: var(--token-line-height-md); max-width: 32rem;">Observables represent a collection of events, or values, that arrive over time. Signals represent a single value that changes over time.</p>
</div>
<div class="styleguide-row">
	<div class="styleguide-row__label">--token-line-height-lg (2)</div>
	<p class="styleguide-row__sample" style="line-height: var(--token-line-height-lg); max-width: 32rem;">Observables represent a collection of events, or values, that arrive over time. Signals represent a single value that changes over time.</p>
</div>

### Spacing

<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-xxs (4px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-xxs);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-xs (8px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-xs);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-sm (16px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-sm);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-md (24px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-md);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-lg (32px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-lg);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-xl (48px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-xl);"></div></div>
<div class="styleguide-spacing-row"><div class="styleguide-row__label">--token-spacing-xxl (64px)</div><div class="styleguide-spacing-row__bar" style="width: var(--token-spacing-xxl);"></div></div>

### Border radius

<div class="styleguide-radius-demo"></div>

`--token-border-radius-default: 3px`

## Content elements

### Headings

Sections in a post use `##` for the top level and `###` for subsections, as seen above. There's no `#` in the body: the layout renders its
own `<h1>` from the front matter `title`, and `.common-main-content h1` is hidden by CSS to prevent a second one.

### Paragraphs and inline text

A paragraph can hold **bold text**, _italic text_, `inline code`, and [a link](https://www.11ty.dev). Here's a second paragraph, so the
spacing between paragraphs is visible too.

### Lists

An unordered list:

- Tennis
- Rugby
- Soccer

An ordered list:

1. First
2. Second
3. Third

### Blockquotes

> An observable is a collection whose values arrive over time, or in other words, an asynchronous collection.

### Horizontal rule

A paragraph before the rule.

---

A paragraph after the rule.

### Tables

| State | Population | Capital   |
| ----- | ---------- | --------- |
| NSW   | 8.641 M    | Sydney    |
| VIC   | 7.121 M    | Melbourne |
| TAS   | 0.579 M    | Hobart    |
| ACT   | 0.487 M    | Canberra  |
| SA    | 1.910 M    | Adelaide  |
| WA    | 3.076 M    | Perth     |
| NT    | 0.267 M    | Darwin    |
| QLD   | 5.712 M    | Brisbane  |

### Maths

Inline LaTeX like $E = mc^2$ sits within a sentence.

A block equation:

$$
\int_0^\infty e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}
$$

### Code

Inline code like `const x = 1` sits within a sentence.

A fenced code block:

```js
function debounce(fn, wait) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn(...args), wait);
	};
}
```

The same highlighter covers other languages used across posts:

```css
.common-main-content blockquote {
	border: 1px solid var(--color-border);
	padding: var(--token-spacing-sm) var(--token-spacing-md);
}
```

```html
<button type="button" aria-pressed="false">Toggle</button>
```

```sh
npx @11ty/eleventy --serve
```

```json
{ "name": "blog", "private": true }
```

A line can be marked as highlighted, added, or removed. This block highlights line 2:

```js/1
const els = document.querySelectorAll(".item");
els.forEach((el) => el.classList.add("active"));
console.log(els.length);
```

This block marks line 2 as removed and line 3 as added:

```js/2/1
const response = await fetch(url);
const data = await response.json().then((res) => res);
const data = await response.json();
```

A unified diff, using Prism's `diff` language:

```diff
- axios.get("/users").then((res) => res.data);
+ fetch("/users").then((res) => res.json());
```
