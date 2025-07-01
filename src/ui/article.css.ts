import { style, globalStyle } from '@vanilla-extract/css';

import {
    baseParagraphStyleImpl,
    baseHeadingStyleImpl,
    baseLinkStyleImpl,
    baseLinkHoverStyleImpl,
    baseFocusStyleImpl,
    baseFocusHoverStyleImpl,
    baseHeadingStyle,
} from '../styles/common.css';
import { gridSize, colors, fontFamilies, fontSizes, borderRadius, lineHeights, fontWeights } from '../styles/constants';

export const blogPostHeaderStyle = style({
    textAlign: 'center',
    margin: `${3 * gridSize}px 0 ${7.5 * gridSize}px`,
});

export const titleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.xl,
        margin: `0 0 ${2.5 * gridSize}px 0`,
    },
]);

export const metadataStyle = style({
    margin: `0 0 ${0.625 * gridSize}px`,
});

export const publicationDateStyle = style({
    color: colors.grayMedium,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xs,
    marginRight: `${1.5 * gridSize}px`,
    textTransform: 'uppercase',
});

export const categoryStyle = style({
    borderRadius: borderRadius.default,
    backgroundColor: colors.blue,
    color: colors.white,
    display: 'inline-block',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.sm,
    padding: `${0.5 * gridSize}px ${0.75 * gridSize}px ${0.375 * gridSize}px`,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
});

export const markdownStyle = style({});

// Text content
globalStyle(`${markdownStyle} p, ${markdownStyle} ul, ${markdownStyle} ol`, baseParagraphStyleImpl);

// Tables
globalStyle(`${markdownStyle} td, ${markdownStyle} th`, {
    ...baseParagraphStyleImpl,
    padding: `${gridSize}px`,
    textAlign: 'center',
});
globalStyle(`${markdownStyle} th`, {
    backgroundColor: colors.grayLight,
    fontWeight: fontWeights.bold,
});
globalStyle(`${markdownStyle} table`, {
    borderCollapse: 'collapse',
});
globalStyle(`${markdownStyle} table, ${markdownStyle} th, ${markdownStyle} td`, {
    border: `1px solid ${colors.grayMedium}`,
});

// Links
globalStyle(`${markdownStyle} a`, baseLinkStyleImpl);
globalStyle(`${markdownStyle} a:hover`, baseLinkHoverStyleImpl);
globalStyle(`${markdownStyle} a:focus`, baseFocusStyleImpl);
globalStyle(`${markdownStyle} a:focus:hover`, baseFocusHoverStyleImpl);

// Headings
globalStyle(
    `${markdownStyle} h1, ${markdownStyle} h2, ${markdownStyle} h3, ${markdownStyle} h4, ${markdownStyle} h5, ${markdownStyle} h6`,
    {
        ...baseHeadingStyleImpl,
        margin: `${6.25 * gridSize}px 0 0`,
    },
);
globalStyle(`${markdownStyle} h1`, {
    display: 'none', // There shouldn't be any other headings level 1 in an article
});
globalStyle(`${markdownStyle} h2`, {
    fontSize: fontSizes.lg,
});
globalStyle(`${markdownStyle} h3`, {
    fontSize: fontSizes.md,
});

// Bold text
globalStyle(`${markdownStyle} b, ${markdownStyle} strong`, {
    fontWeight: fontWeights.bold,
});

// Quotes
globalStyle(`${markdownStyle} blockquote`, {
    border: `1px solid ${colors.grayMedium}`,
    backgroundColor: colors.grayExtraLight,
    padding: `${2 * gridSize}px ${3 * gridSize}px`,
    margin: `${6 * gridSize}px ${12 * gridSize}px`,
    boxShadow: `${gridSize}px ${gridSize}px 0px 1px ${colors.grayLight}`,
});
globalStyle(`${markdownStyle} blockquote p`, {
    margin: 0,
    color: colors.grayDark,
});

// Images
globalStyle(`${markdownStyle} img`, {
    maxWidth: '100%',
});
globalStyle(`${markdownStyle} a img`, {
    borderBottomStyle: 'none',
});
globalStyle(`${markdownStyle} a:hover img`, {
    padding: 0,
});

// Videos
globalStyle(`${markdownStyle} iframe[src^="https://www.youtube.com"]`, {
    display: 'block',
    margin: '0 auto',
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
    whiteSpace: 'nowrap',
    color: colors.pink,
    fontWeight: fontWeights.normal,
});
globalStyle(`${markdownStyle} a code:not([class="grvsc-code"])`, {
    color: 'inherit',
});

// Code blocks
globalStyle(`${markdownStyle} pre.grvsc-container`, {
    lineHeight: lineHeights.lg,
});
