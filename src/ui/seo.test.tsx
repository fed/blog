import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { SEO } from './seo';

describe('SEO', () => {
    beforeAll(() => {
        useStaticQuery.mockReturnValue({
            site: {
                siteMetadata: {
                    title: 'Gatsby Starter Blog',
                    author: 'Federico Knüssel',
                    description: `A starter blog demonstrating what Gatsby can do.`,
                    siteUrl: 'rawr.com',
                    social: {
                        twitter: 'fknussel',
                    },
                },
            },
        });
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('renders the tests correctly', () => {
        const mockTitle = 'All posts - Gatsby Starter Blog';
        const mockDescription = 'A starter blog demonstrating what Gatsby can do.';
        const mockTwitterHandler = 'fknussel';

        render(<SEO title="All posts" />);

        const { title, metaTags } = Helmet.peek();

        expect(title).toBe(mockTitle);
        expect(metaTags[0].content).toBe(mockDescription);
        expect(metaTags[5].content).toBe(mockTwitterHandler);
        expect(metaTags.length).toBe(8);
    });
});
