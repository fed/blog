import React from 'react';
import styled from 'styled-components';

import { colors, fontFamilies, gridSize } from '../styles/constants';
import { baseHeadingStyles, baseParagraphStyles } from '../styles/mixins';
import { Category } from './category';
import { Link } from './link';
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

const Metadata = styled.div`
    margin: 0 0 ${0.625 * gridSize}px;
`;

const PublicationDate = styled.span`
    color: ${colors.grayMedium};
    font-family: ${fontFamilies.sansSerif};
    font-size: 12px;
    margin-right: ${1.25 * gridSize}px;
    text-transform: uppercase;
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
        <Metadata>
            <PublicationDate>{date}</PublicationDate>
            <Category id={categoryId} />
        </Metadata>

        <Title data-testid="archive-post-title">
            <Link to={url || slug} isExternal={isExternal}>
                {title}
            </Link>
        </Title>

        <Spoiler dangerouslySetInnerHTML={{ __html: spoiler }} />
    </>
);
