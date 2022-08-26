import { shallow } from 'enzyme';
import React from 'react';

import { Archive } from './archive';
import { CategoryId } from './types';

const NODES_MOCK = [
    {
        id: '5b0c1935-1705-5298-bb84-0d2b96e4eaac',
        title: 'Jira search engine in your browser',
        slug: '/blog/jira-search-engine/',
        spoiler: 'Instructions on how to configure Chrome to allow searching for Jira tickets from the URL bar.',
        date: 'April 21, 2020',
        categoryId: CategoryId.GENERAL,
        isExternal: false,
    },
    {
        id: 'e220a79e-a9e9-57df-b796-43fbe0e8eafc',
        title: 'Focusing and skipping tests',
        slug: '/blog/focusing-skipping-tests/',
        spoiler: 'Some notes on how to tell your testing framework which tests to run.',
        date: 'January 23, 2020',
        categoryId: CategoryId.TESTING,
        isExternal: false,
    },
    {
        id: 'a74825aa-28fb-5143-b95c-57d819c64769',
        title: 'Fixing keyboard navigation for MacOS browsers',
        slug: '/blog/focusable-elements-macos/',
        spoiler: 'Instructions on how to manually enable tabbing through all focusable elements on a page if you are using MacOS.',
        date: 'October 19, 2019',
        categoryId: CategoryId.ACCESSIBILITY,
        isExternal: false,
    },
];

describe('Archive', () => {
    describe('when no posts are passed in', () => {
        it("doesn't render anything", () => {
            const wrapper = shallow(<Archive posts={[]} />);

            expect(wrapper.prop('children')).toEqual([]);
        });
    });

    describe('when passed in a collection of blog posts', () => {
        it('renders the right number of children', () => {
            const wrapper = shallow(<Archive posts={NODES_MOCK} />);

            expect(wrapper.prop('children')).toHaveLength(3);
        });
    });
});
