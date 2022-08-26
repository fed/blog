---
title: Functional Reactive Programming with Bacon.js
date: 2017-09-07
spoiler: A bunch of random ideas aimed at explaining, at a really high level, what functional reactive programming is.
category: baconjs
draft: true
---

## The observer pattern

The way functional reactive programming (_FRP_ from now on) is explained often leads to confusion. Most people know what the _P_ is, and the
_F_ seems fairly straightforward, but the _R_ can be misleading at times. Examples usually talk about the difference between expressions and
statements. Rather than `c = a + b` declaring a value right now, it is an expression that defines that `c` is always `a` plus `b`. It
defines a relationship.

Reactive programming has its roots in the observer pattern: there's an "observable subject" which has a collection of listeners, and the
subject notifies all of them when it has something to publish.

-   Functional programming: synchronous lists in memory
-   Reactive functional programming: dynamic/async events happening over time

## Event streams are asynchronous collections

In the context of FRP, data can be modelled as async collections of events that "arrive" or "happen" over time. An event stream can be
thought of as a pipeline events travel through.

Now, what's an event? An event is any value. It can be confusing because many examples use DOM events (such as the one below), but an event
in the context of FRP can be anything: a string, a number, a DOM event, a promise, an array, an object, anything at all.

For example, this event listener and handler:

```js
document.querySelector('#button').addEventListener('click', (event) => {
    console.log(event.target);
});
```

can be rewritten using FRP as follows:

```js
Bacon.fromEvent(document.querySelector('#button'), 'click').onValue((event) => {
    console.log(event.target);
});
```

Not a big difference so far, but Bacon provides a functional interface to manipulate and handle events:

```js
clickStream
    .skip(1)
    .take(4)
    .map((event) => event.target)
    .filter(element => element.className !== 'some-classname')
    .onValue((element) => {
        console.log(element);
    );
```

Now try rewriting that using callbacks...

# Event streams are lazy

Event streams are a bit particular in that they are lazy: we need to subscribe to them or nothing happens.

```js
const countriesStream = Bacon.fromPromise(fetch('/countries-visited')).map((response) => response.json());
```

At this point, the API hasn't been hit just yet... The promise won't be resolved nor rejected until we actually subscribe to the stream.
Calling `onValue` on a stream (i.e. subscribing to the stream) will trigger whatever behaviour it is the stream is based off.

```js
countriesStream.onValue((countries) => {
    console.log(countries);
});
```

# Event streams are cheap

Don't over nest streams, they are very cheap to instantiate! Break them down into multiple streams instead, this makes them way easier to
test and debug.

Also, note that every time we chain an operator to our stream, a new event stream gets returned:

```js
Bacon
    .fromEvent(document.getElementById('btn'), 'click') // s1
    .map(1) // s2
    .scan(0, (x,y) => x + y) // s3
    .filter(value => value % 2 === 0) // s4
    .map(value => 2 \* value) // s5
    .onValue(value => {
        console.log(value);
    });
```

Something else worth pointing out is the fact that the original event stream remains untouched:

```js
const clicksStream = Bacon.fromEvent(element, 'click');

// clicksStreams remains unchanged, chaining map here returns a whole new stream
clicksStream.map(click => { ... });
```

## Event streams don't hold any state

Both are observables, but properties hold onto their last emitted value:

```
---------(A)--------------(B)-----> Event Stream
                ^ nothing here

---------(A)--------------(B)-----> Property
                ^ still A
```

A property is basically an event stream with a notion of state. The property will remember the state of the stream (which is the event
object or mapped value). It also provides two helper methods: scan and assign.

```js
buttonState = enable.merge(disable).toProperty(false); // initial state = false
buttonState.onValue((state) => $('#button').toggleClass('enable', state));
```

Different names: Signal = Property = Subject = Behaviour = Attribute = holds onto the latest event's value.

## FRP makes us think in terms of data dependencies

At the root of it for me, Baconjs makes you think about required data to do something, rather than a series of steps to do it - like turning
your programming into an algebra equation.

In order for me to display to a user their username, I need data end point to tell me what it is. I know how to ask for that data, I start
with a user ID. I don't care when a username happens, or how that data is fetched - but it must happen for me to display a username.

```js
let userDataStream = getUserData({ userId: 123 });

let username = userDataStream.map('.username');
let displayName = userDataStream.map('.displayName');

username.onValue((data) => {
    document.getElementById('username').textContent = data;
});

displayName.onValue((data) => {
    document.getElementById('displayName').textContent = data;
});
```

In the above example, `userDataStream` is a stream that hits an API and returns back a lot of user data. But I'm not interested in anything
past the username (and because I can, the display name of that user).

The `username` is now dependent on the `userDataStream`. Whenever the `userDataStream` updates, the `username` will change.

The `displayName` is also dependent on the `userDataStream`, and will update in the same fashion.

I only hit the API from `getUserData` once. But I can create as many streams from other streams as I like.

Baconjs lets me worry about stating dependencies between data. I know the username can never been updated, not even by accident - unless the
userDataStream updates.

Another example: Perhaps an example would help. Imagine moving a mouse over your browser. It produces a stream of x and y values. Rather
than using a callback for every mouse move, we can work with the mouse events as a single object over time: an event stream. Suppose we want
to know when the mouse moves past a line on the screen at 100px. In regular code we could do this:

```js
document.body.addEventListener('mousemove', (e) => {
    if (e.pageX > 100) {
        console.log('we are over 100');
    }
});
```

With FRP we would create a stream based on mouse move, then filter it to only have X values over 100, like this:

```js
Bacon.fromEvent(document.body, 'mousemove')
    .filter((v) => v > 100)
    .onValue((v) => {
        console.log(`we are over 100: ${v}`);
    });
```

We have separated the action, printing a message, from the source of the stream and any filtering operations. We can also add more
operations to the stream if we want, and abstract the filters out further.

---

title: Event streams explained date: 2019-10-24 spoiler: An attempt at explaining what an Observable or Event Stream is in the context of
functional reactive programming. category: rxjs

---

https://codepen.io/fede/post/baconjs

The way in which functional reactive programming is explained often leads to confusion.

-   functionalMost people know what the P is, and the F seems fairly understandable, but the R can be misleading at times.

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
