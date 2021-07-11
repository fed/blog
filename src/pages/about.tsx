import React from 'react';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';

import { Layout } from '../components/layout';
import { Link } from '../components/link';
import { bio, email } from '../data';
import { baseLinkStyles, baseParagraphStyles, baseTitleStyles } from '../styles/mixins';

const Title = styled.h1`
    ${baseTitleStyles};
`;

const Paragraph = styled.p`
    ${baseParagraphStyles};
`;

const Email = styled(Obfuscate)`
    ${baseLinkStyles};
`;

const AboutPage: React.FC = () => (
    <Layout>
        <Title>About</Title>
        <Paragraph>Hi! 👋 {bio}</Paragraph>
        <Paragraph>
            I enjoy working on large scale web applications, and am particularly interested in
            accessibility, automated testing and functional reactive programming.
        </Paragraph>
        <Paragraph>
            I currently work as a 👨‍💻 Front End Developer at{' '}
            <Link to="https://atlassian.com" isExternal>
                Atlassian
            </Link>
        </Paragraph>
        <Paragraph>
            Feel free to reach out on ✉️ <Email email={email} />
        </Paragraph>
    </Layout>
);

export default AboutPage;
