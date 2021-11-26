import { CategoryId } from '../ui/types';

/*
 * When writing a new post, the `category` field in the header has to match one of the following IDs.
 * This is how we link blog posts to their parent category, e.g.
 *
 * ---
 * title: Testing Asynchronous Code
 * date: 2019-01-09
 * spoiler: A brief intro to the different ways to set up your asynchronous tests
 * category: testing <-----
 * ---
 */

export const categories = [
    {
        id: CategoryId.BACONJS,
        title: 'Bacon.js',
        description: 'Functional Reactive Programming with Bacon.js.',
    },
    {
        id: CategoryId.RXJS,
        title: 'RxJS',
        description: 'Functional Reactive Programming with RxJS.',
    },
    {
        id: CategoryId.JAVASCRIPT,
        title: 'JavaScript',
        description: '',
    },
    {
        id: CategoryId.REACT,
        title: 'React',
        description:
            'Thoughts about the React ecosystem, mostly on building declarative UIs and handling state.',
    },
    {
        id: CategoryId.TESTING,
        title: 'Testing',
        description: 'Some notes on writing automated unit, integration and end-to-end tests.',
    },
    {
        id: CategoryId.ACCESSIBILITY,
        title: 'Accessibility',
        description: '',
    },
    {
        id: CategoryId.DOM,
        title: 'DOM & Web APIs',
        description: '',
    },
    {
        id: CategoryId.GENERAL,
        title: 'General',
        description: 'Everything else',
    },
];
