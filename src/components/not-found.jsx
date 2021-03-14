import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { baseTitleStyles, baseParagraphStyles,  } from '../styles/mixins';
import puppiesImage from '../images/puppies.jpg';

const Container = styled.main`
    padding: 100px 0;
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
    max-width: 400px;
    padding: 3px;
    width: 100%;
`;

const LinkContainer = styled.nav`
    ${baseParagraphStyles};
`;

export default function NotFound() {
    return (
        <Container>
            <Title>Page Not Found</Title>
            <Paragraph>Looks like I haven't written this post yet.</Paragraph>
            <Paragraph>In the meantime, here's a picture of two cute little puppies:</Paragraph>
            <Image alt="Picture of one cute labrador puppy hugging another puppy" src={puppiesImage} className={styles.image} />
            <LinkContainer>
                <Link to="/" className={styles.link}>Go back to the homepage</Link>
            </LinkContainer>
        </Container>
    );
}
