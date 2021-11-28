import React from 'react';
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
    date: string;
    categoryId: CategoryId;
    body: string;
}

export const Post: React.FC<Props> = ({ title, date, categoryId, body }) => (
    <article>
        <Metadata date={date} categoryId={categoryId} />
        <Title>{title}</Title>
        <Markdown>{body}</Markdown>
    </article>
);
