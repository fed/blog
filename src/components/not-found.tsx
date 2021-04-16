import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import puppiesImage from '../assets/puppies.jpg';
import { baseParagraphStyles, baseTitleStyles } from '../styles/mixins';

const Container = styled.main`
    text-align: center;
`;

const Title = styled.h1`
    ${baseTitleStyles};
    font-size: 28px;
`;

const Paragraph = styled.div`
    ${baseParagraphStyles};
    margin: 10px 0 0;
`;

const Image = styled.img`
    border: 1px solid #bbb;
    border-radius: 3px;
    margin: 32px 0;
    max-width: 400px;
    padding: 3px;
    width: 100%;
`;

const LinkContainer = styled.nav`
    ${baseParagraphStyles};
`;

export const NotFound: React.FC = () => (
    <Container>
        <Title>Page Not Found</Title>
        <Paragraph>{`Looks like I haven't written this post yet.`}</Paragraph>
        <Paragraph>{`In the meantime, here's a picture of two puppies. You are welcome.`}</Paragraph>
        <Image alt="Picture of one cute labrador puppy hugging another puppy" src={puppiesImage} />
        <LinkContainer>
            <Link to="/">Go back to the homepage</Link>
        </LinkContainer>
    </Container>
);
