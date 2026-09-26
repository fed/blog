---
title: Web frontend devtools
date: 2021-11-28
tags: tools
---

A collection of frontend web development tools and resources.

## General

- [astexplorer.net](https://astexplorer.net): You can paste JavaScript (or other languages) and inspect the resulting Abstract Syntax Tree in real time. Useful when writing Babel plugins, ESLint rules, or codemods.
- [httpstatuses.io](https://httpstatuses.io): A quick reference for HTTP status codes with easy to understand explanations of what each code means and when it applies.
- [keycode.info](https://keycode.info): You can press any key and see the corresponding `keyCode`, `key`, `code`, and `which` values. Comes in handy when working with keyboard event handlers.
- [tiny.photos](https://tiny.photos): An image optimisation service.

## Bundle analysis

- [bundlephobia.com](https://bundlephobia.com): You can look up the minified and gzipped size of any npm package and see how it will affect your install time. It also surfaces lighter alternatives if they exist.
- [bundle-buddy.com](https://bundle-buddy.com): You can analyse Webpack/Parcel bundle stats to identify duplicated code across chunks and decide what to split or deduplicate.

## Web APIs and browser compatibility

- [caniuse.com](https://caniuse.com): The standard reference for checking browser support across CSS features, JavaScript APIs, and HTML elements, broken down by browser and version.
- [node.green](https://node.green): You can check ECMAScript feature support across Node.js versions, covering the same ground as caniuse but specifically for the server side Node runtime.

## CSS

- [specificity.keegan.st](https://specificity.keegan.st): A specificity calculator for CSS selectors. You can paste a selector and get its score broken down by component (IDs, classes, and elements).
- [csstriggers.com](https://csstriggers.com): Look up which CSS properties trigger layout, paint, or composite operations in the browser rendering pipeline (useful for writing more performant animations/transitions).

## Regex

- [regexr.com](https://regexr.com): A regex editor with match highlighting. It also offers a syntax reference which comes in handy.
- [regexly.js.org](https://regexly.js.org): A regex tester with a visual breakdown of matches.
- [regexper.com](https://regexper.com): You can convert a regex pattern into a railroad diagram, making the logic of complex expressions easier to follow visually.
- [regex101.com](https://regex101.com): A regex tester supporting multiple flavours (PCRE, JavaScript, Python, etc.). It has a built in debugger.
- [ihateregex.io](https://ihateregex.io): A library of common patterns (emails, URLs, phone numbers, etc.) with visual diagrams.
- [regexpal.com](https://www.regexpal.com): Another JavaScript regex tester with live match highlighting.

## Accessibility

Here are some links to a handful of tools you might find useful when working on and testing web accessibility.

### Screen readers

- [VoiceOver](https://support.apple.com/en-au/guide/voiceover-guide/welcome/web) (already shipped with MacOS): pair with
  [Safari](https://www.apple.com/safari/)
- [NVDA](https://www.nvaccess.org/): pair with [Firefox](https://www.mozilla.org/en-GB/firefox/) on Windows
- [JAWS](https://www.freedomscientific.com/products/software/jaws/): pair with Chrome on Windows
- [ChromeVox](https://www.chromevox.com/) (built-in on Chromebooks): pair with [Chrome](https://www.google.com/chrome/)

### Screen reader plugins

If you are working with NVDA, the [Focus Highlight Plugin](https://addons.nvda-project.org/addons/focusHighlight.en.html) might come in
handy as it provides a way to get a visual indication of the focused item when NVDA is on.

### VSCode extensions

- [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)

### Chrome extensions

- [axe Web Accessibility Testing](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- [ARC Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Accessibility Insights for Web](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
- [Tota11y Plugin](https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe)
- [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [High Contrast](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph)
- [Accessible Color Picker](https://chrome.google.com/webstore/detail/accessible-color-picker/bgfhbflmeekopanooidljpnmnljdihld)
- [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [NerdeRegion](https://chrome.google.com/webstore/detail/nerderegion/lkcampbojgmgobcfinlkgkodlnlpjieb)

### Bookmarklets

- [ANDI (Accessible Name & Description Inspector)](https://www.ssa.gov/accessibility/andi/help/install.html)

### Apps

- [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/)

### Useful webapps/websites

- [HTML5 Accessibility](https://www.html5accessibility.com/)
- [HTML5 Please](https://html5please.com/)
- [Color Review](https://color.review/)
- [Color Checker](https://webaim.org/resources/contrastchecker/)
- [Main rich interface components accessibility guidelines](https://www.accede-web.com/en/guidelines/rich-interface-components/)

### Browser-based devtools

- [chrome://accessibility/](chrome://accessibility/) (Chrome)
- [edge://accessibility/](edge://accessibility/) (Edge)
- [Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) (Firefox)
- [Accessibility Node Inspection in WebKit Web Inspector](https://webkit.org/blog/3302/aria-and-accessibility-inspector/) (Safari)
