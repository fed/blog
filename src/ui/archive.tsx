import { Link } from 'gatsby';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { articleStyle, dateStyle, articleList, headingStyle } from './archive.css';
import { Post } from './types';
import { baseLinkStyle } from '../styles/common.css';

interface Props {
    posts: Post[];
}

export const Archive: React.FunctionComponent<Props> = ({ posts }) => {
    const content =
        posts.length > 0 ? (
            <ul className={articleList}>
                {posts.map((post) => (
                    <li className={articleStyle} key={post.id} data-postid={post.id} data-testid="archive-post">
                        <Link to={post.slug} className={baseLinkStyle}>
                            <Twemoji svg text={post.title} />
                        </Link>
                        <span className={dateStyle} data-testid="archive-post-date">
                            ({post.date})
                        </span>
                    </li>
                ))}
            </ul>
        ) : (
            <p data-testid="archive-empty">No blog posts have been published just yet</p>
        );

    return (
        <>
            <h1 className={headingStyle} data-testid="archive-title">
                Most recent articles
            </h1>
            {content}
        </>
    );
};
