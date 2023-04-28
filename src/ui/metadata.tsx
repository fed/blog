import React from 'react';

import { categories } from '../model';
import { Lozenge } from './lozenge';
import { containerStyle, publicationDateStyle, srOnlyStyle } from './metadata.css';
import { CategoryId } from './types';

interface Props {
    date?: string;
    categoryId?: CategoryId;
    isPreview?: boolean;
}

export const Metadata: React.FC<Props> = ({ date, categoryId, isPreview = false }) => {
    if (!date && !categoryId) {
        return null;
    }

    const category = categories.find((c) => c.id === categoryId);

    return (
        <>
            <span className={srOnlyStyle}>
                Published on {date} under the category {category?.title}
            </span>
            <div className={containerStyle} aria-hidden="true">
                {date ? (
                    <span className={publicationDateStyle} data-testid="metadata-publication-date">
                        {date}
                    </span>
                ) : null}
                {category?.title ? <Lozenge type={isPreview ? 'default' : 'primary'}>{category.title}</Lozenge> : null}
            </div>
        </>
    );
};
