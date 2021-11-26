import React from 'react';
import styled from 'styled-components';

import { Preview } from './preview';
import { Post } from './types';

const Article = styled.article`
    :not(:last-child) {
        margin-bottom: 45px;
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
