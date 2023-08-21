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
        id: 'external-arrays-objects-mutations',
        title: 'Arrays, objects and mutations',
        url: 'https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
        spoiler: 'Some ideas on how to treat arrays and objects as if they were immutable.',
        date: 'March 6, 2017',
        categoryId: CategoryId.JAVASCRIPT,
    },
].map((post) => ({ ...post, isExternal: true, slug: null }));
