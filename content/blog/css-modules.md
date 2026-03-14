---
title: CSS Modules
date: 2025-08-19
tags: css
draft: true
---

CSS Modules are a way to write modular and scoped CSS for your UI components.

They offer a thin abstraction over vanilla CSS, solving some of its long-standing limitations.

Here's a breakdown of what CSS Modules provide:

- **Scoped styles:** CSS Modules automatically scope class names locally to the component, preventing global namespace collisions. Example: `.button` in `Button.module.css` becomes something like `Button_button__abc123`.
- **Composition:** compose styles from other classes or modules. Example: `@value primary from './colors.css';`
- Importing CSS as JavaScript objects: import styles like `import styles from './Button.module.css';` and then use them as `styles. Button`.
- Type Safety (with TypeScript): some setups generate TypeScript definitions for CSS Modules, improving developer experience.

## Features being built into Vanilla CSS:

- Scoped styles via `:scope` and `@scope`: The new `@scope` rule allows scoping styles to a specific part of the DOM. This is a native way to limit the reach of styles, similar to what CSS Modules do.
- CSS nesting: native CSS now supports nesting, reducing the need for preprocessors like Sass.
- Custom properties (CSS variables) allow for dynamic theming and reuse, similar to @value in CSS Modules.
- Constructable Stylesheets (for Web Components): These allow styles to be scoped to shadow DOM elements, which is another way to achieve style encapsulation.

Features Not Yet in Vanilla CSS:

- Automatic Class Name Hashing: Vanilla CSS does not yet support automatic renaming or hashing of class names to avoid collisions.
- JavaScript Object Mapping: Native CSS cannot be imported as JS objects with class name mappings like styles.button.
- Style Composition Across Files: There's no native way to compose styles from other files like CSS Modules allow.
