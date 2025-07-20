---
title: Making sense out of context
date: 2016-12-30
description: Learn how the this keyword works, and the different ways in which contexts are bound on function calls.
tags: javascript
---

The `this` keyword is probably one of the most misunderstood aspects of JavaScript. At the root of it for me, it allows us to reuse
functions within different contexts, or in other words, it allows us to decide which objects should be focal when invoking a function.

Whenever you're trying to figure out what the value of this is, you need to look at where the function is being invoked. Not when it was
defined, but specifically when it was called.

Let's say we have a function called `sayHi` which takes in a name and logs to the console `Hi, ${name}`, `name` being whatever argument name
we pass in.

```js
function sayHi(name) {
	console.log("Hello, my name is " + name);
}
```

If I were to ask you right now what name this last function is logging to the console, you wouldn't have a clue because you can't possibly
know what `name` is until the function is invoked.

The exact same idea holds for the `this` keyword. We can't know what the value of `this` is until that function gets run.

## Context Bindings

There are four different types of bindings in JavaScript:

1. Implicit Binding
2. Explicit Binding
3. `new` Binding
4. `window` Binding

### Implicit Binding

> TL;DR: look at the immediate left of the dot at call time.

Whenever you call a function that's attached to an object, look to the left of the dot, and that is what the `this` keyword is going to be.

```js
var Person = function (name) {
	return {
		name: name,
		sayHi: function () {
			console.log("Hi, my name is " + this.name);
		}
	};
};

var homer = new Person("Homer Simpson");

homer.sayHi(); // "Hi, my name is Homer Simpson"
```

Now, what if we had a nested object within this `homer` object called `daughter` which also had a `name` property and a `sayHi` method?

```js
var homer = {
	name: "Homer Simpson",
	sayHi: function () {
		console.log("Hi, my name is " + this.name);
	},
	daughter: {
		name: "Lisa Simpson",
		sayName: function () {
			console.log("Hi, my name is " + this.name);
		}
	}
};

homer.sayHi(); // Hi, my name is Homer Simpson
homer.daughter.sayHi(); // Hi, my name is Lisa Simpson
```

Well, this doesn't really matter as we always look at what's to the left of the dot, in this case, `homer.daughter.sayHi()` is going to be
bound to the `daughter` object. The object which is immediately to the left to the dot is always the context used.

### Explicit Binding

> TL;DR: we explicitly tell a function what the context (= value of the `this` keyword) is by using one of these prototype methods: `call`,
> `apply` or `bind`.

This is about explicitly setting the value of `this` to a function upon execution.

Let's say we have a `getCountryDetails` function which is not a method on any object we've created, rather a function attached to the global
scope:

```js
function getCountryDetails() {
	console.log(
		this.country +
			"'s capital city is " +
			this.capital +
			" and as of " +
			arguments[0] +
			" the country has a population of " +
			this.population +
			" according to " +
			arguments[1]
	);
}
```

Note that `getCountryDetails` looks like a free flowing function, but there are actually no free flowing functions in JavaScript. They're
all attached to some object. In this case, `getCountryDetails` is attached to the global `window` object.

Now, what we want to do is somehow call this function in the context of these two countries:

```js
var au = {
	country: "Australia",
	capital: "Canberra",
	population: "23M"
};
var nz = {
	country: "New Zealand",
	capital: "Wellington",
	population: "4M"
};
var today = "30/12/2016";
var source = "Wikipedia";
```

We've got a number of ways to achieve this.

- `Function.prototype.call`
- `Function.prototype.apply`
- `Function.prototype.bind`

What this means is every function (that is, every instance of `Function`) has a `.call` method, an `.apply` method and a `.bind` method that
allows us to do what we want to do.

#### i. Call

Here's the signature for call:

```js
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

In layman's terms this means:

- The very first argument `call` takes in is the context you want to use.
- Afterwards, you can pass in any number of comma-separated values which will be treated as arguments for the function `fun`.

You can remember this because: **call starts with "c" as in "comma-separated arguments"** 💥

Here's our country details example using `call`:

```js
getCountryDetails.call(nz, today, source);
// "New Zealand's capital city is Wellington and as of 30/12/2016 the country has a population of 4M according to Wikipedia"
```

#### ii. Apply

The signature for apply is as follows:

```js
fun.apply(thisArg, [argsArray]);
```

As opposed to the `call` method, this one takes only two arguments:

- First argument is the context we want to use.
- Second argument is an array of values which are gonna be used as the arguments passed in to the function `fun`.

You can remember this because: **apply starts with "a" as in "array of arguments"** 💥

Again, here's our country details example using `apply`:

```js
getCountryDetails.apply(au, [today, source]);
// "Australia's capital city is Canberra and as of 30/12/2016 the country has a population of 23M according to Wikipedia"
```

#### iii. Bind

`bind` is almost the exact same thing as `call`, except it defers the function invocation, i.e.: `bind` returns a whole new function instead
of invoking the original one.

This new function is bound to the scope we pass in and also keeps track of the comma-separated values we've provided as arguments.

```js
var getAustraliaDetails = getCountryDetails.bind(au, today, source);
// nothing happens just yet...

