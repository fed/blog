import React from 'react';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';

import waveEmoji from '../assets/1f44b.svg';
import { gridSize } from '../styles/constants';
import { baseLinkStyles, baseParagraphStyles, baseTitleStyles } from '../styles/mixins';
import { Layout } from '../ui/layout';

const Title = styled.h1`
    ${baseTitleStyles};
    align-items: center;
    display: flex;
`;

const Image = styled.img`
    height: ${4.25 * gridSize}px;
    margin-left: ${1.25 * gridSize}px;
    width: ${4.25 * gridSize}px;
`;

const Paragraph = styled.p`
    ${baseParagraphStyles};
`;

const Email = styled(Obfuscate)`
    ${baseLinkStyles};
`;

const Link = styled.a`
    ${baseLinkStyles};
`;

const AboutPage: React.FC = () => (
    <Layout>
        <Title>
            Hi! <Image src={waveEmoji} alt="" />
        </Title>
        <Paragraph>
            I&apos;m a software engineer with a keen interest in web development, and I help teams
            ship clean and maintainable code. I enjoy working on large scale web applications, and
            am particularly interested in accessibility, automated testing and functional reactive
            programming.
        </Paragraph>
        <Paragraph>
            I currently work as a Front End Developer at{' '}
            <Link href="https://atlassian.com" target="_blank" rel="noopener noreferrer">
                Atlassian
            </Link>
            .
        </Paragraph>
        <Paragraph>
            Feel free to reach out on{' '}
            <Link href="https://twitter.com/fknussel" target="_blank" rel="noopener noreferrer">
                Twitter
            </Link>{' '}
            or flick me an email at <Email email="fed@duck.com" />.
        </Paragraph>
    </Layout>
);

export default AboutPage;
