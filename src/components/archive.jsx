import React from 'react';
import styled from 'styled-components';

import { baseTitleStyles, baseParagraphStyles, baseSansSerifStyles, baseSmallContainerStyles } from '../styles/mixins';
import { Link } from './link';

const Container = styled.div`
    padding: 0 50px;
    @media (min-width: 1024px) {
        ${baseSmallContainerStyles};
        padding: 0;
    }
`;

const Post = styled.article`
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
    ${baseSansSerifStyles};
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 0 10px;
`;

export function Archive(props) {
    return (
        <Container>
            {props.posts.map((post, index) => (
                <Post key={index}>
                    <Date>{post.date}</Date>
                    <Title>
                        <Link to={post.url || post.slug} isExternal={post.isExternal}>
                            {post.title}
                        </Link>
                    </Title>
                    <Spoiler dangerouslySetInnerHTML={{ __html: post.spoiler }} />
                </Post>
            ))}
        </Container>
    );
}
