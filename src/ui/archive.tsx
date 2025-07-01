import { Link } from 'gatsby';
import React from 'react';

import { articleStyle, dateStyle, articleList, contentStyle, emptyStateStyle } from './archive.css';
import { Page } from './page';
import { CategoryId } from '../model/categories';
import { baseLinkStyle } from '../styles/common.css';

interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    datetime: string;
    categoryId: CategoryId;
    slug: string;
}

interface Props {
    posts: Post[];
}

export const Archive: React.FunctionComponent<Props> = ({ posts }) => (
    <>
        <Page title="Blog posts">
            Fresh content sorted by date, so you&apos;ll always see what&apos;s new at the top. You can also subscribe to the RSS feed for
            automatic updates.
        </Page>
        <div className={contentStyle}>
            {posts.length > 0 ? (
                <ul className={articleList}>
                    {posts.map((post) => (
                        <li className={articleStyle} key={post.id} data-postid={post.id} data-testid="archive-post">
                            <time dateTime={post.datetime} className={dateStyle} data-testid="archive-post-date">
                                {post.date}
                            </time>
                            <Link to={post.slug} className={baseLinkStyle}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={emptyStateStyle} data-testid="archive-empty">
                    No posts found in this category yet. Try browsing the other tags or check back soon for new content!
                </p>
            )}
        </div>
    </>
);
