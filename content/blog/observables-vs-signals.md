---
title: Observables vs signals
date: 2024-06-14
description:
tags: frp
draft: true
---

![](https://raw.githubusercontent.com/fed/blog/7a3102faee39c73b296c87ff7b0e0e20d2c791e7/src/pages/blog/observables-vs-signals/slide.jpeg)

https://twitter.com/BenLesh/status/1775207971410039230

Some Signals vs Observables info...

1.  Use signals for state management, not observables.
2.  Use observables for cancellation and other event coordination.
3.  DO NOT TRY TO USE SIGNALS LIKE RXJS. It's a bad/silly idea.

They are complimentary technologies.

What I mean by number 3 above: Any library that is like "let's debounce and switchMap signals" is a misguided idea. That's really, deeply
not what they're for. Signals may have a simple API but they're much more complicated than observables in a variety of ways.

2/

ALL signals maintain state. (That means it retains things in memory) MOST observables are stateless, they process the event and clean up
(exceptions: Types of Subjects, scan, etc)

3/

Signals represent a single value that changes over time

Observables represent a collection of events (or values over time).

4/

Converting from observable to signal makes sense.

Converting from signal to observable makes a little less sense. (Whatever event set the signal could have also notified the observable)

5/

Observables are fancy, composable functions with guarantees.

Signals are a dependency graph of values and complex logic around notification, invalidation, computation, and memoization.

6/

One of these things is not like the others:

Observables - Push N values. Iterables - Pull N values. AsyncIterable - Pull 1 then push 1, for N values. Signals - Read 1 value. (Which, in
the proper context sets up a node in a dependency graph that will notify watchers of changes to this value, so they can be read by the
consumer at the appropriate time, and only computed once)

7/
