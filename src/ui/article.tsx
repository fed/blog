import React from 'react';
import { Twemoji } from 'react-emoji-render';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { baseTitleStyles } from '../styles/mixins';
import { Markdown } from './markdown';
import { Metadata } from './metadata';
import { CategoryId } from './types';

const Title = styled.h1`
    ${baseTitleStyles};
    margin: 0 0 ${1.25 * gridSize}px 0;
`;

interface Props {
    title: string;
    date?: string;
    categoryId?: CategoryId;
    children: string;
}

export const Article: React.FC<Props> = ({ title, date, categoryId, children }) => (
    <article>
        <header>
            <Title>
                <Twemoji svg text={title} />
            </Title>
            <Metadata date={date} categoryId={categoryId} />
        </header>
        <Markdown>{children}</Markdown>
    </article>
);
