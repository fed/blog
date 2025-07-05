import { Link } from 'gatsby';
import React from 'react';

import {
    articleStyle,
    dateStyle,
    articleList,
    contentStyle,
    emptyStateStyle,
    categoriesListStyle,
    categoriesListItemStyle,
} from './archive.css';
import { Article } from './article';
import { CategoryId, categories } from '../model/categories';
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
        <Article title="Blog posts">
            <p>
                Fresh content sorted by date, so you&apos;ll always see what&apos;s new at the top. Browse by categories/tags to explore
                topics you care about. You can also subscribe to the RSS feed for automatic updates.
            </p>
        </Article>
        <div className={contentStyle}>
            <ul className={categoriesListStyle}>
                {categories.map((category) => (
                    <li key={category.id} className={categoriesListItemStyle}>
                        #{category.id}
                    </li>
                ))}
            </ul>
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
