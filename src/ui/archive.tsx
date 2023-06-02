import React from 'react';
import styled from 'styled-components';

import { Preview } from './preview';
import { Post } from './types';
import { gridSize } from '../styles/constants';
import { srOnly } from '../styles/mixins';

const Title = styled.h1`
    ${srOnly};
`;

const Article = styled.article`
    :not(:last-child) {
        margin-bottom: ${5.5 * gridSize}px;
    }
`;

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => {
    const content =
        posts.length > 0 ? (
            posts.map((post) => (
                <Article key={post.id} data-postid={post.id} data-testid="archive-post">
                    <Preview {...post} />
                </Article>
            ))
        ) : (
            <p data-testid="archive-empty">No blog posts have been published just yet</p>
        );

    return (
        <>
            <Title data-testid="archive-title">Archive of published blog posts</Title>
            {content}
        </>
    );
};
