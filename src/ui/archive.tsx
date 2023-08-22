import { Link } from 'gatsby';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { articleStyle, titleStyle, spoilerStyle } from './archive.css';
import { Metadata } from './metadata';
import { Post } from './types';
import { srOnlyStyle, baseLinkStyle } from '../styles/common.css';

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) => {
    const content =
        posts.length > 0 ? (
            posts.map((post) => (
                <article className={articleStyle} key={post.id} data-postid={post.id} data-testid="archive-post">
                    <Metadata date={post.date} categoryId={post.categoryId} dateOnly />

                    <h2 className={titleStyle} data-testid="archive-post-title">
                        <Link to={post.slug} className={baseLinkStyle}>
                            <Twemoji svg text={post.title} />
                        </Link>
                    </h2>

                    <p className={spoilerStyle} data-testid="archive-post-spoiler">
                        {post.spoiler}
                    </p>
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
