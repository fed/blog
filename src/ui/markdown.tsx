import React from 'react';
import styled from 'styled-components';

import { gridSize } from '../styles/constants';
import { baseHeadingStyles, baseLinkStyles, baseParagraphStyles } from '../styles/mixins';

const Container = styled.div`
    p,
    ul,
    ol {
        ${baseParagraphStyles};
    }

    a:not(.gatsby-resp-image-link) {
        ${baseLinkStyles};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${baseHeadingStyles};
        font-weight: 600;
        margin: ${6.25 * gridSize}px 0 0;
    }

    img {
        max-width: 100%;
    }

    blockquote {
        background-color: rgb(222, 235, 255);
        border-radius: 3px;
        margin-left: 0;
        margin-right: 0;
        padding: ${gridSize}px ${2 * gridSize}px;

        p {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
        }
    }

    /* Inline code */
    code:not([class='grvsc-code']) {
        background-color: rgba(27, 31, 35, 0.05);
        border-radius: 3px;
        font-size: 80%;
        margin: 0;
        padding: ${0.375 * gridSize}px ${0.75 * gridSize}px;
        white-space: normal;
    }
`;

export const Markdown: React.FC = ({ children }) => <Container dangerouslySetInnerHTML={{ __html: children }} />;
