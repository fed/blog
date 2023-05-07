---
title: Testing asynchronous code
date: 2019-01-09
spoiler: A brief intro to the different ways to set up your asynchronous tests and the reason behind it.
category: testing
---

To understand what the deal is with asynchronous testing, we first need to look into what happens when we don't have any assertions in our
tests.

In Mocha (and most JavaScript testing frameworks for that matter), specs with no assertions (i.e. test cases with no `expect`) just pass.
Consider the following example:

```js
describe('A test without assertions', () => {
    it('still passes', () => {
        const message = 'rawr';
    });
});
```

Run this and you'll find everything is fine: the test passes and Mocha moves on without warning us no assertion has been run.

Now consider the following example:

```js
describe('Our first async test', () => {
    it('is a false positive', () => {
        setTimeout(() => {
            expect(true).to.equal(false);
        }, 200);
    });
});
```

This test will pass flawlessly, while we'd expect it to fail: we've got a _false positive_ in our test suite. This test provides no
indication whatsoever there's something wrong with our code or test case.

This is because:

1. The assertion (the call to `expect`) is delayed until the next tick.
2. The rest of the code finishes executing and Mocha finds no assertions, making the test pass (as we've seen before).

Since the assertion is delayed until the next tick we are gonna get the next test case to fail, even though the code is fine and the test
should normally pass! Just imagine how hard it is to debug cases like this.

[Mocha](https://mochajs.org/#asynchronous-code), [Jasmine](https://jasmine.github.io/tutorials/async) and
[Jest](https://jestjs.io/docs/en/asynchronous#callbacks) automatically pass in a `done` callback we can use to _mark our test as
asynchronous_: when this function is present, our test framework knows it has to wait for this callback to be called before completing the
test.

```js
describe('Our second async test', () => {
    it('works a charm as it calls done()', (done) => {
        setTimeout(() => {
            expect(true).to.equal(true);
            done();
        }, 200);
    });
});
```

If our code uses promises, we can skip calling `done` altogether and just return the promise instead — the testing framework will typically
wait for the promise to resolve. If the promise gets rejected, the test will fail. This is useful if the APIs we are testing return promises
instead of taking in callbacks. Here's an example:

```js
it('returns a promise', () => {
    return fetch('https://files.fedknu.com/blog/async-testing/capitals.json')
        .then((response) => response.json())
        .then((data) => {
            expect(data.capitals[5]).to.equal('Wellington');
        });
});
```

Alternatively, we can use async/await in our tests to get, which at least in my opinion is the most readable version of our async tests:
here there's no need to return anything nor call `done` at all.

```js
it('promise with async await, no done', async () => {
    const response = await fetch('https://files.fedknu.com/blog/async-testing/capitals.json');
    const data = await response.json();

    expect(data.capitals[5]).to.equal('Wellington');
});
```

If you want to try this live, here's a
[CodeSandbox with all the code examples above](https://codesandbox.io/s/elegant-feynman-zdy2k?file=/test.js).
