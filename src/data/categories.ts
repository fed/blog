import accessibilityIcon from '../assets/accessibility.svg';
import baconIcon from '../assets/bacon.png';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.png';
import rxIcon from '../assets/rx.svg';
import browserIcon from '../assets/safari.svg';
import generalIcon from '../assets/target.svg';
import testingIcon from '../assets/testing.svg';

/*
 * When writing a new post, the `category` field in the header has to match
 * the ID of one of the following objects.
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
        id: 'baconjs',
        imageSrc: baconIcon,
        title: 'Functional Reactive Programming with Bacon.js',
        description:
            'This is a series of posts on Functional Reactive Programming (FRP) in JavaScript using Bacon.js.',
    },
    {
        id: 'rxjs',
        imageSrc: rxIcon,
        title: 'Functional Reactive Programming with RxJS',
        description:
            'Some articles on RxJS 5+ touching on some of the internals to how observables and operators work.',
    },
    {
        id: 'javascript',
        imageSrc: javascriptIcon,
        title: 'JavaScript',
        description: `Let's go back to the basics and review some of the core concepts of the language.`,
    },
    {
        id: 'react',
        imageSrc: reactIcon,
        title: 'React, Redux and Friends',
        description:
            'Just a bunch of thoughts around the React ecosystem, mostly on building declarative UIs and handling state.',
    },
    {
        id: 'testing',
        imageSrc: testingIcon,
        title: 'Testing',
        description: 'Some thoughts on writing automated unit, integration or end-to-end tests.',
    },
    {
        id: 'accessibility',
        imageSrc: accessibilityIcon,
        title: 'Accessibility',
        description: '',
    },
    {
        id: 'browsers',
        imageSrc: browserIcon,
        title: 'DOM, Browsers and Web APIs',
        description: '',
    },
    {
        id: 'general',
        imageSrc: generalIcon,
        title: 'General',
        description: 'Everything else',
    },
];
