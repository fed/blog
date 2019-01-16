import baconIcon from '../assets/bacon.png';
import rxIcon from '../assets/rx.svg';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import testingIcon from '../assets/testing.svg';

export const topics = [
    {
        id: 'baconjs',
        image: baconIcon,
        title: 'Functional Reactive Programming with Bacon.js',
        description:
            'This is a series of posts on Functional Reactive Programming (FRP) in JavaScript using Bacon.js.',
        links: [
            {
                title: 'Wrapping things in Bacon',
                url: '//medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
                description:
                    'Learn to create event streams from multiple sources: DOM events, promises, timers and many others.'
            },
            {
                title: 'Event Streams vs Properties',
                url: '//medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
                description:
                    'Brief overview of what properties are and how they are different from event streams. We also cover how to create them and how to convert event streams into properties and vice versa.'
            },
            {
                title: 'Manipulating Event Streams',
                url: '//medium.com/@fknussel/manipulating-bacon-js-event-streams-a1da0632fa10',
                description:
                    "Here we'll explore how applying transformations to source streams produce new observables."
            }
        ]
    },
    {
        id: 'rxjs',
        image: rxIcon,
        title: 'Functional Reactive Programming with RxJS',
        description:
            'Some articles on RxJS 5+ touching on some of the internals to how observables and operators work.',
        links: [
            {
                title: 'A simple Observable implementation',
                url: '//medium.com/@fknussel/a-simple-observable-implementation-c9c809c89c69',
                description:
                    "Let's write our own Observable interface implementation to understand what's going on under the hood when we work with RxJS."
            }
            // {
            //   title: 'Understanding operators through marble diagrams',
            //   url: '#',
            //   description: 'Marble diagrams are the best way to visualise how operators behave, and that\'s what this post is about: using marble diagrams to explain what operators do.'
            // }
        ]
    },
    {
        id: 'javascript',
        image: javascriptIcon,
        title: 'JavaScript Fundamentals',
        description:
            "Let's go back to the basics and review many of the core concepts of the language.",
        links: [
            {
                title: 'Making sense out of Context',
                url:
                    '//medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
                description:
                    'Learn how the this keyword works, and the different ways in which contexts are bound on function calls.'
            },
            {
                title: 'Arrays, objects and mutations',
                url: '//medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
                description:
                    'Some ideas on how to treat arrays and objects as if they were immutable.'
            },
            {
                title: 'Getting clever with Array#reduce',
                url: '/getting-clever-with-array-reduce',
                description:
                    'A handful of rather unconventional yet interesting use cases for reducing arrays.'
            },
            {
                title: 'DOM Traversal and Manipulation',
                url: '//github.com/fknussel/dom#dom-traversal-and-manipulation-with-vanillajs',
                description: 'Cheatsheet for working with the DOM in Vanilla JS.'
            },
            {
                title: 'DOM & BOM Revisited',
                url: '//medium.com/@fknussel/dom-bom-revisited-cf6124e2a816',
                description:
                    'Reviewing DOM manipulation and talking to the browser with JavaScript.'
            }
        ]
    },
    {
        id: 'react',
        image: reactIcon,
        title: 'React, Redux and Friends',
        description:
            'Just a bunch of thoughts around the React ecosystem, mostly on building declarative UIs and handling state.',
        links: [
            {
                title: 'A look at the inner workings of Redux',
                url: '//medium.com/@fknussel/redux-3cb5aac94a66',
                description:
                    "Let's try to understand what's really going on under the hood when we use Redux by implementing a simplified version of it from scratch."
            }
        ]
    },
    {
        id: 'testing',
        image: testingIcon,
        title: 'Testing',
        description: '',
        links: [
            {
                title: 'Testing Asynchronous Code',
                url: '/async-testing',
                description:
                    'A brief intro to the different ways to set up your asynchronous tests and the reason behind it.'
            }
        ]
    }
];
