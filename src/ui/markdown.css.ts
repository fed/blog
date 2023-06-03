import { style, globalStyle } from '@vanilla-extract/css';

import { baseParagraphStyleImpl, baseHeadingStyleImpl, baseLinkStyleImpl, baseFocusStyleImpl } from '../styles/common.css';
import { fontFamilies, fontSizes, lineHeights, fontWeights, gridSize, borderRadius } from '../styles/constants';

export const markdownStyle = style({});

// Text content
globalStyle(`${markdownStyle} p, ${markdownStyle} ul, ${markdownStyle} ol`, baseParagraphStyleImpl);

// Links
globalStyle(`${markdownStyle} a`, baseLinkStyleImpl);
globalStyle(`${markdownStyle} a:focus`, baseFocusStyleImpl);

// Headings
globalStyle(
    `${markdownStyle} h1, ${markdownStyle} h2, ${markdownStyle} h3, ${markdownStyle} h4, ${markdownStyle} h5, ${markdownStyle} h6`,
    {
        ...baseHeadingStyleImpl,
        fontWeight: fontWeights.bold,
        margin: `${6.25 * gridSize}px 0 0`,
    },
);

// Bold text
globalStyle(`${markdownStyle} b, ${markdownStyle} strong`, {
    fontWeight: fontWeights.bold,
});

// Images
globalStyle(`${markdownStyle} img`, {
    maxWidth: '100%',
});

// Add some vertical spacing to all images
globalStyle(`${markdownStyle} .gatsby-resp-image-figure, ${markdownStyle} p > .gatsby-resp-image-wrapper`, {
    marginBottom: `${6 * gridSize}px`,
    marginTop: `${6 * gridSize}px`,
});

// Figure captions
globalStyle(`${markdownStyle} .gatsby-resp-image-figcaption`, {
    ...baseParagraphStyleImpl,
    fontSize: fontSizes.xs,
    marginTop: `${gridSize}px`,
    textAlign: 'center',
});

// All code
globalStyle(`${markdownStyle} pre, ${markdownStyle} code, ${markdownStyle} kbd, ${markdownStyle} samp`, {
    fontFamily: fontFamilies.monospace,
});

// Inline code
globalStyle(`${markdownStyle} code:not([class="grvsc-code"])`, {
    backgroundColor: 'rgba(27, 31, 35, 0.05)',
    borderRadius: borderRadius.default,
    fontSize: '80%',
    margin: 0,
    padding: `${0.375 * gridSize}px ${0.75 * gridSize}px`,
    whiteSpace: 'normal',
    fontWeight: fontWeights.normal,
});

// Code blocks
globalStyle(`${markdownStyle} pre.grvsc-container`, {
    lineHeight: lineHeights.lg,
});
