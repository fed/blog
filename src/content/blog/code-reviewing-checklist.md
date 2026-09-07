---
title: Code reviewing checklist
date: 2020-03-12
description: Thoughts on what I consider to be important to look out for when doing code reviews.
tags: software-engineering
---

Here's a brief and high level description of the things that I usually try to look out for when reviewing someone else's frontend code. Just
a disclaimer that by no means this is supposed to be an exhaustive checklist, rather a compendium of aspects I consider worth focusing on
while checking someone else's pull request.

## Coding style, conventions and standards

Different people have different coding styles, and that's why I think we should try to avoid making opinionated comments on code formatting.
I'd much rather have tools like ESLint or Prettier take care of that instead of seeing people act as human linters. Reviewers can make more
insightful contributions than pointing out we need an extra line break after a variable declaration.

Sometimes, however, there are conventions that as a team we've come to adopt but which might not be easily enforced using a linter. For
instance we might agree upon appending `$` to all our event streams names, or naming our event handlers in a certain way (e.g. `onClick` vs.
`handleClick`), etc. The might be value in pointing out things like these during code reviews for the sake of consistency.

## Complexity, readability and maintainability

I think it's important to write code that is both easy to understand and to reason about. With this in mind, we might want to focus our
efforts on anything that could potentially help us or other developers understand our changes at a later point in time, such as ensuring the
solution is no more complex than it needs to be, making variable names as descriptive as possible, requesting comments on the "why" (as
opposed to the "what") where the purpose of some logic is a bit obscure or at least not too obvious, suggesting to move complex boolean
conditionals into their own variables, extracting complex logic into its own function or adding any supporting documentation, among many
others.

## Architectural overview

It usually pays off to look at the code diff at a higher level to understand if the solution being implemented is solid and makes sense, and
it's not just a temporary workaround that'll come back to bite us in the future.

We need to bear in mind, however, that sometimes tight deadlines happen and making compromises is inevitable. In situations like these it's
important to create follow up tasks to tackle tech debt sooner rather than later, while both the context and knowledge of the current
implementation are still fresh in our heads.

Also, we could consider looking for similar solutions that might have already been implemented somewhere else in the codebase. Sometimes we
can reuse existing code but the person who created the PR might have no clue such code already exists. Conversely, it's also a good idea to
keep an eye out for potential abstractions that could be useful somewhere else.

Something else would be to make sure the new code doesn't break/impact anything else. Sometimes this is only possible if we know the
codebase these changes are being implemented into well enough.

## Automated testing

Shipping tests along with your code changes is great, but not enough. Tests should give us the confidence to build on top of or make changes
to existing features in the code we are writing, and it's very important to make sure we are testing the right thing. Are we testing
implementation details rather than important business logic? Are we investing resources in testing the library or framework we are using
instead of the functionality that we built on top of that tool?

Also, different levels of testing should be used to test different aspects of our new code in order to cover different scenarios. Do we have
an appropriate combination of unit, integration, contract and end to end tests?

## Accessibility

Any new additions to the codebase need to be accessible, that's the right thing to do. We should make sure any new code can be used by
screen reader and keyboard users, makes sense semantically, has an appropriate level of colour contrast, etc. There are dedicated automated
testing tools, linters, browser extensions and thorough checklists that can help us make sure our changes are accessible.

Ideally we should always also conduct at least a basic level of manual testing as not all accessibility issues can be automatically detected
by the tools mentioned above.

## Internationalisation

Is all new content localised? This includes not only regular text content but also number formatting as well as date and time formatting.

## Security

Mostly make sure we are not trusting any user input to prevent possible attacks. Are we sanitising any form of user input such as query
params and input fields? Are we favouring [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) over
[`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) if possible? Same with React's
[`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

Double check we are not storing sensitive information in
[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage),
[`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), cookies and React/Redux state as anyone would be
able to see this information on the client using DevTools.

Be careful when including any third-party scripts or dependencies as we usually have no control over what they do.

Also ensure data gets checked and validated on both the frontend and the backend -- particularly things like user permissions which could
otherwise be tampered with on the client.

## Performance

Make sure we are caching all data that makes sense to be cached. By caching frequently accessed data, we can significantly improve the
perceived performance of our user interfaces, which results in a better user experience as pages will load faster and be more responsive.

In terms of number of bytes being shipped to the client, make sure any new assets are optimised, and any new dependencies being introduced
are really necessary.

Instead of suggesting micro optimisations when performance is not yet a problem, it would be a good idea to look out for things such as
expensive operations that could potentially be offloaded to a web worker to avoid blocking the UI thread, or sets of nested loops that will
be eventually iterating over fairly big-sized collections.

## Cross browser/platform compatibility

We should keep an eye on methods that might require _polyfilling_ or features that need to be _transpiled_ by Babel. For example, often
times we tend to use things such as `Object.entries` or `Array.from` without checking for their browser support, to then find the
application crashing on Internet Explorer or even on older versions of greenfield browsers. Same goes for using things such as the _object
spread operator_ which requires a special Babel plugin.

Things like mouse/touch/pointer events need to be handled appropriately to make sure the change works on mobile devices as well as
computers. And in general, if the change makes use of any browser API, we should double check its [current](https://caniuse.com/)
[support](https://developer.mozilla.org/).

## Operational maturity and production readiness

Operational aspects revolve around delivering high quality code that is reliable, resilient and performant in a way that can be measured and
tracked. Does the code include client-side error monitoring and logging so that we can get alerts when something goes wrong? Are we logging
the right analytics events and performance metrics? Do we have proper error handling? Are we communicating loading states in a way that
makes sense to the user? Is any new code behind a feature flag? Are we introducing any new feature flags in a way that makes it easy to
clean them up later on?

## Functional review

Finally, something else we can do is to check out and build the branch we are reviewing and manually test the changes. The person looking at
the code diff has more context on where the complexity might be, and will therefore be more likely to identify what could possibly go wrong
and also pinpoint edge cases or issues with the current changeset.
