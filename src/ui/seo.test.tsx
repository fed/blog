import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { SEO } from './seo';

describe('SEO', () => {
    beforeAll(() => {
        (useStaticQuery as jest.Mock).mockReturnValue({
            site: {
                siteMetadata: {
                    title: 'Gatsby Site Title',
                    author: 'Federico Knüssel',
                    description: 'This is a test site description',
                    siteUrl: 'fedknu.com',
                    social: {
                        twitter: 'fedknu',
                    },
                },
            },
        });
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    describe('when no props get passed in', () => {
        it('renders the Helmet component with the default values', () => {
            render(<SEO />);

            const helmet = Helmet.peek();

            expect(helmet.htmlAttributes).toEqual({ lang: 'en' });
            expect(helmet.title).toBe('Gatsby Site Title');
            expect(helmet.metaTags).toEqual([
                { name: 'description', content: 'This is a test site description' },
                { property: 'og:url', content: 'fedknu.com' },
                { property: 'og:title', content: 'Gatsby Site Title' },
                { name: 'og:description', content: 'This is a test site description' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:creator', content: 'fedknu' },
                { name: 'twitter:title', content: 'Gatsby Site Title' },
                { name: 'twitter:description', content: 'This is a test site description' },
            ]);
        });
    });

    describe('when a custom title gets passed in', () => {
        it('favours the custom title over the one coming from the GraphQL query', () => {
            render(<SEO title="Custom title" />);

            const helmet = Helmet.peek();

            expect(helmet.title).toBe('Custom title - Gatsby Site Title');

            const ogTitle = helmet.metaTags.find((m) => m.property === 'og:title');
            const twitterTitle = helmet.metaTags.find((m) => m.name === 'twitter:title');

            expect(ogTitle).toEqual({ property: 'og:title', content: 'Custom title' });
            expect(twitterTitle).toEqual({ name: 'twitter:title', content: 'Custom title' });
        });
    });

    describe('when a custom description gets passed in', () => {
        it('favours the custom description over the one coming from the GraphQL query', () => {
            render(<SEO description="Custom description" />);

            const helmet = Helmet.peek();
            const { metaTags } = helmet;
            const description = metaTags.find((m) => m.name === 'description');
            const ogDescription = metaTags.find((m) => m.name === 'og:description');
            const twitterDescription = metaTags.find((m) => m.name === 'twitter:description');

            expect(description).toEqual({ name: 'description', content: 'Custom description' });
            expect(ogDescription).toEqual({ name: 'og:description', content: 'Custom description' });
            expect(twitterDescription).toEqual({ name: 'twitter:description', content: 'Custom description' });
        });
    });

    describe('when visiting a route other than the homepage', () => {
        it('renders the right URL', () => {
            render(<SEO slug="/about" />);

            const helmet = Helmet.peek();
            const ogUrl = helmet.metaTags.find((m) => m.property === 'og:url');

            expect(ogUrl).toEqual({ property: 'og:url', content: 'fedknu.com/about' });
        });
    });

    describe('when an image URL gets passed in', () => {
        it('renders two extra meta tags', () => {
            render(<SEO imageUrl="http://github.com/fed.png" />);

            const helmet = Helmet.peek();
            const { metaTags } = helmet;

            expect(metaTags).toHaveLength(10);

            const ogImage = metaTags.find((m) => m.property === 'og:image');
            const twitterImage = metaTags.find((m) => m.name === 'twitter:image');

            expect(ogImage).toEqual({ property: 'og:image', content: 'http://github.com/fed.png' });
            expect(twitterImage).toEqual({ name: 'twitter:image', content: 'http://github.com/fed.png' });
        });
    });
});
