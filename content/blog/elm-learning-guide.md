---
title: An Elm learning guide for frontend engineers
date: 2026-03-04
description:
tags: elm
draft: true
---

## The mental shift

As frontenders, our React/TS background is an asset for learning the syntax but it can also potentially create subtle friction elsewhere. There are three major constraints that we need to internalise upfront when learning Elm:

1. **Immutability is total:** There are no variables, only constants. You never mutate; you transform into a new value.
2. **Functions are pure:** No `Math.random()`, no `Date.now()`, no fetch calls inside a function. Side effects are managed by the runtime, not by us developers directly.
3. **TEA is not optional:** The Elm Architecture is the only pattern. There are no alternatives or escape hatches, and that is the point.

The good news is: React and the Flux architecture we are used from working with Redux already pushed us most of the way here conceptually, and we're mostly removing habits rather than building new ones.

## 1) Foundations

The goal here is to get comfortable with both the syntax and the "everything is an expression" philosophy without the distraction of the DOM.

- Read the [Official Elm Guide](https://guide.elm-lang.org) cover to cover, it's short, well written, and designed for people who already know how to code
- Install the toolchain and play around with the REPL
- Key concepts to absorb:
  - Anonymous functions, currying, and partial application
  - The pipe operator (`|>`), which is something we'll be using constantly
  - Type aliases vs custom types (union types/ADTs)
  - Why there are no runtime exceptions
  - How `Maybe` and `Result` replace `null`/`undefined` and `try`/`catch`

*TypeScript familiarity tip:* Custom types go further than TypeScript discriminated unions, but the mental model is rather similar, and I found it to be a good idea to lean on that familiarity.

Finally, we can also supplement all of this with [Exercism's Elm track](https://exercism.org/tracks/elm), which is a set of small logic puzzles that force functional thinking without any DOM noise.

## 2) The Elm Architecture (TEA 🫖) and the type system

The goal here is to understand TEA deeply and become fluent in pattern matching.

- Build simple stateful apps (a counter, a TODO list) using `Model`, `Update`, and `View`
- Practise exhaustive pattern matching with `case ... of`
- Understand how messages (`Msg`) drive the update loop
- Explore `Cmd` and `Sub` conceptually
- Look into phantom types

*Framing correction coming from Reactland:* Elm does not have components, and I found it quite hard to resist the urge to think in that model. TEA's `View` function composes smaller `View` functions, not components with local lifecycles.

*TypeScript familiarity tip:* We already think in types, the key leap is that Elm's types are total, which means no `any`, no casting, no escape. The trickiest part would be to work with that, not against it.

## 3) Side effects and the outside world

The goal here is to handle real world I/O in the same way we constantly interact with the browser's APIs in React. In my own experience this was the part where I hit the most friction.

- **Commands (`Cmd`):** How you tell Elm to do something, e.g. an HTTP request
- **Subscriptions (`Sub`):** How you listen for external events, e.g. WebSockets or window resizing
- **JSON decoding:** The tax you pay for type safety, as you've got to write explicit decoders to map untyped JSON into typed Elm records (in other words, there is no `as unknown as MyType`)
- **Ports:** This is Elm's boundary with JavaScript, and is essential for any real project that touches other existing JS libraries

Some resources useful at this stage:

- [elmprogramming.com](https://www.elmprogramming.com) has an excellent dedicated section on JSON decoders specifically
- The book *Elm in Action* by Richard Feldman

Found this part to take the longest to wrap my head around. JSON decoding alone takes a long time to genuinely internalise. Feeling slow here is normal, not a signal you're doing it wrong or missing something.

## 4) Idioms and scaling

The goal is to write Elm the way experienced Elm developers write it, not like a TypeScript/React developer writing Elm, which is what I've been doing this far.

- `elm-land` for routing and SPAs
- `elm-ui` an opinionated UI library
- `elm-test` for unit and fuzz testing
- Browse [Elm Packages](https://package.elm-lang.org) to see how community libraries are structured and documented
- As with anything else, reading other people's Elm code is a great way to learn how to build production-grade applications at scale
