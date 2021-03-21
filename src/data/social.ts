import codepenIcon from '../assets/codepen.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mediumIcon from '../assets/medium.svg';
import twitterIcon from '../assets/twitter.svg';
import { Social } from '../types';

export const socialLinks = [
    {
        id: Social.TWITTER,
        name: 'Twitter',
        url: 'https://twitter.com/fknussel',
        icon: twitterIcon,
    },
    {
        id: Social.GITHUB,
        name: 'GitHub',
        url: 'https://github.com/fed',
        icon: githubIcon,
    },
    {
        id: Social.MEDIUM,
        name: 'Medium',
        url: 'https://medium.com/@fknussel',
        icon: mediumIcon,
    },
    {
        id: Social.CODEPEN,
        name: 'CodePen',
        url: 'https://codepen.io/fede',
        icon: codepenIcon,
    },
    {
        id: Social.LINKEDIN,
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/fknussel',
        icon: linkedinIcon,
    },
];
