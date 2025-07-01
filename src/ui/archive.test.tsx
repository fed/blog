import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import React from 'react';

import { Archive } from './archive';
import { CategoryId } from '../model/categories';

const NODES_MOCK = [
    {
        id: '5b0c1935-1705-5298-bb84-0d2b96e4eaac',
        title: 'Jira search engine in your browser',
        slug: '/blog/jira-search-engine/',
        spoiler: 'Instructions on how to configure Chrome to allow searching for Jira tickets from the URL bar.',
        date: 'Apr 21, 2020',
        datetime: '2020-04-21T00:00:00.000Z',
        categoryId: CategoryId.TOOLS,
    },
    {
        id: 'e220a79e-a9e9-57df-b796-43fbe0e8eafc',
        title: 'Focusing and skipping tests',
        slug: '/blog/focusing-skipping-tests/',
        spoiler: 'Some notes on how to tell your testing framework which tests to run.',
        date: 'Jan 23, 2020',
        datetime: '2020-01-23T00:00:00.000Z',
        categoryId: CategoryId.TESTING,
    },
    {
        id: 'a74825aa-28fb-5143-b95c-57d819c64769',
        title: 'Fixing keyboard navigation for MacOS browsers',
        slug: '/blog/focusable-elements-macos/',
        spoiler: 'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
        date: 'Oct 19, 2019',
        datetime: '2019-01-09T00:00:00.000Z',
        categoryId: CategoryId.ACCESSIBILITY,
    },
];

describe('Archive', () => {
    describe('when no posts are passed in', () => {
        it('renders a message saying there are no blogs published', () => {
            const wrapper = shallow(<Archive posts={[]} />);

            expect(wrapper.find('[data-testid="archive-empty"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="archive-post"]')).toHaveLength(0);
        });
    });

    describe('when passed in a collection of blog posts', () => {
        it('renders the right number of children', () => {
            const wrapper = shallow(<Archive posts={NODES_MOCK} />);

            expect(wrapper.find('[data-testid="archive-empty"]').exists()).toBe(false);
            expect(wrapper.find('[data-testid="archive-post"]')).toHaveLength(3);
        });

        describe('for each blog post in the archive', () => {
            it('renders the publication date', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post-date"]')).toHaveLength(3);
                expect(wrapper.find('[data-testid="archive-post-date"]').at(0).text()).toBe('Apr 21, 2020');
                expect(wrapper.find('[data-testid="archive-post-date"]').at(1).text()).toBe('Jan 23, 2020');
                expect(wrapper.find('[data-testid="archive-post-date"]').at(2).text()).toBe('Oct 19, 2019');
            });

            it('renders the right title', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post"]').at(0).find(Link).prop('children')).toBe(
                    'Jira search engine in your browser',
                );
                expect(wrapper.find('[data-testid="archive-post"]').at(1).find(Link).prop('children')).toBe('Focusing and skipping tests');
                expect(wrapper.find('[data-testid="archive-post"]').at(2).find(Link).prop('children')).toBe(
                    'Fixing keyboard navigation for MacOS browsers',
                );
            });

            it('renders a link pointing to the right URL', () => {
                const wrapper = shallow(<Archive posts={NODES_MOCK} />);

                expect(wrapper.find('[data-testid="archive-post"]').at(0).find(Link).props()).toMatchObject({
                    to: '/blog/jira-search-engine/',
                });
                expect(wrapper.find('[data-testid="archive-post"]').at(1).find(Link).props()).toMatchObject({
                    to: '/blog/focusing-skipping-tests/',
                });
                expect(wrapper.find('[data-testid="archive-post"]').at(2).find(Link).props()).toMatchObject({
                    to: '/blog/focusable-elements-macos/',
                });
            });
        });
    });
});
