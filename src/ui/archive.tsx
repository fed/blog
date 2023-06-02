import React from 'react';

import { articleStyle } from './archive.css';
import { Preview } from './preview';
import { Post } from './types';
import { srOnlyStyle } from '../styles/base.css';

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => {
    const content =
        posts.length > 0 ? (
            posts.map((post) => (
                <article className={articleStyle} key={post.id} data-postid={post.id} data-testid="archive-post">
                    <Preview {...post} />
                </article>
            ))
        ) : (
            <p data-testid="archive-empty">No blog posts have been published just yet</p>
        );

    return (
        <>
            <h1 className={srOnlyStyle} data-testid="archive-title">
                Archive of published blog posts
            </h1>
            {content}
        </>
    );
};
