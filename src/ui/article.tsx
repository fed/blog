import React from 'react';
import { Twemoji } from 'react-emoji-render';
import styled from 'styled-components';

import { baseTitleStyles } from '../styles/mixins';
import { Markdown } from './markdown';
import { Metadata } from './metadata';
import { CategoryId } from './types';

const Title = styled.h1`
    ${baseTitleStyles};
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
            <Metadata date={date} categoryId={categoryId} />
            <Title>
                <Twemoji svg text={title} />
            </Title>
        </header>
        <Markdown>{children}</Markdown>
    </article>
);
