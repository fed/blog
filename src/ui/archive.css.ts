import { style } from '@vanilla-extract/css';

import { baseHeadingStyle, baseParagraphStyle } from '../styles/common.css';
import { gridSize, fontSizes, colors, fontFamilies, fontWeights, containerDimensions } from '../styles/constants';

export const titleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.xxl,
        margin: `0 0 ${2.5 * gridSize}px`,
    },
]);

export const blurbStyle = style([
    baseParagraphStyle,
    {
        margin: `0 0 ${4 * gridSize}px`,
    },
]);

export const articleList = style({
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 0,
});

export const articleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.normal,
        margin: 0,
        selectors: {
            '&:not(:last-child)': {
                marginBottom: `${3 * gridSize}px`,
            },
        },
    },
]);

export const dateStyle = style({
    color: colors.grayMedium,
    display: 'block',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.sm,
    textTransform: 'uppercase',
    '@media': {
        [`screen and (min-width: ${containerDimensions.sm})`]: {
            display: 'inline-block',
            width: '135px',
        },
    },
});
