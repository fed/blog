import { shallow } from 'enzyme';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { SEO } from './seo';

describe('SEO', () => {
    beforeAll(() => {
        useStaticQuery.mockReturnValue({
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
            const wrapper = shallow(<SEO />);

            expect(wrapper.find(Helmet).props()).toEqual({
                htmlAttributes: { lang: 'en' },
                title: 'Gatsby Site Title',
                meta: [
                    { name: 'description', content: 'This is a test site description' },
                    { property: 'og:url', content: 'fedknu.com' },
                    { property: 'og:title', content: 'Gatsby Site Title' },
                    { name: 'og:description', content: 'This is a test site description' },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:creator', content: 'fedknu' },
                    { name: 'twitter:title', content: 'Gatsby Site Title' },
                    { name: 'twitter:description', content: 'This is a test site description' },
                ],
                defer: true,
                encodeSpecialCharacters: true,
            });
        });
    });

    describe('when a custom title gets passed in', () => {
        it('favours the custom title over the one coming from the GraphQL query', () => {
            const helmetWrapper = shallow(<SEO title="Custom title" />).find(Helmet);
            const metaTags = helmetWrapper.prop('meta');

            expect(helmetWrapper.prop('title')).toBe('Custom title');
            expect(helmetWrapper.prop('titleTemplate')).toBe('%s - Gatsby Site Title');
            expect(metaTags.find((m) => m.property === 'og:title')).toEqual({ property: 'og:title', content: 'Custom title' });
            expect(metaTags.find((m) => m.name === 'twitter:title')).toEqual({ name: 'twitter:title', content: 'Custom title' });
        });
    });

    describe('when a custom description gets passed in', () => {
        it('favours the custom description over the one coming from the GraphQL query', () => {
            const metaTags = shallow(<SEO description="Custom description" />)
                .find(Helmet)
                .prop('meta');

            expect(metaTags.find((m) => m.name === 'description')).toEqual({ name: 'description', content: 'Custom description' });
            expect(metaTags.find((m) => m.name === 'og:description')).toEqual({ name: 'og:description', content: 'Custom description' });
            expect(metaTags.find((m) => m.name === 'twitter:description')).toEqual({
                name: 'twitter:description',
                content: 'Custom description',
            });
        });
    });

    describe('when visiting a route other than the homepage', () => {
        it('renders the right URL', () => {
            const metaTags = shallow(<SEO slug="/about" />)
                .find(Helmet)
                .prop('meta');

            expect(metaTags.find((m) => m.property === 'og:url')).toEqual({ property: 'og:url', content: 'fedknu.com/about' });
        });
    });

    describe('when an image URL gets passed in', () => {
        it('renders two extra meta tags', () => {
            const metaTags = shallow(<SEO imageUrl="http://github.com/fed.png" />)
                .find(Helmet)
                .prop('meta');

            expect(metaTags).toHaveLength(10);
            expect(metaTags.find((m) => m.property === 'og:image')).toEqual({ property: 'og:image', content: 'http://github.com/fed.png' });
            expect(metaTags.find((m) => m.name === 'twitter:image')).toEqual({
                name: 'twitter:image',
                content: 'http://github.com/fed.png',
            });
        });
    });
});
