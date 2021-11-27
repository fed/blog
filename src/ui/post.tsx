import React from 'react';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { baseTitleStyles } from '../styles/mixins';
import { Markdown } from './markdown';
import { Metadata } from './metadata';

const Header = styled.header`
    margin-bottom: ${4.5 * gridSize}px;
`;

const Title = styled.h1`
    ${baseTitleStyles};
    margin-bottom: ${1.75 * gridSize}px;
`;

interface Props {
    title: string;
    date: string;
    category: string;
    timeToRead: number;
    body: string;
}

export const Post: React.FC<Props> = ({ title, date, category, timeToRead, body }) => (
    <article>
        <Header>
            <Title>{title}</Title>
            <Metadata date={date} categoryTitle={category} timeToRead={timeToRead} />
        </Header>
        <Markdown>{body}</Markdown>
    </article>
);
