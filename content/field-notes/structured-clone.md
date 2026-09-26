---
title: structuredClone() deep-clones natively
date: 2026-09-18
tags: javascript
---

`structuredClone(obj)` deep-clones an object with no library needed. Unlike `JSON.parse(JSON.stringify(obj))`, it keeps `Date`, `Map`, and `Set` intact instead of mangling them.
