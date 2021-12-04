import { shallow } from 'enzyme';
import React from 'react';

import { Archive } from '../ui/archive';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';
import IndexTemplate from './index';

const MARKDOWN_REMARK_MOCK_DATA = {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
                    fields: { slug: '/blog/getting-clever-with-array-reduce/' },
                    frontmatter: {
                        date: 'September 06, 2017',
                        title: 'Getting clever with Array#reduce',
                        spoiler: 'A handful of rather unconventional yet interesting use cases for reducing arrays.',
                        category: 'javascript',
                    },
                },
            },
            {
                node: {
                    id: '1a3b4115-31a9-56f2-acef-f2ec7e6f63b7',
                    fields: { slug: '/blog/async-testing/' },
                    frontmatter: {
                        date: 'January 09, 2019',
                        title: 'Testing asynchronous code',
                        spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
                        category: 'testing',
                    },
                },
            },
        ],
    },
};

describe('IndexTemplate', () => {
    it('renders the SEO component with the default values', () => {
        const wrapper = shallow(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(SEO).exists()).toBe(true);
        expect(wrapper.find(SEO).props()).toEqual({});
    });

    it('renders the Layout component', () => {
        const wrapper = shallow(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(Layout).exists()).toBe(true);
    });

    it('renders the Archive component as the main layout content', () => {
        const wrapper = shallow(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(Layout).find(Archive).exists()).toBe(true);
        expect(wrapper.find(Layout).find(Archive).props()).toEqual({
            posts: [
                {
                    categoryId: 'testing',
                    date: 'January 09, 2019',
                    id: '1a3b4115-31a9-56f2-acef-f2ec7e6f63b7',
                    isExternal: false,
                    slug: '/blog/async-testing/',
                    spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
                    title: 'Testing asynchronous code',
                    url: null,
                },
                {
                    categoryId: 'dom',
                    date: 'September 6, 2017',
                    id: 'external-dom-traversal-manipulation',
                    isExternal: true,
                    slug: null,
                    spoiler: 'Cheatsheet for working with the DOM in Vanilla JS.',
                    title: 'DOM traversal and manipulation',
                    url: 'https://github.com/fed/dom#dom-traversal-and-manipulation-with-vanillajs',
                },
                {
                    categoryId: 'javascript',
                    date: 'September 06, 2017',
                    id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
                    isExternal: false,
                    slug: '/blog/getting-clever-with-array-reduce/',
                    spoiler: 'A handful of rather unconventional yet interesting use cases for reducing arrays.',
                    title: 'Getting clever with Array#reduce',
                    url: null,
                },
                {
                    categoryId: 'dom',
                    date: 'August 6, 2017',
                    id: 'external-dom-bom-revisited',
                    isExternal: true,
                    slug: null,
                    spoiler: 'Reviewing DOM manipulation and talking to the browser with JavaScript.',
                    title: 'DOM & BOM revisited',
                    url: 'https://medium.com/@fknussel/dom-bom-revisited-cf6124e2a816',
                },
                {
                    categoryId: 'rxjs',
                    date: 'August 6, 2017',
                    id: 'external-simple-observable-implementation',
                    isExternal: true,
                    slug: null,
                    spoiler:
                        "Let's write our own Observable interface implementation to understand what's going on under the hood when we work with RxJS.",
                    title: 'A simple Observable implementation',
                    url: 'https://medium.com/@fknussel/a-simple-observable-implementation-c9c809c89c69',
                },
                {
                    categoryId: 'javascript',
                    date: 'March 6, 2017',
                    id: 'external-arrays-objects-mutations',
                    isExternal: true,
                    slug: null,
                    spoiler: 'Some ideas on how to treat arrays and objects as if they were immutable.',
                    title: 'Arrays, objects and mutations',
                    url: 'https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
                },
                {
                    categoryId: 'react',
                    date: 'February 1, 2017',
                    id: 'external-look-inner-workings-redux',
                    isExternal: true,
                    slug: null,
                    spoiler:
                        "Let's try to understand what's really going on under the hood when we use Redux by implementing a simplified version of it from scratch.",
                    title: 'A look at the inner workings of Redux',
                    url: 'https://medium.com/@fknussel/redux-3cb5aac94a66',
                },
                {
                    categoryId: 'javascript',
                    date: 'December 30, 2016',
                    id: 'external-making-sense-context',
                    isExternal: true,
                    slug: null,
                    spoiler: 'Learn how the this keyword works, and the different ways in which contexts are bound on function calls.',
                    title: 'Making sense out of Context',
                    url: 'https://medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
                },
                {
                    categoryId: 'baconjs',
                    date: 'December 26, 2016',
                    id: 'external-manipulating-event-streams',
                    isExternal: true,
                    slug: null,
                    spoiler: "Here we'll explore how applying transformations to source streams produce new observables.",
                    title: 'Manipulating event streams',
                    url: 'https://medium.com/@fknussel/manipulating-bacon-js-event-streams-a1da0632fa10',
                },
                {
                    categoryId: 'baconjs',
                    date: 'September 21, 2016',
                    id: 'external-event-streams-vs-properties',
                    isExternal: true,
                    slug: null,
                    spoiler:
                        'Brief overview of what properties are and how they are different from event streams. We also cover how to create them and how to convert event streams into properties and vice versa.',
                    title: 'Event Streams vs Properties',
                    url: 'https://medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
                },
                {
                    categoryId: 'baconjs',
                    date: 'September 17, 2016',
                    id: 'external-wrapping-things-in-bacon',
                    isExternal: true,
                    slug: null,
                    spoiler: 'Learn to create event streams from multiple sources: DOM events, promises, timers and many others.',
                    title: 'Wrapping things in Bacon',
                    url: 'https://medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
                },
            ],
        });
    });
});
