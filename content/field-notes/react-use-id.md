---
title: React's useId() is for accessibility attributes, not keys
date: 2026-08-15
tags: react
---

`useId()` generates an id that's stable between the server and client render, meant for wiring up `aria-describedby` or `htmlFor`. It's not meant to be used as a list `key`.
