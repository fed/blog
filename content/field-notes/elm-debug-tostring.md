---
title: Debug.toString works on any Elm value
date: 2026-08-20
tags: elm
---

`Debug.toString` handles any value, including opaque types with no exposed constructors. Handy for a quick `Debug.log` when the compiler's inferred type is more useful than writing a custom string representation.
