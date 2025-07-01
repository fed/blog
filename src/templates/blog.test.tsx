import { shallow } from 'enzyme';
import React from 'react';

import BlogTemplate from './blog';
import { Article } from '../ui/article';
import { Layout } from '../ui/layout';
import { SEO } from '../ui/seo';

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
    it('renders the SEO component with the right props', () => {
        const wrapper = shallow(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(SEO).exists()).toBe(true);
        expect(wrapper.find(SEO).props()).toEqual({
            title: 'Testing asynchronous code',
            description: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
            slug: '/blog/async-testing/',
        });
    });

    it('renders the Layout component', () => {
        const wrapper = shallow(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(Layout).exists()).toBe(true);
    });

    it('renders the Article component as the main layout content with the right props', () => {
        const wrapper = shallow(<BlogTemplate data={MARKDOWN_REMARK_MOCK_DATA} />);

        expect(wrapper.find(Layout).find(Article).exists()).toBe(true);
        expect(wrapper.find(Article).props()).toEqual({
            categoryId: 'testing',
            children: '<p>This is some test content</p>',
            date: 'January 09, 2019',
            datetime: '2019-01-09T00:00:00.000Z',
            title: 'Testing asynchronous code',
            isBlogPost: true,
        });
    });
});