getAustraliaDetails(); // we need to manually run the resulting function
// "Australia's capital city is Canberra and as of 30/12/2016 the country has a population of 23M according to Wikipedia"
```

If we were to recreate `Function#bind`, this is what it'd look like:

```js
Function.prototype.bind = function (context) {
	var fn = this;
	var outerArgs = [].slice.call(arguments, 1);

	return function () {
		var innerArgs = [].slice.call(arguments, 0);
		fn.apply(context, [].concat(outterArgs, innerArgs));
	};
};
```

One more thing about `bind`. This is a simple example of a functional programming technique called **partial application** which allows the
remaining arguments to be passed in when the new bound function is called:

```js
var missingSource = getCountryDetails.bind(au, today);
var missingAllArgs = getCountryDetails.bind(au);

missingSource(source);
missingAllArgs(today, source);
```

#### Let's recap:

- `call`, `apply` and `bind` they all allow us to explicitly set the value of `this` when calling a function.
- `call` and `apply` both invoke the bound function immediately.
- `bind` doesn't invoke the bound function immediately, rather returns a new function we can run later.
- `call` and `apply` differ only in the format they take extra arguments in: use comma-separated values for `call`, and an array of values
  for `apply`.
- `bind` takes extra arguments as comma-separated values, just as `call` does.

### `new` Binding

> TL;DR: whenever we've got a function invoked with the `new` operator, the `this` keyword here is bound to the new object being built by
> the function constructor.

Let's say we've got this `Dog` function constructor which takes in a name, a breed and a colour. By the way, we have capitalised the first
letter to express that this is function constructor, meaning it should be instantiated (i.e.: called with the `new` operator).

```js
var Dog = function (name, breed, color) {
	// this = {} --> `this` equals to a brand new object
	// being created by the `new` operator whenever the
	// function gets instantiated.
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.sayHi = function () {
		console.log("My name is " + this.name + ", woof!");
	};
};
```

Let's now instantiate a puppy:

```js
var puppy = new Animal("Rufus", "German Shepherd", "Black");
puppy.sayHi();
```

As we're invoking the function constructor with the `new` keyword, JavaScript is (under the hood) creating a new object for us and saving it
as our `this`, thus generating a brand new context.

This means, whenever we are instantiating a function constructor, we don't need to worry about binding the new instance to any particular
context as it already has its own.

### Window Binding

> TL;DR: if none of the other rules apply, then the `this` keyword defaults to the `window` object. This holds true as long as you are not
> in strict mode, otherwise `this` is `undefined`.

Let's go back to our `sayHi` function:

```js
function sayHi() {
	console.log("Hi, my name is " + this.name);
}
```

What if we just tried to invoke `sayHi` without specifying any context? Here we're not using `call`/`apply`/`bind`, there's also nothing to
the left of the dot, nor we are using the `new` operator.

```js
sayHi(); // undefined
```

Well, in this case we'll just get `undefined` back, because what's happening here is if you run a function that uses the `this` keyword but
it's not bound to anything else (that is, doesn't meet any of the previous binding rules), then `this` is going to automatically default to
the `window` object.

As a result, if we add a `name` property to the global `window` object we'll no longer get `undefined`:

```js
window.name = "Homer"; // could also be `var name = 'Homer';`
sayHi(); // we now get "Hi, my name is Homer"
```

What's interesting though, is that if we run this function in strict mode, we get an error because strict mode is smart enough to know this
might not be what we want. It kind of says: "Hey, you probably don't want to do what you're doing. You might now want the `this` keyword to
reference the `window` object, so I won't let you do that".

```js
function sayAge() {
	"use strict";
	console.log(this.age);
}

sayAge(); // bummer! type error thrown
```

### ES6 Goodness: Arrow Functions

Arrow functions are automatically bound to their lexical scope, i.e.: `this` gets passed in from the parent into the arrow function.

```js
function () {
    this.greeting = "G'day!";

    // If we don't bind this function, it'll echo out `undefined`
    setTimeout(function () {
        console.log(this.greeting);
    }.bind(this));

    // Binding here happens automagically using the parent scope
    setTimeout(() => {
        console.log(this.greeting);
    });
}
```

Some credits: I've first seen the terms implicit/explicit/new/window binding on this
[Egghead lesson by Tyler McGinnis](https://egghead.io/lessons/javascript-the-this-keyword-introduction-and-implicit-binding).
