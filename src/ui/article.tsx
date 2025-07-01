import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { titleStyle, blogPostHeaderStyle, markdownStyle, categoryStyle, metadataStyle, publicationDateStyle } from './article.css';
import { CategoryId, categories } from '../model/categories';
import { srOnlyStyle } from '../styles/common.css';

interface Props {
    title: string;
    date?: string;
    datetime?: string;
    categoryId?: CategoryId;
    isBlogPost?: boolean;
    children: TrustedHTML | React.ReactNode;
}

export const Article: React.FunctionComponent<Props> = ({ title, date, datetime, categoryId, isBlogPost = false, children }) => {
    let metadata: React.ReactNode = null;

    if (isBlogPost) {
        const categoryName = categories.find((c) => c.id === categoryId)?.title;

        metadata = (
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
        );
    }

    return (
        <article>
            <header className={isBlogPost ? blogPostHeaderStyle : undefined}>
                <h1 className={titleStyle}>
                    <Twemoji svg text={title} />
                </h1>
                {metadata}
            </header>

            {typeof children === 'string' ? (
                <div
                    className={markdownStyle}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: children }}
                    data-testid="article-body-markdown"
                />
            ) : (
                <div className={markdownStyle} data-testid="article-body-node">
                    {children as React.ReactNode}
                </div>
            )}
        </article>
    );
};
