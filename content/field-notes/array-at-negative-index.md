---
title: Array.prototype.at() takes negative indices
date: 2026-09-22
tags: javascript
---

`arr.at(-1)` gets the last element, no need for `arr[arr.length - 1]`. Works on strings and typed arrays too, not just plain arrays.
