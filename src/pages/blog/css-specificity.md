---
title: CSS Specificity
date: 2020-04-27
spoiler:
category: css
draft: true
---

When multiple selectors are targeting the same element, the browser needs to know which one to apply. This is where the cascading aspect of
CSS and specificity come into play. It's important to understand how specificity is calculated, so that you'll be able to figure out which
style will actually end being applied in the browser.

```
(
  inline styles,
  IDs,
  classes | attributes | pseudo-classes,
  elements | pseudo-elements
)
```

There's one way for a rule to overwrite all the other rules regardless of specificity, and that's to use the keyword `!important` at the end
of the declaration before the semicolon. What this is saying is: "I don't care about specificity. I just want this rule to be applied this
way."

If two selectors have conflicting rules, the selector with the higher specificity will win, but if they both have the same specificity, the
**last declared rule will win**.

## Examples

```css
/* An element has an specificity of (0,0,1) */
li {
    color: green;
}

/* A class has an specificity of (0,1,0) */
.list-item {
    color: red;
}
```

Because the `.list-item` specificity value (001) is larger than the `li` specificity value (100), the latter class is going to overrule the
former and the colour will be red.

---

```css
nav#sitenav ul li.nav-item a {
}
```

This example has a specificity of `(0,1,1,4)`:

- 0: number of inline styles
- 1: number of IDs
- 1: number of classes, attributes, and pseudo-classes
- 4: number of lements and pseudo-elements

---

```css
.sitenav li:last-child a {
}
```

This example has a specificity of `(0,0,2,2)`:

- 0: number of inline styles
- 0: number of IDs
- 2: number of classes, attributes, and pseudo-classes
- 2: number of elements and pseudo-elements

## What do we do with these values?

How do we compare them?

Credits: https://egghead.io/lessons/css-understand-css-selector-specificity

Delete this gist later: https://gist.github.com/fknussel/6512274dc8d80b246379bc87a65483c1
