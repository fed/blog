---
title: Event streams explained
date: 2019-10-24
description: An attempt at explaining what an Observable or Event Stream is in the context of functional reactive programming.
tags: frp
draft: true
---

https://codepen.io/fede/post/baconjs

The way in which functional reactive programming is explained often leads to confusion.

- functionalMost people know what the P is, and the F seems fairly understandable, but the R can be misleading at times.

Examples usually talk about the **difference between expressions and statements**. Rather than `c = a + b` setting a value right now, it is
an expression which defines that _c_ is **always** _a_ plus _b_. It defines a relationship.

Reactive programming has its roots on the observer pattern: there's an observable subject which has a list of listeners, he observable
notifies all of them when it has something to publish.

## The Observable type

In the context of <abbr title="Functional Reactive Programming">FRP</abbr>, data can be modelled as async collections of events that
"arrive" or happen over time. An _observable_ (or _event stream_) can then be thought of as a pipeline events travel through.

> An observable is a collection whose values arrive over time, or in other words, an asynchronous collection.

An Observable is just like an array, except the difference is with an array, all the data is stored in memory, whereas with an Observable,
no data is stored in memory, and the items arrive asynchronously over time. An array has all the data ready, right there, just to pop out
synchronously, but an Observable is a collection of items that arrive over time.

Observable gives us another much more powerful way of thinking of events, because it gives us an object by which to represent that event
stream, and using that object, we can call methods like map, filter, and concatAll. All we have to do is convert the event into a
collection, an observable collection by going Observable.fromEvent, passing in the DOM element itself, and then the name of the event.

Observables can be used to model events, asynchronous requests, and animations. Observables can also be transformed, combined, and consumed
using Array methods such as `map`, `filter` and `reduce` allowing us to write powerful and expressive asynchronous programs.

---

This series of lessons is here mainly to help you to grasp the core idea in Reactive Programming and to help you how to think in Reactive
Programming in order to apply it to a real code base.

What is it? Well, it's mainly programming with event streams. Now, what is an event stream? It's a sequence of events happening over time.
You can kind of think of it as an asynchronous array.

Here's time, and it goes forward, to the right. Events happen over time, and we can add an event listener to this whole sequence. Whenever
an event happens, we can react to it by doing something. That is the main idea.

Another type of sequence that you see in JavaScript, just, for instance, arrays. How do event streams relate to arrays? Well, arrays are
sequences in space. All of these items in this array exist now in memory.

On the other hand, event streams don't have that property. So, the events might happen over time, and you don't even know what are the items
that might happen.

The nice thing with event streams is that they have similar functions to arrays.

---

## Array vs Event streams

array = sequence (of values) in space, values exist in memory stream = sequence (of events) in time, events happen over time

## Dynamic behaviour at the time of declaration

Event streams allow you to specify the dynamic behaviour of a value completely only once, at the time of declaration. what this means is:

```js
let a = 3;
let b = 2 * a;

console.log(b); // 6

a = 4;
console.log(b); // still 6 b/c b is statically declared
```

---

An observable can deliver: values, a completed signal or an error

---

To help you think in Reactive Programming, we need to understand not just what event streams are, but especially why we should use them. To
me, it boils down to one simple reason. It allows you to specify the dynamic behaviour of a value completely at the time of declaration.

```
var streamA = Rx.Observable.of(3);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b)); // 30
```

But now I want to change the value of streamA. Here is where a lot of people get stuck, because they want to change streamA.

```
streamA.set(4);
```

We cannot change a later. We have to specify how a will work over time. And we have to specify only at the time of the declaration.

```
var streamA = Rx.Observable.of(3, 4);
```

If we do this, now we have an event stream that has just simply two events. It has event 3, and then it has event 4, and b will change
accordingly whenever a changes.

The why, remember, is because Reactive Programming allows you to specify the dynamic behaviour completely only once, at declaration (in a
single place).

---

## Benefits

The first thing that you notice from this code, it basically only has var declarations and function definitions. It's a fully declarative
code.

Then also look at how we have virtually no control flow keywords here. We don't have if, we don't have else, we don't have for loops. All of
this was created with operators such as .map and .filter and .flatMap. These operators are really important for programming, and they will
be your new if and for loops.

We learned that everything can be an event stream. We can have an event streams of clicks. We can have event streams for promises, and we
can have event streams, also, for data, such as these.

Finally, let's look how reactive programming brought true separation of concerns to our code. If you want to see how the first user data
behaves over time, you only need to look at its declaration.

The declaration specifies the complete dynamic behavior over time. There cannot be any other code that will modify the user data. That's a
really good guarantee. You can be sure you know, 100 percent, how the user data works just by looking at its definition.

---

Creating event streams and subscribing to them is basically the same idea as binding event listeners to elements. Instead of listening for
standard things like `click` we listen for events we've created ourselves.

Giving a custom event such as 'suggestion1', and a call back. This:

```
tdocument.addEventListener('suggestion1', user =>{
    renderSuggestion(user, '.suggestion1');
})
```

is pretty much the same idea as this.

```
javascriptsuggestion1Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion1');
});
```

How do we create our custom events? Well, we do that by applying functions, such as .map and .merge and .flatMap, based on simpler events,
such as responseStream, and close1Clicks streams, and refreshClickStream. That kind of stuff.
