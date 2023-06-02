import React from 'react';
import { Twemoji } from 'react-emoji-render';
import styled from 'styled-components';

import { Link } from './link';
import { Metadata } from './metadata';
import type { Post } from './types';
import { fontSizes, fontWeights, gridSize } from '../styles/constants';
import { baseHeadingStyles, baseParagraphStyles } from '../styles/mixins';

const Title = styled.h2`
    ${baseHeadingStyles};
    font-size: ${fontSizes.lg};
    font-weight: ${fontWeights.bold};
    margin: 0;
`;

const Spoiler = styled.p`
    ${baseParagraphStyles};
    margin: ${1.25 * gridSize}px 0 0;
`;

type Props = Post;

export const Preview: React.FC<Props> = ({ title, date, categoryId, url, slug, spoiler, isExternal }) => (
    <>
        <Metadata date={date} categoryId={categoryId} isPreview />

        <Title data-testid="preview-title">
            <Link to={url || slug} isExternal={isExternal}>
                <Twemoji svg text={title} />
            </Link>
        </Title>

        <Spoiler data-testid="preview-spoiler">{spoiler}</Spoiler>
    </>
);
