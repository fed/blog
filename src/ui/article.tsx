import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { titleStyle, headerStyle, markdownStyle, categoryStyle, metadataStyle, publicationDateStyle } from './article.css';
import { CategoryId, categories } from '../model/categories';
import { srOnlyStyle } from '../styles/common.css';

interface Props {
    title: string;
    date?: string;
    datetime?: string;
    categoryId?: CategoryId;
    children: TrustedHTML;
}

export const Article: React.FunctionComponent<Props> = ({ title, date, datetime, categoryId, children }) => {
    const categoryName = categories.find((c) => c.id === categoryId)?.title;

    return (
        <article>
            <header className={headerStyle}>
                <h1 className={titleStyle}>
                    <Twemoji svg text={title} />
                </h1>

                <div className={metadataStyle}>
                    {date && datetime ? (
                        <time dateTime={datetime} className={publicationDateStyle} data-testid="metadata-publication-date">
                            {date}
                        </time>
                    ) : null}
                    {categoryName ? (
                        <span className={categoryStyle} data-testid="metadata-category">
                            <span className={srOnlyStyle}>Category: </span>
                            {categoryName}
                        </span>
                    ) : null}
                </div>
            </header>

            {/* eslint-disable-next-line react/no-danger */}
            <div className={markdownStyle} dangerouslySetInnerHTML={{ __html: children }} data-testid="article-body" />
        </article>
    );
};
