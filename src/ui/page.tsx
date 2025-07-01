import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { titleStyle, contentStyle } from './page.css';

interface Props {
    title: string;
    children: TrustedHTML;
}

export const Page: React.FunctionComponent<Props> = ({ title, children }) => (
    <article>
        <header>
            <h1 className={titleStyle}>
                <Twemoji svg text={title} />
            </h1>
        </header>
        {/* eslint-disable-next-line react/no-danger */}
        <div className={contentStyle} dangerouslySetInnerHTML={{ __html: children }} data-testid="article-body" />
    </article>
);
