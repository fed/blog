import { render, screen } from '@testing-library/react';
import React from 'react';

import IndexTemplate from './index';

// Mock the child components to make testing easier and more focused
jest.mock('../ui/archive', () => ({
    Archive: ({ posts }) => (
        <div data-testid="archive" data-posts={JSON.stringify(posts)}>
            Archive component with {posts.length} posts
        </div>
    ),
}));

jest.mock('../ui/layout', () => ({
    Layout: ({ children }) => (
        <div data-testid="layout">
            Layout component
            {children}
        </div>
    ),
}));

jest.mock('../ui/seo', () => ({
    SEO: (props) => (
        <div data-testid="seo" data-props={JSON.stringify(props)}>
            SEO component
        </div>
    ),
}));

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
        slug: '/blog/async-testing/',
        spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
        title: 'Testing asynchronous code',
    },
    {
        categoryId: 'javascript',
        date: 'September 06, 2017',
        id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
        slug: '/blog/getting-clever-with-array-reduce/',
        spoiler: 'A handful of rather unconventional yet interesting use cases for reducing arrays.',
        title: 'Getting clever with Array#reduce',
    },
];

describe('IndexTemplate', () => {
    it('renders the SEO component with the default values', () => {
        render(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        const seoComponent = screen.getByTestId('seo');
        const seoProps = JSON.parse(seoComponent.getAttribute('data-props'));

        expect(seoComponent).toBeInTheDocument();
        expect(seoProps).toEqual({});
    });

    it('renders the Layout component', () => {
        render(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('renders the Archive component as the main layout content', () => {
        render(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        const layout = screen.getByTestId('layout');
        const archive = screen.getByTestId('archive');

        expect(archive).toBeInTheDocument();
        expect(layout).toContainElement(archive);
    });

    it('renders both local and external posts sorted by date DESC', () => {
        render(<IndexTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        const archiveComponent = screen.getByTestId('archive');
        const posts = JSON.parse(archiveComponent.getAttribute('data-posts'));

        expect(posts).toEqual(PARSED_POSTS);
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

        render(<IndexTemplate data={data} />);

        const archiveComponent = screen.getByTestId('archive');
        const posts = JSON.parse(archiveComponent.getAttribute('data-posts'));
        const hasDraftPost = posts.some((post) => post.id === 'ac6f9718-4956-589e-9148-24aa85cd600b');

        expect(hasDraftPost).toBe(false);
        expect(posts).toEqual(PARSED_POSTS);
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

        render(<IndexTemplate data={data} />);

        const archiveComponent = screen.getByTestId('archive');
        const posts = JSON.parse(archiveComponent.getAttribute('data-posts'));
        const hasPage = posts.some((post) => post.id === 'ecf2176d-ebca-5a53-9ee6-d890f8740433');

        expect(hasPage).toBe(false);
        expect(posts).toEqual(PARSED_POSTS);
    });
});
