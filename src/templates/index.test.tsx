import { shallow } from 'enzyme';
import React from 'react';

import IndexTemplate from './index';
import { Archive } from '../ui/archive';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';

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
                        draft: false,
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
                        draft: false,
                    },
                },
            },
        ],
    },
};

const PARSED_POSTS = [
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
        categoryId: 'javascript',
        date: 'September 06, 2017',
        id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
        isExternal: false,
        slug: '/blog/getting-clever-with-array-reduce/',
        spoiler: 'A handful of rather unconventional yet interesting use cases for reducing arrays.',
        title: 'Getting clever with Array#reduce',
        url: null,
    },
];

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
    });

    it('renders both local and external posts sorted by date DESC', () => {
        const wrapper = shallow(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(Archive).props()).toEqual({
            posts: PARSED_POSTS,
        });
    });

    it("doesn't render drafts", () => {
        const data = { ...MARKDOWN_REMARK_MOCK_DATA };

        data.allMarkdownRemark.edges.push({
            node: {
                id: 'ac6f9718-4956-589e-9148-24aa85cd600b',
                fields: { slug: '/blog/event-streams-vs-properties/' },
                frontmatter: {
                    date: 'September 21, 2016',
                    title: 'Event streams vs Properties in Bacon.js',
                    spoiler:
                        'Brief overview of what properties are and how they are different from event streams. We also cover how to create them and how to convert event streams into properties and vice versa.',
                    category: 'frp',
                    draft: true,
                },
            },
        });

        const wrapper = shallow(<IndexTemplate data={data} />);

        expect(
            wrapper
                .find(Archive)
                .prop('posts')
                .some((post) => post.id === 'ac6f9718-4956-589e-9148-24aa85cd600b'),
        ).toBe(false);
        expect(wrapper.find(Archive).props()).toEqual({ posts: PARSED_POSTS });
    });

    it("doesn't render pages", () => {
        const data = { ...MARKDOWN_REMARK_MOCK_DATA };

        data.allMarkdownRemark.edges.push({
            node: {
                id: 'ecf2176d-ebca-5a53-9ee6-d890f8740433',
                fields: { slug: '/about/' },
                frontmatter: {
                    date: null,
                    title: 'Hi! 👋',
                    spoiler: null,
                    category: null,
                    draft: null,
                },
            },
        });

        const wrapper = shallow(<IndexTemplate data={data} />);

        expect(
            wrapper
                .find(Archive)
                .prop('posts')
                .some((post) => post.id === 'ecf2176d-ebca-5a53-9ee6-d890f8740433'),
        ).toBe(false);
        expect(wrapper.find(Archive).props()).toEqual({ posts: PARSED_POSTS });
    });
});
