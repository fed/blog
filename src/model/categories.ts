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

export enum CategoryId {
    ACCESSIBILITY = 'accessibility',
    PLATFORM = 'web-platform',
    FRP = 'frp',
    REACT = 'react',
    ELM = 'elm',
    JAVASCRIPT = 'javascript',
    CSS = 'css',
    TESTING = 'testing',
    SWE = 'software-engineering',
    MODELLING = 'knowledge-modelling',
    TOOLS = 'tools',
    GENERAL = 'general',
}

interface Category {
    id: CategoryId;
    title: string;
    description: string;
}

export const categories: Category[] = [
    {
        id: CategoryId.FRP,
        title: 'Functional reactive programming',
        description: 'Functional reactive programming with Bacon.js and RxJS.',
    },
    {
        id: CategoryId.JAVASCRIPT,
        title: 'JavaScript',
        description: 'Modern JavaScript features, patterns, and best practices.',
    },
    {
        id: CategoryId.CSS,
        title: 'CSS',
        description: 'Styling techniques, layout methods, and CSS architecture.',
    },
    {
        id: CategoryId.REACT,
        title: 'The React ecosystem',
        description: 'Thoughts about the React ecosystem, mostly on building declarative UIs and handling state.',
    },
    {
        id: CategoryId.ELM,
        title: 'Elm',
        description: 'Functional programming for the web with Elm.',
    },
    {
        id: CategoryId.TESTING,
        title: 'Automated testing',
        description: 'Some notes on writing automated unit, integration, end-to-end, visual regression and contract tests.',
    },
    {
        id: CategoryId.ACCESSIBILITY,
        title: 'Accessibility',
        description: 'Building inclusive web experiences for all users.',
    },
    {
        id: CategoryId.PLATFORM,
        title: 'DOM & Web APIs',
        description: 'Working with the DOM, browser APIs, and web platform features.',
    },
    {
        id: CategoryId.SWE,
        title: 'Software engineering',
        description: 'Software design principles, architecture, and engineering practices.',
    },
    {
        id: CategoryId.MODELLING,
        title: 'Knowledge modelling',
        description: 'Representing and structuring knowledge and domain concepts.',
    },
    {
        id: CategoryId.TOOLS,
        title: 'Tools',
        description: 'Development tools, workflows, and productivity tips.',
    },
    {
        id: CategoryId.GENERAL,
        title: 'General',
        description: 'Everything else',
    },
];
