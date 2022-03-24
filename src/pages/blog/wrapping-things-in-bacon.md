---
title: Wrapping things in Bacon
date: 2016-09-17
spoiler: Learn to create event streams from multiple sources, including DOM events, promises, timers and many others.
category: frp
---

And by _wrapping things in Bacon_ I mean creating observables by wrapping values as reactive data types in Bacon.js. I believe this is a
good starting point if you are interested in functional reactive programming.

## A little bit of context

Functional Reactive Programming (FRP) is **functional programming with first class representation for values that change over time**. We can
represent sequences of any event occurring asynchronously at unknown points in time as a **stream**.

There are many implementations of the core concepts of FRP, but today we'll be using [Bacon.js](https://github.com/baconjs/bacon.js).

In _Baconland_ we have two different abstractions for reactive data: **Properties** and **Event Streams**. Properties are continuous values
whereas event streams are discrete values. More on this later.

## Creating Observables

We use observables to wrap any chunk of data (numbers, strings, arrays, objects, collections, DOM events like button clicks or key presses)
and decorate it with stream-like qualities.

You can create reactive datatypes by wrapping these various sources. Which wrapper to use depends on what kind of data source you have.
Let's have a look at the most common ones.

A little aside: since streams are immutable by nature we can safely use the ES6 `const` keyword to declare our variables, to convey that
reassignment is off the table.

