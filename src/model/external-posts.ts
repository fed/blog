import { CategoryId } from '../ui/types';

export const externalPosts = [
    {
        id: 'external-arrays-objects-mutations',
        title: 'Arrays, objects and mutations',
        url: 'https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
        spoiler: 'Some ideas on how to treat arrays and objects as if they were immutable.',
        date: 'March 6, 2017',
        categoryId: CategoryId.JAVASCRIPT,
    },
].map((post) => ({ ...post, isExternal: true, slug: null }));
