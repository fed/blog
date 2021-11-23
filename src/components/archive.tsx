import React from 'react';
import styled from 'styled-components';

import { colors, fontFamilies } from '../styles/constants';
import { baseHeadingStyles, baseParagraphStyles } from '../styles/mixins';
import { Category } from './category';
import { Link } from './link';

const Article = styled.article`
    :not(:last-child) {
        margin-bottom: 45px;
    }
`;

const Title = styled.h2`
    ${baseHeadingStyles};
    font-size: 23px;
    font-weight: 600;
    margin: 0;
`;

const Spoiler = styled.p`
    ${baseParagraphStyles};
    margin: 10px 0 0;
`;

const Metadata = styled.div`
    margin: 0 0 5px;
`;

const PublicationDate = styled.span`
    color: ${colors.grayMedium};
    font-family: ${fontFamilies.sansSerif};
    font-size: 12px;
    margin-right: 10px;
    text-transform: uppercase;
`;

interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    timeToRead: number;
    categoryId: string;
    isExternal: boolean;
    url?: string;
    slug?: string;
}

interface Props {
    posts: Post[];
}

export const Archive: React.FC<Props> = ({ posts }) =>
    posts.map((post) => (
        <Article key={post.id} data-postid={post.id} data-testid="archive-post">
            <Metadata>
                <PublicationDate>{post.date}</PublicationDate>
                <Category id={post.categoryId} />
            </Metadata>

            <Title data-testid="archive-post-title">
                <Link to={post.url || post.slug} isExternal={post.isExternal}>
                    {post.title}
                </Link>
            </Title>

            <Spoiler dangerouslySetInnerHTML={{ __html: post.spoiler }} />
        </Article>
    ));
