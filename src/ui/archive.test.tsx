import { render, screen } from '@testing-library/react';
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
            render(<Archive posts={[]} />);

            expect(screen.getByTestId('archive-empty')).toBeInTheDocument();
            expect(screen.queryAllByTestId('archive-post')).toHaveLength(0);
        });
    });

    describe('when passed in a collection of blog posts', () => {
        it('renders the right number of children', () => {
            render(<Archive posts={NODES_MOCK} />);

            expect(screen.queryByTestId('archive-empty')).not.toBeInTheDocument();
            expect(screen.getAllByTestId('archive-post')).toHaveLength(3);
        });

        describe('for each blog post in the archive', () => {
            it('renders the publication date', () => {
                render(<Archive posts={NODES_MOCK} />);

                const dates = screen.getAllByTestId('archive-post-date');
                expect(dates).toHaveLength(3);
                expect(dates[0]).toHaveTextContent('Apr 21, 2020');
                expect(dates[1]).toHaveTextContent('Jan 23, 2020');
                expect(dates[2]).toHaveTextContent('Oct 19, 2019');
            });

            it('renders the right title', () => {
                render(<Archive posts={NODES_MOCK} />);

                expect(screen.getByRole('link', { name: 'Jira search engine in your browser' })).toBeInTheDocument();
                expect(screen.getByRole('link', { name: 'Focusing and skipping tests' })).toBeInTheDocument();
                expect(screen.getByRole('link', { name: 'Fixing keyboard navigation for MacOS browsers' })).toBeInTheDocument();
            });

            it('renders a link pointing to the right URL', () => {
                render(<Archive posts={NODES_MOCK} />);

                expect(screen.getByRole('link', { name: 'Jira search engine in your browser' })).toHaveAttribute(
                    'href',
                    '/blog/jira-search-engine/',
                );
                expect(screen.getByRole('link', { name: 'Focusing and skipping tests' })).toHaveAttribute(
                    'href',
                    '/blog/focusing-skipping-tests/',
                );
                expect(screen.getByRole('link', { name: 'Fixing keyboard navigation for MacOS browsers' })).toHaveAttribute(
                    'href',
                    '/blog/focusable-elements-macos/',
                );
            });
        });
    });
});