One more thing: the reason why we need to create an instance of a Bacon-y data type is that JavaScript doesn't implement FRP natively
([yet?](https://github.com/tc39/proposal-observable)), so in order to get these observable objects with all the built-in reactive
superpowers we need to wrap data sources in a handful of constructor methods Bacon provides. For instance, mouse clicks is a valid source
for an event stream.

Finally, check out the [official docs](https://github.com/baconjs/bacon.js#creating-streams) for a more thorough reference of wrapper
methods and further examples on how to create reactive datatypes from other sources. You can also play around with
[this CodeSandbox](https://codesandbox.io/s/wrapping-things-in-bacon-zw6hn) as you follow along these examples.

## From a DOM event using `Bacon.fromEvent`

We can use observables to interact with the DOM. By using `Bacon.fromEvent` we can listen for any DOM events like mouse clicks, key presses,
input changes, page scrolls, mouse moves, etc.

For instance, this event listener and handler:

```js
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    console.log('you just clicked on the button');
});
```

can be _baconified_ by doing:

```js
Bacon.fromEvent(document.querySelector('#btn'), 'click').onValue(() => {
    console.log('you just clicked on the button');
});
```

Not a big difference so far, but Bacon provides a functional interface to manipulate, combine and handle event streams:

```js
const button = document.querySelector('#btn');
const clickStream = Bacon.fromEvent(button, 'click');

clickStream
    .map(() => Math.round(10 * Math.random()))
    .filter((value) => value > 0)
    .onValue((value) => {
        console.log(value);
    });

clickStream
    .skip(1)
    .take(4)
    .onValue(() => {
        console.log('this displays on clicks 2-5 only');
    });
```

Now try to rewrite that using callbacks...

## From a promise using `Bacon.fromPromise`

A stream from a promise will resolve the promise only when subscribed to, and then push the resolved value into the stream. This stream will
contain a single value or an error, followed immediately by stream end.

```js
const ajaxCall = fetch('https://files.fedknu.com/blog/wrapping-things-in-bacon/cities.json')
    .then((response) => response.json())
    .catch((error) => {
        console.error('parsing failed', error);
    });

Bacon.fromPromise(ajaxCall)
    .flatMap(Bacon.fromArray)
    .map((location) => `${location.city}, ${location.state}`)
    .onValue((location) => {
        console.log(location);
    });
```

## From a timer using `Bacon.sequentially`

`Bacon.sequentially(interval, values)` takes an interval in milliseconds and an array of values, and creates an event stream that emits one
value at a time, all delivered with the given interval. It will stop once all values have been emitted.

```js
Bacon.sequentially(1000, [1, 2, 3, 4, 5]).onValue((value) => {
    console.log(value);
});
```

## From a timer using `Bacon.repeatedly`

This one is sort of similar to `Bacon.sequentially`, except for this one never stops emitting values. `Bacon.repeatedly(interval, values)`
repeats all the values indefinitely with the given interval in milliseconds.

```js
Bacon.repeatedly(1000, ['spring', 'summer', 'autumn', 'winter']).onValue((value) => {
    console.log(value);
});
```

## From a timer using `Bacon.interval`

`Bacon.interval(interval, value)` repeats the (single) value indefinitely with the given interval in milliseconds.

In this example, the stream will emit "beep!" every second. It's important to note this stream never ends once you subscribed to it unless
you specifically unsubscribe.

```js
Bacon.interval(1000, 'beep!').onValue((value) => {
    console.log(value);
});
```

## From a timer using `Bacon.later`

`Bacon.later(delay, value)` creates a single-element stream that produces the given value after the specified delay (also in milliseconds).

In this case, Bacon will throw the value "I am one second late" into the stream after one second:

```js
Bacon.later(1000, 'I am one second late').onValue((value) => {
    console.log(value);
});
```

## From an array using `Bacon.fromArray`

`Bacon.fromArray(values)` returns a stream that fires one event for each element in the array to the first subscriber only. The stream ends
after these values have been delivered.

```js
Bacon.fromArray([1, 2, 3, 4])
    .reduce(0, (accumulator, value) => accumulator + value)
    .onValue((value) => {
        console.log(value);
    });
```

By the way: `fold()` and `reduce()` are aliases. You can use them interchangeably.

One more thing: try replacing `reduce()` with `scan()` to see what happens.

## From a single value using `Bacon.once`

`Bacon.once(value)` creates an event stream that delivers the given single value for the first subscriber only (in other words, this means
this stream can only have one subscriber). The stream will end immediately.

```js
Bacon.once('rawr').onValue((value) => {
    console.log(value);
});
```

## From a callback using `Bacon.fromCallback`

`Bacon.fromCallback(sink)` creates a stream from a function that accepts a callback (aka: **sink**). The function is supposed to call its
callback just once.

In this example, we are creating a stream that outputs a single value and ends after that. Here `sink` is the callback, as in, the sinkhole
you throw stuff into to make it go off and be an event in the event stream.

```js
Bacon.fromCallback((sink) => {
    setTimeout(() => {
        sink('some-new-value-for-event');
    }, 1000);
}).onValue((value) => {
    console.log(value);
});
```

Or you can also:

```js
sink(new Bacon.Error('Died...'));
```

## From anything else using `Bacon.fromBinder`

If none of the methods above work for your particular use case, you can create your very own **custom stream** with
`Bacon.fromBinder(subscribe)`.

This factory function takes in a `subscribe` callback which looks like this:

```js
const subscribe = (sink) => sink(event);
```

`sink` is another function that we can use to push events down the stream within our subscription function. These events can be either:

-   plain values, such as a string, a number, an instance of `Date`, etc.
-   single instances of the `Event` object, such as `Bacon.Error` (to wrap errors that need to travel down the stream) and `Bacon.End` (to
    indicate the stream has been terminated).
-   array of instances of the `Event` object (e.g. multiple `Bacon.Error`).

Here we'll be recreating the `Bacon.interval` example above:

```js
const interval$ = (interval, value) =>
    Bacon.fromBinder((sink) => {
        const id = setInterval(() => sink(value), interval);

        return () => clearInterval(id);
    });

interval$(1000, 'beep!').onValue((value) => {
    console.log(value);
});
```

Note that our subscribe function needs to return its own unsubscribe function. That's why, in this case, we are returning a reference to the
global `clearInterval` function to prevent the interval from emitting any more values. This unsubscribe function should release and clean up
all resources that the subscribe function reserved and used.

## Using `Bacon.never`

`Bacon.never()` creates an event stream that:

-   will immediately end, and
-   will never produce/emit any events

Yeah, I know. Why would you ever want this? One particular use case would be using `flatMap()` along with `Bacon.never()` for converting and
filtering values at the same time. In this example we are converting strings to integers while skipping empty values:

```js
stream.flatMap((text) => (text != '' ? parseInt(text) : Bacon.never()));
```

So rather than returning an empty event (`null` or whatever) and then filter that out, we can just return a stream that'll never emit.

## Subscribing to an Observable

Since all values happen over time, we have no idea when they will be available, thus we can't treat these values synchronously. We need to
provide a callback that can be ran once a value gets pushed to the stream. This can be done with a subscriber, which is just a function that
is called once you have data coming through in your observable.

In Bacon.js we usually use the `onValue()` method to subscribe to an observable.

-   **Heads up #1:** `onValue` returns a function to unsubscribe from the stream. This is important to remember as it means that we cannot
    continue our chaining pipeline after a subscriber method. More on this later.
-   **Heads up #2:** All reactive datatypes created using Bacon.js are lazy evaluated. This means the data flow just won't happen at all
    unless you have a subscriber at the end of your pipeline. This also means event listeners aren't bound to the DOM before the first
    subscription.

There is also a special subscriber that behaves a bit differently: `log()`, which we can use for logging all of the values in an observable.
This logger method **will initiate the data flow**, but it won't return an unsubscribe function, rather the observable itself which means we
can keep on chaining methods.

## Unsubscribing from an Observable

When you register a subscriber to a stream (that is, whenever you chain the `onValue()` method to your stream) you get back an unsubscribe
function which you can call later on to unsubscribe from that stream.

```js
const unsubscribe = Bacon.fromEvent(document.querySelector('#btn'), 'click').onValue(() => {
    console.log('you just clicked on the button');
});

// later on...
unsubscribe();
```

Unsubscribing simply means to stop listening for events (or, in other words, destroying the stream). This will also properly clean up and
dispose of any event handlers and temporary objects created.

Now, if this was the last of the subscribers (in this case it was the only one) and you run the unsubscribe function, the stream gets
closed, ie: the event handler will be removed from the DOM. Useful links

Some resources I've used to put this post together:

-   https://github.com/baconjs/bacon.js/
-   https://github.com/darrennolan/bacon.js-docs/
-   https://github.com/mikaelbr/bacon-love/
