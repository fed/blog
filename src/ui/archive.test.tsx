import { shallow } from 'enzyme';
import React from 'react';

import { Archive } from './archive';
import { CategoryId } from './types';

const NODES_MOCK = [
    {
        id: '5b0c1935-1705-5298-bb84-0d2b96e4eaac',
        title: 'Jira search engine in your browser',
        slug: '/blog/jira-search-engine/',
        spoiler: 'Instructions on how to configure Chrome to allow searching for Jira tickets from the URL bar.',
        date: 'April 21, 2020',
        categoryId: CategoryId.GENERAL,
        isExternal: false,
        url: null,
    },
    {
        id: 'e220a79e-a9e9-57df-b796-43fbe0e8eafc',
        title: 'Focusing and skipping tests',
        slug: '/blog/focusing-skipping-tests/',
        spoiler: 'Some notes on how to tell your testing framework which tests to run.',
        date: 'January 23, 2020',
        categoryId: CategoryId.TESTING,
        isExternal: false,
        url: null,
    },
    {
        id: 'a74825aa-28fb-5143-b95c-57d819c64769',
        title: 'Fixing keyboard navigation for MacOS browsers',
        slug: '/blog/focusable-elements-macos/',
        spoiler: 'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
        date: 'October 19, 2019',
        categoryId: CategoryId.ACCESSIBILITY,
        isExternal: false,
        url: null,
    },
    {
        id: '1a3b4115-31a9-56f2-acef-f2ec7e6f63b7',
        title: 'Testing asynchronous code',
        slug: '/blog/async-testing/',
        spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
        date: 'January 09, 2019',
        categoryId: CategoryId.TESTING,
        isExternal: false,
        url: null,
    },
    {
        id: 'external-dom-traversal-manipulation',
        title: 'DOM traversal and manipulation',
        url: 'https://github.com/fed/dom#dom-traversal-and-manipulation-with-vanillajs',
        spoiler: 'Cheatsheet for working with the DOM in Vanilla JS.',
        date: 'September 6, 2017',
        categoryId: CategoryId.DOM,
        isExternal: true,
        slug: null,
    },
    {
        id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
        title: 'Getting clever with Array#reduce',
        slug: '/blog/getting-clever-with-array-reduce/',
        spoiler: 'A handful of rather unconventional yet interesting use cases for reducing arrays.',
        date: 'September 06, 2017',
        categoryId: CategoryId.JAVASCRIPT,
        isExternal: false,
        url: null,
    },
    {
        id: 'external-simple-observable-implementation',
        title: 'A simple Observable implementation',
        url: 'https://medium.com/@fknussel/a-simple-observable-implementation-c9c809c89c69',
        spoiler:
            "Let's write our own Observable interface implementation to understand what's going on under the hood when we work with RxJS.",
        date: 'August 6, 2017',
        categoryId: CategoryId.RXJS,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-arrays-objects-mutations',
        title: 'Arrays, objects and mutations',
        url: 'https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
        spoiler: 'Some ideas on how to treat arrays and objects as if they were immutable.',
        date: 'March 6, 2017',
        categoryId: CategoryId.JAVASCRIPT,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-look-inner-workings-redux',
        title: 'A look at the inner workings of Redux',
        url: 'https://medium.com/@fknussel/redux-3cb5aac94a66',
        spoiler:
            "Let's try to understand what's really going on under the hood when we use Redux by implementing a simplified version of it from scratch.",
        date: 'February 1, 2017',
        categoryId: CategoryId.REACT,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-making-sense-context',
        title: 'Making sense out of Context',
        url: 'https://medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
        spoiler: 'Learn how the this keyword works, and the different ways in which contexts are bound on function calls.',
        date: 'December 30, 2016',
        categoryId: CategoryId.JAVASCRIPT,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-manipulating-event-streams',
        title: 'Manipulating event streams',
        url: 'https://medium.com/@fknussel/manipulating-bacon-js-event-streams-a1da0632fa10',
        spoiler: "Here we'll explore how applying transformations to source streams produce new observables.",
        date: 'December 26, 2016',
        categoryId: CategoryId.BACONJS,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-event-streams-vs-properties',
        title: 'Event Streams vs Properties',
        url: 'https://medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
        spoiler:
            'Brief overview of what properties are and how they are different from event streams. We also cover how to create them and how to convert event streams into properties and vice versa.',
        date: 'September 21, 2016',
        categoryId: CategoryId.BACONJS,
        isExternal: true,
        slug: null,
    },
    {
        id: 'external-wrapping-things-in-bacon',
        title: 'Wrapping things in Bacon',
        url: 'https://medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
        spoiler: 'Learn to create event streams from multiple sources: DOM events, promises, timers and many others.',
        date: 'September 17, 2016',
        categoryId: CategoryId.BACONJS,
        isExternal: true,
        slug: null,
    },
    {
        id: 'aef1c04e-6d2f-547a-a3ba-2dc730281d4b',
        title: 'Devtools 👨‍💻',
        slug: '/devtools/',
        spoiler: null,
        date: null,
        categoryId: null,
        isExternal: false,
        url: null,
    },
    {
        id: '7ab74804-f490-5ebb-a859-4fc4bf8f0ca8',
        title: 'Accessibility tools and resources ❤️',
        slug: '/accessibility/',
        spoiler: null,
        date: null,
        categoryId: null,
        isExternal: false,
        url: null,
    },
    {
        id: 'ecf2176d-ebca-5a53-9ee6-d890f8740433',
        title: 'Hi! 👋',
        slug: '/about/',
        spoiler: null,
        date: null,
        categoryId: null,
        isExternal: false,
        url: null,
    },
];

describe('Archive', () => {
    describe('when no posts are passed in', () => {
        it("doesn't render anything", () => {
            const wrapper = shallow(<Archive posts={[]} />);

            expect(wrapper.prop('children')).toEqual([]);
        });
    });

    describe('when passed in blog', () => {
        it('renders it', () => {
            const posts = [NODES_MOCK.find((node) => node.id === 'e220a79e-a9e9-57df-b796-43fbe0e8eafc')];
            const wrapper = shallow(<Archive posts={posts} />);

            expect(wrapper.prop('children')).toHaveLength(1);
        });
    });

    describe('when passed in a page', () => {
        it("doesn't render it", () => {
            const posts = [NODES_MOCK.find((node) => node.id === 'ecf2176d-ebca-5a53-9ee6-d890f8740433')];
            const wrapper = shallow(<Archive posts={posts} />);

            expect(wrapper.prop('children')).toHaveLength(0);
        });
    });

    describe('when passed a mix of blogs and pages', () => {
        it('renders the right number of children', () => {
            const wrapper = shallow(<Archive posts={NODES_MOCK} />);

            expect(wrapper.prop('children')).toHaveLength(13);
        });
    });
});
