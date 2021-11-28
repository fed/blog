import React from 'react';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { baseHeadingStyles, baseParagraphStyles } from '../styles/mixins';
import { Link } from './link';
import { Metadata } from './metadata';
import type { Post } from './types';

const Title = styled.h2`
    ${baseHeadingStyles};
    font-size: 23px;
    font-weight: 600;
    margin: 0;
`;

const Spoiler = styled.p`
    ${baseParagraphStyles};
    margin: ${1.25 * gridSize}px 0 0;
`;

type Props = Post;

export const Preview: React.FC<Props> = ({
    title,
    date,
    categoryId,
    url,
    slug,
    spoiler,
    isExternal,
}) => (
    <>
        <Metadata date={date} categoryId={categoryId} />

        <Title data-testid="archive-post-title">
            <Link to={url || slug} isExternal={isExternal}>
                {title}
            </Link>
        </Title>

        <Spoiler dangerouslySetInnerHTML={{ __html: spoiler }} />
    </>
);
