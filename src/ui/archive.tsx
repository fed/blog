import React from 'react';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { Preview } from './preview';
import { Post } from './types';

const Article = styled.article`
    :not(:last-child) {
        margin-bottom: ${5.5 * gridSize}px;
    }
`;

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => (
    <>
        {posts.map((post) => (
            <Article key={post.id} data-postid={post.id} data-testid="archive-post">
                <Preview {...post} />
            </Article>
        ))}
    </>
);
