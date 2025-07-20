---
title: Focusing and skipping tests
date: 2020-01-23
description: Some notes on how to tell your testing framework which tests to run.
tags: testing
---

When writing unit tests, you might need to temporarily choose which tests to execute. You could achieve this by commenting out the tests you
don't want to run, although there's also another way built in in your testing framework.

## Mocha

With Mocha, you can use `it.only()` and `describe.only()` for [exclusive tests](https://mochajs.org/#exclusive-tests). This will run just
the tests marked with `only` and ignore the rest.

```js
// Both tests in this describe block will run
describe.only("when something happens", () => {
	it("should do something", () => {});
	it("should do something else", () => {});
});

// This test case won't be executed
it("should also do this", () => {});
```

Conversely, use `it.skip()` and `describe.skip` for [inclusive tests](https://mochajs.org/#inclusive-tests). All tests marked with `skip`
will not be run.

```js
// Neither of the tests in this describe block will run
describe.skip("when something happens", () => {
	it("should do something", () => {});
	it("should do something else", () => {});
});

// This test case  isn't affected by the describe.skip and will therefore be executed
it("should also do this", () => {});
```

You can also combine these two together. In the example below, the only test cases being run are **"should do something"** and **"should
also do this"**:

```js
describe.only("when something happens", () => {
	it("should do something", () => {});
	it.skip("should do something else", () => {});
});

// This test case  isn't affected by the describe.skip and will therefore be executed
it.only("should also do this", () => {});
```

## Jasmine

If you are using Jasmine, you can choose to run a particular test case or suite (or set of test cases/suites) by changing `it()` to
[`fit()`](https://jasmine.github.io/api/3.4/global#fit) and `describe()` to
[`fdescribe()`](https://jasmine.github.io/api/3.4/global#fdescribe), respectively.

```js
// Both tests in this suite will run
fdescribe("when something happens", () => {
	it("should do something", () => {});
	it("should do something else", () => {});
});

// This test case won't be executed
it("should also do this", () => {});
```

To skip tests on the other hand, replace `it()` with [`xit()`](https://jasmine.github.io/api/3.4/global#xit) for individual test cases and
`describe()` with [`xdescribe()`](https://jasmine.github.io/api/3.4/global#xdescribe) for test suites.

```js
// Neither of the tests in this suite will run
xdescribe("when something happens", () => {
	it("should do something", () => {});
	it("should do something else", () => {});
});

// This test case  isn't affected by the xdescribe and will therefore be run
it("should also do this", () => {});
```
