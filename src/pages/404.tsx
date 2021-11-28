import React from 'react';
import styled from 'styled-components';

import { colors, gridSize } from '../styles/constants';
import { baseParagraphStyles, baseTitleStyles } from '../styles/mixins';
import { Layout } from '../ui/layout';
import { Link } from '../ui/link';

const Container = styled.main`
    text-align: center;
`;

const Title = styled.h1`
    ${baseTitleStyles};
    font-size: 28px;
`;

const Paragraph = styled.div`
    ${baseParagraphStyles};
    margin: ${1.25 * gridSize}px 0 0;
`;

const Image = styled.img`
    border: 1px solid ${colors.grayMedium};
    border-radius: 3px;
    margin: ${4 * gridSize}px 0;
    max-width: ${50 * gridSize}px;
    padding: ${0.375 * gridSize}px;
    width: 100%;
`;

const LinkContainer = styled.nav`
    ${baseParagraphStyles};
`;

const NotFoundPage: React.FC = () => (
    <Layout>
        <Container>
            <Title>Page Not Found</Title>
            <Paragraph>Looks like I haven&apos;t written this post yet.</Paragraph>
            <Paragraph>In the meantime, here&apos;s a picture of two puppies. You are welcome.</Paragraph>
            <Image alt="Picture of one cute labrador puppy hugging another puppy" src="https://files.fedknu.com/puppies.jpg" />
            <LinkContainer>
                <Link to="/">Go back to the homepage</Link>
            </LinkContainer>
        </Container>
    </Layout>
);

// Gatsby requires default exports for pages
export default NotFoundPage;
