---
title: Arrays, objects and mutations
date: 2017-03-06
description: Some ideas on how to treat arrays and objects as if they were immutable.
tags: javascript
---

Here are some thoughts on how to avoid mutations when working with arrays and objects in JavaScript by treating them as if they were
immutable data structures.

## What's a mutation?

An immutable value is one that, once created, can never be changed. In JavaScript, primitive values such as numbers, strings and booleans
are always immutable. However, data structures like objects and arrays are not.

By mutation I mean changing or affecting a source element. The goal is to **keep the original element unchanged** at all times.

> A mutation is a side effect: the fewer things that change in a program, the less there is to keep track of, which results in a simpler
> program.

I've marked techniques which involve a mutation to the source element with a ❌ whereas immutable methods are marked with a ✅.

## Adding new elements to an array

- `Array.prototype.push` ❌
- `Array.prototype.unshift` ❌
- `Array.prototype.concat` ✅
- Spread Operator (ES6) ✅

[`Array.prototype.push`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) allows us to push
elements to the end of an array. This method does not return a new copy, rather mutates the original array by adding a new element and
returns the new `length` property of the object upon which the method was called.

```js
const numbers = [1, 2];
numbers.push(3); // results in numbers being [1, 2, 3]
```

There's also [`Array.prototype.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
which we can use to add elements to the very beginning of an array. Just as `push`, `unshift` does not return a new copy of the modified
array, rather the new `length` of the array.

```js
const numbers = [2, 3];
numbers.unshift(1); // results in numbers being [1, 2, 3]
```

In these two examples we are mutating or changing the original array. Remember, **the goal is to keep the source array untouched**. Let's go
through some alternatives to adding new elements to an array without altering the source.

Perhaps the easiest way out would be to create a copy of the source array and push directly to it:

```js
const numbers = [1, 2];
const moreNumbers = numbers.slice();
moreNumbers.push(3);
```

We could call this a "controlled mutation" as we are indeed mutating an array, although not the original one, but a copy we created for this
purpose. However, [`Array.prototype.slice`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) can
be tricky as **it does not create a deep clone, rather a shallow copy of the source array**.

[`Array.prototype.concat`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) does indeed return a
new array, which is what we are after. We can make use of this method to return a new array with an extra element (or elements) appended to
the original one:

```js
const numbers = [1, 2];
const moreNumbers = numbers.concat([3]);
```

Just a little heads up: `concat` also returns a **shallow copy** of the source array (just as `slice` does). This means that it only copies
the **references** to both objects and other arrays within our original list. Shall you want to have a complete brand new copy of your
array, consider using Lodash's [`cloneDeep`](https://lodash.com/docs/#cloneDeep) which **recursively clones the array or object** passed in
as a param:

```js
const people = [{ name: "Bob" }, { name: "Alice" }];
const morePeople = cloneDeep(people).concat([{ name: "John" }]);

console.log(people[0] === morePeople[0]); // returns false
```

**Shallow copies vs deep clones** is a recurrent topic throughout this post. Remember to always use `cloneDeep` if the elements of your
source array are other arrays or objects and you need to keep them untouched. However, bear in mind **deep cloning is an expensive operation
in terms of performance**. You might not always need a deep clone — in fact, and as a rule of thumb, you should probably avoid creating deep
clones as long as you can: just consider whether you really need them and, in case you do, be aware of the tradeoffs.

Going back to adding new elements to an array in an immutable way, we could also use the
[spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator), available since ES6, as a
replacement to `concat`:

```js
const numbers = [1, 2];
const moreNumbers = [...numbers, 3];
```

So far we have added elements either to the very beginning or very end of the array, but it's also possible to add elements to any position
by using [`Array.prototype.splice`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). Bear in
mind `splice` changes the source array.

```js
const positions = ["First", "Second", "Fifth", "Sixth", "Seventh"];
positions.splice(2, 0, "Third", "Fourth");
```

In this example, the second argument (`0`) means "do not remove anything".

Again, we can achieve the same thing without mutating the original array by using `concat`:

```js
const positions = ["First", "Second", "Fifth", "Sixth", "Seventh"];
const morePositions = positions.slice(0, 2).concat(["Third", "Fourth"]).concat(positions.slice(2));
```

And once again, the spread operator gets the job done as well:

```js
const positions = ["First", "Second", "Fifth", "Sixth", "Seventh"];
const morePositions = [...positions.slice(0, 2), "Third", "Fourth", ...positions.slice(2)];
```

## Adding new properties to an object

- Direct addition ❌
- `Object.assign` (ES6) ✅
- Object spread operator (experimental, not yet standardised) ✅

We can easily add new properties to an object by setting them directly. Of course, this constitutes a mutation to the original object:

```js
const person = { name: "John Doe", email: "john@doe.com" }; // Using dot notation
person.age = 27; // Using array notation
person["nationality"] = "Australian";
```

