import { render } from '@testing-library/react';
import React from 'react';

import BlogTemplate from './blog';
import { Article } from '../ui/article';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';

// Mock the components to make testing easier
jest.mock('../ui/seo', () => ({
    SEO: jest.fn(() => <div data-testid="seo" />),
}));

jest.mock('../ui/layout', () => ({
    Layout: jest.fn(({ children }) => <div data-testid="layout">{children}</div>),
}));

jest.mock('../ui/article', () => ({
    Article: jest.fn(() => <div data-testid="article" />),
}));

const MARKDOWN_REMARK_MOCK_DATA = {
    markdownRemark: {
        id: '1a3b4115-31a9-56f2-acef-f2ec7e6f63b7',
        html: '<p>This is some test content</p>',
        frontmatter: {
            title: 'Testing asynchronous code',
            spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
            date: 'January 09, 2019',
            datetime: '2019-01-09T00:00:00.000Z',
            category: 'testing',
        },
        fields: { slug: '/blog/async-testing/' },
    },
};

describe('BlogTemplate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the SEO component with the right props', () => {
        render(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(SEO).toHaveBeenCalledWith(
            {
                title: 'Testing asynchronous code',
                description: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
                slug: '/blog/async-testing/',
            },
            {},
        );
    });

    it('renders the Layout component', () => {
        const { getByTestId } = render(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(getByTestId('layout')).toBeInTheDocument();
        expect(Layout).toHaveBeenCalled();
    });

    it('renders the Article component as the main layout content with the right props', () => {
        render(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(Article).toHaveBeenCalledWith(
            {
                categoryId: 'testing',
                children: '<p>This is some test content</p>',
                date: 'January 09, 2019',
                datetime: '2019-01-09T00:00:00.000Z',
                title: 'Testing asynchronous code',
                isBlogPost: true,
            },
            {},
        );
    });
});
