import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { Link } from './link';
import { Metadata } from './metadata';
import { titleStyle, spoilerStyle } from './preview.css';
import type { Post } from './types';

type Props = Post;

export const Preview: React.FC<Props> = ({ title, date, categoryId, url, slug, spoiler, isExternal }) => (
    <>
        <Metadata date={date} categoryId={categoryId} isPreview />

        <h2 className={titleStyle} data-testid="preview-title">
            <Link to={url || slug} isExternal={isExternal}>
                <Twemoji svg text={title} />
            </Link>
        </h2>

        <p className={spoilerStyle} data-testid="preview-spoiler">
            {spoiler}
        </p>
    </>
);
