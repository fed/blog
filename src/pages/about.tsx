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

const List = styled.ul`
    ${baseParagraphStyles};
    padding-left: 0;
`;

const ListItem = styled.li`
    border-left: 6px solid #4c9aff;
    list-style-type: none;
    padding: 10px 20px;
    :nth-child(odd) {
        background-color: #deebffc4;
    }
    :not(:last-child) {
        margin-bottom: 1px;
    }
`;

const Heading = styled.strong`
    font-weight: 300;
`;

const Email = styled(Obfuscate)`
    ${baseLinkStyles};
`;

const AboutPage: React.FC = () => (
    <Layout>
        <Title>About</Title>
        <Paragraph>Hi! 👋 {bio}</Paragraph>
        <List>
            <ListItem>
                <Heading>Current role:</Heading> 👨‍💻 Front End Developer at{' '}
                <Link to="https://atlassian.com" isExternal>
                    Atlassian
                </Link>
            </ListItem>
            <ListItem>
                <Heading>Email:</Heading> ✉️ <Email email={email} />
            </ListItem>
            <ListItem>
                <Heading>Languages you can reach out in:</Heading> 🇬🇧 English, 🇮🇹 Italian, 🇪🇸
                Spanish
            </ListItem>
            <ListItem>
                <Heading>Timezone:</Heading> 🇦🇺 AEST
            </ListItem>
        </List>
    </Layout>
);

export default AboutPage;
