---
title: Vitest's test.each accepts a table literal
date: 2026-09-08
tags: testing
---

`test.each\`a | b | expected\n${1} | ${2} | ${3}\`` reads as an actual table instead of a nested array of arrays, and each column becomes a named argument in the test body.
