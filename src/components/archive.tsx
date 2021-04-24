import React from 'react';
import styled from 'styled-components';

import {
    baseParagraphStyles,
    baseTitleStyles,
    fontFamilySansSerif,
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
    font-size: 28px;
`;

const Spoiler = styled.p`
    ${baseParagraphStyles};
    margin: 10px 0 0;
`;

const Date = styled.p`
    color: #6a7482;
    font-family: ${fontFamilySansSerif};
    font-size: 14px;
    margin: 0 0 10px;
    text-transform: uppercase;
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
                <Date data-testid="archive-post-date">{post.date}</Date>
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
