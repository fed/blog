import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { titleStyle, headerStyle, markdownStyle } from './article.css';
import { Metadata } from './metadata';
import { CategoryId } from './types';

interface Props {
    title: string;
    date?: string;
    categoryId?: CategoryId;
    children: TrustedHTML;
    inlineHeading?: boolean;
}

export const Article: React.FunctionComponent<Props> = ({ title, date, categoryId, children, inlineHeading = false }) => (
    <article>
        <header className={inlineHeading ? undefined : headerStyle}>
            <h1 className={titleStyle}>
                <Twemoji svg text={title} />
            </h1>
            <Metadata date={date} categoryId={categoryId} />
        </header>
        {/* eslint-disable-next-line react/no-danger */}
        <div className={markdownStyle} dangerouslySetInnerHTML={{ __html: children }} data-testid="article-body" />
    </article>
);
