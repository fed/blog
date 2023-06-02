import isString from 'lodash/isString';
import React from 'react';

import { markdownStyle } from './markdown.css';

export const Markdown: React.FC = ({ children }) => {
    if (!isString(children)) {
        return null;
    }

    // eslint-disable-next-line react/no-danger
    return <div className={markdownStyle} dangerouslySetInnerHTML={{ __html: children }} />;
};
