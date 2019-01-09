---
title: Testing Asynchronous Code
date: 2019-01-09
---

This is just a brief explanation of why we need to call `done()` when we are testing asynchronous code.

To understand what's the deal with asynchronous testing, we first need to grasp what happens when we don't have an `expect` in our test -- that is, a spec with no assertions.

In Mocha (and most JavaScript testing frameworks for that matter), specs with no assertions just pass. Consider the following example:
 
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

This test will pass flawlessly, while it'd clearly had to fail: we've got a **false positive** in our test suite. This test provides no indication whatsoever there's something wrong with our code or test case.

This is because:

1. The expectation is delayed until the next tick.
2. The rest of the code finishes executing and Mocha finds no assertions, making the test pass (as we've seen before).

Since the expectation is delayed until the next tick, we are gonna get the next test case to fail, even though the code is fine and the test should normally pass **(!)**.

## Enter the `done` callback

Mocha, Jasmine and Jest automatically pass in a `done` callback we can use to **mark our test as asynchronous**: when this function is present, our test framework knows it has to wait for this callback to be called before completing the test.

```js
describe('Our second async test', () => {
  it('works a charm as it calls done()', done => {
    setTimeout(() => {
      expect(true).to.equal(true);
      done();
    }, 200);
  });
});
```

## Testing promises

If our code uses promises, we can skip calling `done` altogether and just return the promise instead: the testing framework will typically wait for the promise to resolve. If the promise gets rejected, the test will fail. This is useful if the APIs you are testing return promises instead of taking callbacks. Here's an example:

```js
it('returns a promise', () => {
    return fetch('https://api.myjson.com/bins/wwof4')
        .then(response => response.json())
        .then(data => {
            expect(data.cities[0]).to.equal('Sydney');
        });
});
```

## Using Async/Await

Alternatively, we can use Async/Await in our tests and get, at least in my opinion, a very readable test case:

```js
it('promise with async await, no done', async () => {
    const response = await fetch('https://api.myjson.com/bins/wwof4');
    const data = await response.json();

    expect(data.cities[0]).to.equal('Sydney');
});
```

TL;DR: it's fairly easy to screw up when testing asynchronous code. Make sure you carefully set up your tests the right way or else you'll end up with false positives in your suite -- and you don't want that :)
