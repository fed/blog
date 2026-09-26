---
title: Object.groupBy() replaces the manual reduce for grouping
date: 2026-08-30
tags: web-platform
---

`Object.groupBy(items, item => item.status)` groups an array into a plain object keyed by the callback's return value. Shipped in ES2024, so the usual `.reduce()` grouping boilerplate isn't needed any more.
