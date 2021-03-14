import React from 'react';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';

import avatarUrl from '../../data/avatar';
import {
    baseLargeContainerStyles,
    baseParagraphStyles,
    baseLinkStyles,
    baseTitleStyles
} from '../../styles/mixins';

const Container = styled.div`
    margin: 0 auto;
    padding: 0 50px;
    text-align: center;
    @media (min-width: 1024px) {
        ${baseLargeContainerStyles};
        padding: 0;
    }
`;

const Title = styled.h1`
    ${baseTitleStyles};
`;

const Paragraph = styled.p`
    ${baseParagraphStyles};
    margin: 15px 0 0;
`;

const Avatar = styled.img`
    border-radius: 100%;
    display: none;
    margin-bottom: 30px;
    width: 120px;
    @media (min-width: 1024px) {
        display: inline-block;
    }
`;

const Email = styled(Obfuscate)`
    ${baseLinkStyles};
`;

export default function Hero() {
    return (
        <Container>
            <Avatar src={avatarUrl} alt="" />
            <Title>Federico Knüssel</Title>
            <Paragraph>
                I'm a software engineer with a keen interest in web development, and I help teams
                ship clean and maintainable code. Feel free to hit me up on{' '}
                <Email email="fknussel@gmail.com" />.
            </Paragraph>
        </Container>
    );
}
