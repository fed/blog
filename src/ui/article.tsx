import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { titleStyle } from './article.css';
import { Markdown } from './markdown';
import { Metadata } from './metadata';
import { CategoryId } from './types';

interface Props {
    title: string;
    date?: string;
    categoryId?: CategoryId;
    children: string;
}

export const Article: React.FC<Props> = ({ title, date, categoryId, children }) => (
    <article>
        <header>
            <h1 className={titleStyle}>
                <Twemoji svg text={title} />
            </h1>
            <Metadata date={date} categoryId={categoryId} />
        </header>
        <Markdown>{children}</Markdown>
    </article>
);
