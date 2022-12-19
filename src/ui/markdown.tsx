import React from 'react';
import styled from 'styled-components';

import { colors, fontFamilies, fontWeights, gridSize } from '../styles/constants';
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
        font-weight: ${fontWeights.bold};
        margin: ${6.25 * gridSize}px 0 0;
    }

    b,
    strong {
        font-weight: ${fontWeights.bold};
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
            font-weight: ${fontWeights.normal};
            margin: 0;
        }

        a:not(.gatsby-resp-image-link) {
            color: ${colors.grayDark};
            transition: none;

            &,
            :hover {
                border-bottom: 2px solid ${colors.blue};
            }
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
        font-weight: ${fontWeights.normal};
    }

    /* Code blocks */
    pre.grvsc-container {
        line-height: 1.75;
    }

    pre,
    code,
    code,
    kbd,
    samp {
        font-family: ${fontFamilies.monospace};
    }

    /* Add some vertical spacing to all images */
    .gatsby-resp-image-figure,
    p > .gatsby-resp-image-wrapper {
        margin-bottom: ${6 * gridSize}px;
        margin-top: ${6 * gridSize}px;
    }

    .gatsby-resp-image-figcaption {
        ${baseParagraphStyles};
        font-size: 12px;
        margin-top: ${gridSize}px;
        text-align: center;
    }
`;

export const Markdown: React.FC = ({ children }) => <Container dangerouslySetInnerHTML={{ __html: children }} />;
