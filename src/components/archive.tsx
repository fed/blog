import React from 'react';
import styled from 'styled-components';

import {
    baseParagraphStyles,
    baseTitleStyles,
    sizeContainerLarge,
    sizeContainerSmall,
} from '../styles/mixins';
import { Link } from './link';

const Container = styled.div`
    padding: 0 50px;
    @media (min-width: ${sizeContainerLarge}) {
        max-width: ${sizeContainerSmall};
        padding: 0;
    }
`;

const Article = styled.article`
    :not(:last-child) {
        margin-bottom: 60px;
    }
`;

const Title = styled.h2`
    ${baseTitleStyles};
    font-size: 24px;
`;

const Spoiler = styled.p`
    ${baseParagraphStyles};
    margin: 10px 0 0;
`;

interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    timeToRead: number;
    categoryId: string;
    isExternal: boolean;
    url?: string;
    slug?: string;
}

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => (
    <Container>
        {posts.map((post) => (
            <Article key={post.id} data-postid={post.id} data-testid="archive-post">
                <Title data-testid="archive-post-title">
                    <Link to={post.url || post.slug} isExternal={post.isExternal}>
                        {post.title}
                    </Link>
                </Title>
                <Spoiler dangerouslySetInnerHTML={{ __html: post.spoiler }} />
            </Article>
        ))}
    </Container>
);
