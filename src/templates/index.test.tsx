import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';

import { externalPosts } from '../model';
import IndexTemplate from './index';

describe('BlogIndex component', () => {
    beforeEach(() => {
        useStaticQuery.mockReturnValue({
            site: {
                siteMetadata: {
                    title: `Gatsby Starter Blog`,
                    description: `A starter blog demonstrating what Gatsby can do.`,
                    social: {
                        twitter: `kylemathews`,
                    },
                },
            },
        });
    });

    const mockData = {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        id: 'ebccf7ed-3627-57af-93f1-37ce17998a1d',
                        fields: { slug: '/blog/getting-clever-with-array-reduce/' },
                        timeToRead: 5,
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
                        timeToRead: 2,
                        frontmatter: {
                            date: 'January 09, 2019',
                            title: 'Testing asynchronous code',
                            spoiler: 'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.',
                            category: 'testing',
                        },
                    },
                },
                {
                    node: {
                        id: 'a74825aa-28fb-5143-b95c-57d819c64769',
                        fields: { slug: '/blog/focusable-elements-macos/' },
                        timeToRead: 2,
                        frontmatter: {
                            date: 'October 19, 2019',
                            title: 'Fixing keyboard navigation for MacOS browsers',
                            spoiler:
                                'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
                            category: 'accessibility',
                        },
                    },
                },
            ],
        },
    };

    it('renders the right number of posts', async () => {
        const { getAllByTestId } = render(<IndexTemplate data={mockData} />);

        expect(getAllByTestId('archive-post')).toHaveLength(mockData.allMarkdownRemark.edges.length + externalPosts.length);
    });
});
