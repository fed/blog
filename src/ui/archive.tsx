import { Link } from 'gatsby';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { articleStyle, dateStyle, articleList, titleStyle, blurbStyle } from './archive.css';
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
                        <time dateTime={post.datetime} className={dateStyle} data-testid="archive-post-date">
                            {post.date}
                        </time>
                        <Link to={post.slug} className={baseLinkStyle}>
                            <Twemoji svg text={post.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        ) : (
            <p data-testid="archive-empty">No blog posts have been published just yet</p>
        );

    return (
        <>
            <h1 className={titleStyle} data-testid="archive-title">
                Blog posts
            </h1>
            <p className={blurbStyle}>
                Fresh content sorted by date, so you&apos;ll always see what&apos;s new at the top. You can also subscribe to the RSS feed
                for automatic updates.
            </p>
            {content}
        </>
    );
};
