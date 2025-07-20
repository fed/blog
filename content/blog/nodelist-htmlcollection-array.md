---
title: On NodeLists, HTMLCollections and Arrays
date: 2020-03-09
description: Treating
tags: browsers
draft: true
---

`NodeList`, `HTMLCollection` and `Array` are all different things.

`Nodelist` is an iterator. Iterators can be turned into arrays (using Array.from or the spread operator \[...iter\]) - They can also be
for...of'd like other iterators. Sure, I know the ressource as I have dropped jQuery a long time ago, but I'm still not fond of using the
native APIs.

I mean, `document.querySelectorAll(selector);` and then you get a `NodeList`. But if you use `getElementsByClassName` you get an
`HTMLCollection` and can't even iterate on it unless you convert it to an array by using `Array.from(el)` or `[...el]`.

> NodeLists and Arrays are two different things because NodeLists are actually not a JavaScript API, but a browser API. Things like
> querySelectorAll() and getElementsByTagName() aren’t JavaScript methods, they’re browser APIs that let you access DOM elements. You can
> then manipulate them with JavaScript.

children is a property that lets you select direct descendants (elements that are immediately nested in another element). It returns a HTML
Collection that updates when children elements are changed.

A HTML Collection is similar to a NodeList (that querySelectorAll returns). There are subtle differences that don’t really matter for the
context of this article.

What matters is—a HTML collection is an array-like object. If you want to loop over it with Array.prototype.forEach, you need to convert it
into an array with Array.from first.

## Operating on `NodeList` or `HTMLCollection`

After querying the DOM for a collection of elements, you might want to operate on them by using methods such as `map`, `filter`, `reduce`.

Note: `forEach` is readily available on X but not on Y.

```js
const nodeList = document.querySelectorAll("div");
```

The following
[doesn't work on IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility):

```js
const array = Array.from(nodeList);
```

The following needs to be transpiled as it's
[not supported on all browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Browser_compatibility):

```js
const array = [...nodeList];
```

The following are safe to use on all browsers:

```js
// option I
const array = Array.prototype.slice.call(nodeList);

// option II
const array = [].slice.call(nodeList);
```

The Array.prototype.slice.call() approach has been around for a long time. It works in all modern browsers, and back to at least IE6.
(rephrase)

If you don't need to convert the collection to an array, but rather operate on it in place, you can use the following:

```js
// option I
Array.prototype.filter.call(nodeList, callback);

// option II
[].filter.call(nodeList, callback);
```

The example above uses `filter` but the same is valid for `map`, `reduce`, and all array prototype methods.

Seen here: https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/

Now what are NodeList and HTMLCollection objects and why are we not getting the plain vanilla javascript array from these methods?

Let’s try to understand the difference between HTMLCollection and NodeList first.

    An HTMLCollection is a list of nodes. An individual node may be accessed by either ordinal index or the node’s name or id attributes.

    Collections in the HTML DOM are assumed to be live meaning that they are automatically updated when the underlying document is changed.

HTML Collections are always “in the DOM”, whereas a NodeList is a more generic construct that may or may not be in the DOM.

    A NodeList object is a collection of nodes. The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live or static based on the interface used to retrieve them

We can see that the HTMLCollection is literally live, in the sense, any change to DOM is updated automatically and available in the
collection.

Not all NodeList objects are static. For example, document.getElementByName will return a live NodeList.

But remember that neither HTMLCollectionnor NodeList support the array prototype methods like push pop or splice methods . Iterator methods
like forEach have been recently added though and latest browsers might support them.