Probably the most widespread solution to add further properties without changing the source object is to use
[`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) or Lodash's
[`assign`](https://lodash.com/docs/#assign) (they both have the same signature):

```js
const person = { name: "John Doe", email: "john@doe.com" };
const samePerson = Object.assign({}, person, {
	age: 27,
	nationality: "Australian"
});
```

A note on `Object.assign`: see how the first argument is a new, empty object? Well, it's important to know `Object.assign` mutates the first
parameter you pass on to it. That's why I'm passing `{}` and not `person` as the first argument, as I don't want `person` to be modified by
this operator. The takeaway here is to **always pass in an empty object as the first param if you want to keep the source objects
untouched**.

Similarly to what happens with arrays, we can make use of the **object spread operator** which by the way is not yet standardised. The
object spread operator is conceptually similar to the ES6 array spread operator.

```js
const person = { name: "John Doe", email: "john@doe.com" };
const samePerson = { ...person, age: 27, nationality: "Australian" };
```

## Removing elements from an array

- `Array.prototype.splice` ❌
- `Array.prototype.pop` ❌
- `Array.prototype.shift` ❌
- `Array.prototype.slice` & `Array.prototype.concat` ✅
- `Array.prototype.slice` & the ES6 Spread Operator ✅
- `Array.prototype.filter` ✅

[`Array.prototype.splice(index, number)`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
removes `number` elements starting from `index`, and returns an array of the removed elements.

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
cities.splice(2, 1); // removes 1 element from the 2nd index (Cork)
```

[`Array.prototype.pop`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) can be used to remove
elements from the **end** of the array. It also returns the removed element. This is kind of the inverse function of `Array.prototype.push`.

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const bern = cities.pop(); // removes Bern from the list of cities
```

Then we've got [`Array.prototype.shift`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) which
removes the **first** element of an array and returns it as well. This would be the inverse function of `Array.prototype.unshift`.

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const oslo = cities.shift(); // removes Oslo from the list of cities
```

`splice`, `pop` and `shift` all mutate the source array. Let's now go through some techniques to keep the original array untouched.

Let's say we want to derive a `capitals` array from the list of cities in the previous examples, meaning we need to remove _Cork_ and keep
all of the others. To achieve this we can use a combination of `slice` and `concat` to create a copy of a slice of the source array (from
the beginning up to the second element, which is not included) and then concatenating it with another slice of the original array, this time
from the third position onwards. This way we got rid of the element at the second index (in this case, _Cork_).

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const capitals = cities.slice(0, 2).concat(cities.slice(3));
```

We can achieve the same thing using the spread operator:

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const capitals = [...cities.slice(0, 2), ...cities.slice(3)];
```

We could also use [`Array.prototype.filter`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to
filter out the element (or elements) we want to get removed. This method **returns a new array**.

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const capitals = cities.filter((city) => city !== "Cork");
```

We can also filter by index:

```js
const cities = ["Oslo", "Rome", "Cork", "Paris", "London", "Bern"];
const capitals = cities.filter((city, index) => index !== 2);
```

## Removing properties from an object

- `delete` operator ❌
- Object destructuring ✅
- Lodash's `pick` and `omit` ✅

We can remove properties from an object by using the
[`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator. This, of course, changes or mutates
the source object.

```js
const person = { name: "John Doe", email: "john@doe.com", age: 27 }; // dot notation
delete person.age; // array notation
delete person["age"];
```

In order to avoid mutations we can easily use the ES6 spread operator (**object destructuring**):

```js
const person = {
	name: "John Doe",
	email: "john@doe.com",
	age: 27,
	country: "Australia",
	language: "English",
	profession: "Front End Developer"
};
const { profession, country, ...newPerson } = person;

console.log(newPerson);
```

where `profession` and `country` are the properties we want removed from the new object.

We can also resort to Lodash's [`pick`](https://lodash.com/docs/#pick) and [`omit`](https://lodash.com/docs/#omit). They both have the same
signature: first argument is the object you are gonna work on, whereas the second one can be either a string or an array of strings of the
property or properties we want preserved or removed. **They both return a new object.**

```js
const person = { name: "John Doe", email: "john@doe.com", age: 27 };
const fewerDetails = _.omit(person, "age"); // or we could use pick which is the inverse of omit
const fewerDetails = _.pick(person, ["name", "email"]);
```

## The takeaway

- There are contexts in which mutation is not allowed (e.g. Redux reducers), but it's fine in many other cases. This is why it's essential
  to differentiate between **observable and unobservable mutations**. If you create an object in a function and then just need to populate
  it, it's not very clever to try to avoid a mutation, let alone very inefficient.
  [This thread](https://www.reddit.com/r/reactjs/comments/5xg6ky/react_trend/deie19b/) is a good read on the topic.
- Remember that the spread operator, `Array.prototype.concat`, `Array.prototype.slice`, etc. they only return a shallow copy of the array.
  If this is not good enough for your use case, use Lodash's `cloneDeep`.
- Also remember that returning a new array/object instead of mutating the original one, and particularly deep clones, are expensive in
  terms of performance. Just be aware that keeping data structures immutable comes with a price.

## Credits

This post is heavily inspired on the need to
[keep state immutable on Redux reducers](http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html) and touches on concepts
taught by [Dan Abramov](https://twitter.com/dan_abramov) on his [Redux course](https://egghead.io/courses/getting-started-with-redux).
