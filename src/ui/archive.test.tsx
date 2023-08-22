import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { Archive } from './archive';
import { Metadata } from './metadata';
import { CategoryId } from './types';

const NODES_MOCK = [
    {
        id: '5b0c1935-1705-5298-bb84-0d2b96e4eaac',
        title: 'Jira search engine in your browser',
        slug: '/blog/jira-search-engine/',
        spoiler: 'Instructions on how to configure Chrome to allow searching for Jira tickets from the URL bar.',
        date: 'April 21, 2020',
        categoryId: CategoryId.GENERAL,
    },
    {
        id: 'e220a79e-a9e9-57df-b796-43fbe0e8eafc',
        title: 'Focusing and skipping tests',
        slug: '/blog/focusing-skipping-tests/',
        spoiler: 'Some notes on how to tell your testing framework which tests to run.',
        date: 'January 23, 2020',
        categoryId: CategoryId.TESTING,
    },
    {
        id: 'a74825aa-28fb-5143-b95c-57d819c64769',
        title: 'Fixing keyboard navigation for MacOS browsers',
        slug: '/blog/focusable-elements-macos/',
        spoiler: 'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
        date: 'October 19, 2019',
        categoryId: CategoryId.ACCESSIBILITY,
    },
];

describe('Archive', () => {
    describe('when no posts are passed in', () => {
        it('renders a message saying there are no blogs published', () => {
            const wrapper = shallow(<Archive posts={[]} />);

            expect(wrapper.find('[data-testid="archive-title"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="archive-empty"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="archive-post"]')).toHaveLength(0);
        });
    });

    describe('when passed in a collection of blog posts', () => {
        it('renders the right number of children', () => {
            const wrapper = shallow(<Archive posts={NODES_MOCK} />);

            expect(wrapper.find('[data-testid="archive-title"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="archive-empty"]').exists()).toBe(false);
            expect(wrapper.find('[data-testid="archive-post"]')).toHaveLength(3);
        });

        describe('for each blog post in the archive', () => {
            it('renders the Metadata component with the right content', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find(Metadata).exists()).toBe(true);
                expect(wrapper.find(Metadata)).toHaveLength(3);
                expect(wrapper.find(Metadata).at(0).props()).toEqual({ date: 'April 21, 2020', categoryId: 'general', dateOnly: true });
                expect(wrapper.find(Metadata).at(1).props()).toEqual({ date: 'January 23, 2020', categoryId: 'testing', dateOnly: true });
                expect(wrapper.find(Metadata).at(2).props()).toEqual({
                    date: 'October 19, 2019',
                    categoryId: 'accessibility',
                    dateOnly: true,
                });
            });

            it('renders the right title including emojis', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post-title"]').at(0).find(Twemoji).props()).toEqual({
                    svg: true,
                    text: 'Jira search engine in your browser',
                });
                expect(wrapper.find('[data-testid="archive-post-title"]').at(1).find(Twemoji).props()).toEqual({
                    svg: true,
                    text: 'Focusing and skipping tests',
                });
                expect(wrapper.find('[data-testid="archive-post-title"]').at(2).find(Twemoji).props()).toEqual({
                    svg: true,
                    text: 'Fixing keyboard navigation for MacOS browsers',
                });
            });

            it('renders a link pointing to the right URL', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post-title"]').at(0).find(Link).props()).toMatchObject({
                    to: '/blog/jira-search-engine/',
                });
                expect(wrapper.find('[data-testid="archive-post-title"]').at(1).find(Link).props()).toMatchObject({
                    to: '/blog/focusing-skipping-tests/',
                });
                expect(wrapper.find('[data-testid="archive-post-title"]').at(2).find(Link).props()).toMatchObject({
                    to: '/blog/focusable-elements-macos/',
                });
            });

            it('renders the right spoiler', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post-spoiler"]').at(0).text()).toBe(
                    'Instructions on how to configure Chrome to allow searching for Jira tickets from the URL bar.',
                );
                expect(wrapper.find('[data-testid="archive-post-spoiler"]').at(1).text()).toBe(
                    'Some notes on how to tell your testing framework which tests to run.',
                );
                expect(wrapper.find('[data-testid="archive-post-spoiler"]').at(2).text()).toBe(
                    'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
                );
            });
        });
    });
});
