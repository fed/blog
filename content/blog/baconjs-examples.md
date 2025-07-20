---
title: Bacon.js examples
date: 2016-08-07
description:
tags: baconjs
draft: true
---

## Counter

This is probably the first example you'll come across whenever you search for functional reactive programming examples.

https://codesandbox.io/s/bacon-counter-8up8p

- fromEvent
- map(constant)
- merge
- scan creates a property
- map passing a string as an argument 'toString' instead
- onValue subscribes

## Space key

https://codesandbox.io/s/bacon-space-key-wst07

- filter
- toProperty

## Double clicks

https://codesandbox.io/s/bacon-double-click-pzfwd

- bufferWithTime
- delay
- every time we start chaining methods to existing streams we create a new stream, and by chaining onValue we subscribe to it

## Spreadsheet

https://codesandbox.io/s/bacon-spreadsheet-17kye

- input fields
- combine

## GitHub users

https://codesandbox.io/s/bacon-users-bo5cs

- input fields
- debounce
- skipDuplicates
- fromPromise
- flatMapLatest
- zip

## Movies

https://codesandbox.io/s/bacon-movies-tp4tb

- Bacon.once([]);
- awaiting

## React rendering

https://codesandbox.io/s/strange-https-cuq21

- combineTemplate
- Bacon.Bus

https://talks.fedknu.com/frp-examples/#7
