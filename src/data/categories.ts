import accessibilityIcon from '../assets/accessibility.svg';
import baconIcon from '../assets/bacon.png';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.png';
import rxIcon from '../assets/rx.svg';
import browserIcon from '../assets/safari.svg';
import generalIcon from '../assets/target.svg';
import testingIcon from '../assets/testing.svg';
import { CategoryId } from '../types';

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
        imageSrc: baconIcon,
        title: 'Bacon.js',
        description: 'Functional Reactive Programming with Bacon.js.',
    },
    {
        id: CategoryId.RXJS,
        imageSrc: rxIcon,
        title: 'RxJS',
        description: 'Functional Reactive Programming with RxJS.',
    },
    {
        id: CategoryId.JAVASCRIPT,
        imageSrc: javascriptIcon,
        title: 'JavaScript',
        description: '',
    },
    {
        id: CategoryId.REACT,
        imageSrc: reactIcon,
        title: 'React',
        description:
            'Thoughts about the React ecosystem, mostly on building declarative UIs and handling state.',
    },
    {
        id: CategoryId.TESTING,
        imageSrc: testingIcon,
        title: 'Testing',
        description: 'Some notes on writing automated unit, integration and end-to-end tests.',
    },
    {
        id: CategoryId.ACCESSIBILITY,
        imageSrc: accessibilityIcon,
        title: 'Accessibility',
        description: '',
    },
    {
        id: CategoryId.DOM,
        imageSrc: browserIcon,
        title: 'DOM & Web APIs',
        description: '',
    },
    {
        id: CategoryId.GENERAL,
        imageSrc: generalIcon,
        title: 'General',
        description: 'Everything else',
    },
];
