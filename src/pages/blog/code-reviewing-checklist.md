---
title: Code reviewing checklist
date: 2020-03-12
spoiler: Thoughts on what I usually look out for when doing code reviews.
category: general
---

Here's a brief and high-level description of the things that I usually try to look out for when reviewing someone else's frontend code. Just a disclaimer that by no means this is supposed to be an exhaustive checklist, rather a compendium of aspects I consider worth focusing on while checking someone else's pull request.

## Coding style, conventions and standards

Different people have different coding styles, that's why I reckon we should try to avoid making opinionated comments on code formatting. I'd much rather have tools like ESLint or Prettier take care of that instead of seeing people act as *human linters*... reviewers can make more insightful contributions than pointing out we need an extra line break after a variable declaration.

Sometimes, however, there are conventions that as a team we've come to adopt but which cannot be enforced using a linter. For instance we might agree upon appending `$` to all our event streams names, or naming our event handlers in a certain way (e.g. `onClick` vs. `handleClick`), etc. Maybe things like these we could point out during code review for the sake of consistency.

## Complexity, readability and maintainability

I think it's important to write code that is both **easy to understand and to reason about**. With this in mind, we might want to focus our efforts on anything that could potentially help us or other developers understand our changes at a later point in time, such as ensuring the solution is no more complex than it needs to be, making variable names as descriptive as possible, requesting comments on the "why" (as opposed to the "what") where the purpose of some logic is a bit obscure or at least not too obvious, suggesting to move complex boolean conditionals into their own variables, extracting complex logic into its own function or adding any supporting documentation.

## Architectural overview

It usually pays off to look at the code diff at a higher level to understand if the solution being implemented is solid and makes sense, and it's not just a temporary workaround that'll come back to bite us in the future.

We need to understand, however, that sometimes tight deadlines happen and making compromises is inevitable. In situations like these it's important to create follow-up tasks to tackle tech debt sooner rather than later, while both the context and knowledge of the current implementation are still fresh in our heads.

Also, we could consider looking for similar solutions that might have already been implemented somewhere else in the codebase. Sometimes we can reuse existing code but the person who created the PR might have no clue such code already exists. Conversely, it's also a good idea to keep an eye out for potential abstractions that could be useful somewhere else.

Something else would be to make sure the new code doesn't break/impact anything else. Sometimes this is only possible if we know the codebase these changes are being implemented into well enough.

## Automated testing

Shipping tests along with your code changes is great, yet not enough. We need to make sure we are testing the right thing. Are we testing implementation details rather than important business logic? Tests should give us the confidence to build on top of or make changes to existing features in the code we are writing.

## Accessibility

Any new additions to the codebase need to be accessible, that's the right thing to do. We should make sure any new code is accessible to screen readers users, can be used with the keyboard only, makes sense semantically, has an appropriate level of colour contrast, etc. There are dedicated tools, ESLint plugins, browser extensions and thorough checklists that can help us make sure our changes are accessible.

Ideally we should also conduct a quick manual test, see if the changes are keyboard accessible, if they make sense when using a screen reader, etc. as not all accessibility issues can be automatically detected by the tools mentioned above.

## Security

Mostly make sure we are not trusting any user input to prevent possible attacks. Are we sanitising any form of user input such as query params and input fields? Are we favouring [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) over [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) if possible? Same with React's [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

Double check we are not storing sensitive information in `localStorage`, `sessionStorage`, cookies and React/Redux state as anyone would be able to see this information on the client using DevTools.

Be careful when including any third-party scripts or dependencies as we usually have no control over what they do.

Also ensure data gets checked and validated on both the frontend and the backend -- particularly things like user permissions which could otherwise be tampered with on the client.

## Performance

In terms of number of bytes being shipped to the client, make sure any new assets are optimised, and any new dependencies being introduced are really necessary.

Instead of suggesting micro optimisations when performance is not yet a problem, it would be a good idea to look out for things such as expensive operations that could potentially be offloaded to a web worker to avoid blocking the UI thread, or sets of nested loops that will be eventually iterating over fairly big-sized collections.

## Cross browser/platform compatibility

We should keep an eye on methods that might require *polyfilling* or features that need to be *transpiled* by Babel. For example, often times we tend to use things such as `Object.entries` or `Array.from` without checking for their browser support, to then find the application crashing on Internet Explorer or even on older versions of greenfield browsers. Same goes for using things such as the *object spread operator* which requires a special Babel plugin.

Things like mouse/touch/pointer events need to be handled appropriately to make sure the change works on mobile devices as well as computers. And in general, if the change makes use of any browser API, we should double check its [current](https://caniuse.com/) [support](https://developer.mozilla.org/).

## Production ready

Production-readiness: does the code include monitoring? logging? proper error handling?

## Functional review

Finally, something else we can do is to check out and build the branch we are reviewing and manually test the changes. The person looking at the code diff has more context on where the complexity might be, and will therefore be more likely to identify what could possibly go wrong and also pinpoint edge cases or issues with the current changeset.
