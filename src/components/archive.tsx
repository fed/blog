import React from 'react';
import styled from 'styled-components';

import {
    baseTitleStyles,
    baseParagraphStyles,
    fontFamilySansSerif,
    sizeContainerSmall,
    sizeContainerLarge,
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
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 0 10px;
`;

interface Post {
    title: string;
    spoiler: string;
    date: string;
    timeToRead: number;
    categoryId: string; // @TODO: make sure local posts have a valid category id
    isExternal: boolean;
    url?: string;
    slug?: string;
}

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => (
    <Container>
        {posts.map((post, index) => (
            <Article key={index}>
                <Date>{post.date}</Date>
                <Title>
                    <Link to={post.url || post.slug} isExternal={post.isExternal}>
                        {post.title}
                    </Link>
                </Title>
                <Spoiler dangerouslySetInnerHTML={{ __html: post.spoiler }} />
            </Article>
        ))}
    </Container>
);
