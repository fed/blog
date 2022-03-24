import { CategoryId } from '../ui/types';

export const externalPosts = [
    {
        id: 'external-simple-observable-implementation',
        title: 'A simple Observable implementation',
        url: 'https://medium.com/@fknussel/a-simple-observable-implementation-c9c809c89c69',
        spoiler: `Let's write our own Observable interface implementation to understand what's going on under the hood when we work with RxJS.`,
        date: 'August 6, 2017',
        categoryId: CategoryId.FRP,
    },
    {
        id: 'external-making-sense-context',
        title: 'Making sense out of Context',
        url: 'https://medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
        spoiler: 'Learn how the this keyword works, and the different ways in which contexts are bound on function calls.',
        date: 'December 30, 2016',
        categoryId: CategoryId.JAVASCRIPT,
    },
    {
        id: 'external-arrays-objects-mutations',
        title: 'Arrays, objects and mutations',
        url: 'https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
        spoiler: 'Some ideas on how to treat arrays and objects as if they were immutable.',
        date: 'March 6, 2017',
        categoryId: CategoryId.JAVASCRIPT,
    },
    {
        id: 'external-look-inner-workings-redux',
        title: 'A look at the inner workings of Redux',
        url: 'https://medium.com/@fknussel/redux-3cb5aac94a66',
        spoiler: `Let's try to understand what's really going on under the hood when we use Redux by implementing a simplified version of it from scratch.`,
        date: 'February 1, 2017',
        categoryId: CategoryId.REACT,
    },
    {
        id: 'external-dom-traversal-manipulation',
        title: 'DOM traversal and manipulation',
        url: 'https://github.com/fed/dom#dom-traversal-and-manipulation-with-vanillajs',
        spoiler: 'Cheatsheet for working with the DOM in Vanilla JS.',
        date: 'September 6, 2017',
        categoryId: CategoryId.DOM,
    },
].map((post) => ({ ...post, isExternal: true, slug: null }));
