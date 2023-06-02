import isString from 'lodash/isString';
import React from 'react';
import styled from 'styled-components';

import { markdownStyle } from './markdown.css';
import { baseLinkStyles } from '../styles/mixins';

// This cannot be migrated to vanilla-extract as is,
// because the baseLinkStyles contains selectors that are not admitted as part of global styles.
// As a result I'll need to simplify the link styles.
const Container = styled.div`
    a:not(.gatsby-resp-image-link) {
        ${baseLinkStyles};
    }
`;

export const Markdown: React.FC = ({ children }) => {
    if (!isString(children)) {
        return null;
    }

    // eslint-disable-next-line react/no-danger
    return <Container className={markdownStyle} dangerouslySetInnerHTML={{ __html: children }} />;
};
