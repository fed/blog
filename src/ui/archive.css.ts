import { style } from '@vanilla-extract/css';

import { baseHeadingStyle, baseParagraphStyleImpl } from '../styles/common.css';
import { gridSize, fontSizes, colors, fontFamilies, fontWeights, containerDimensions } from '../styles/constants';

export const contentStyle = style({
    margin: `${4 * gridSize}px 0 0`,
});

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
                marginBottom: `${4.5 * gridSize}px`,
            },
        },
        '@media': {
            [`screen and (min-width: ${containerDimensions.sm})`]: {
                selectors: {
                    '&:not(:last-child)': {
                        marginBottom: `${3 * gridSize}px`,
                    },
                },
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

export const emptyStateStyle = style([
    baseParagraphStyleImpl,
    {
        color: colors.red,
        fontWeight: fontWeights.semibold,
    },
]);

export const categoriesListStyle = style({
    listStyleType: 'none',
    paddingLeft: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    fontFamily: fontFamilies.monospace,
    fontSize: '16px',
    margin: `${3.125 * gridSize}px 0 ${5.625 * gridSize}px`,
});

export const categoriesListItemStyle = style({
    display: 'inline-block',
    border: `1px solid ${colors.grayLight}`,
    borderRadius: '5px',
    padding: '4px 8px',
    backgroundColor: colors.grayExtraLight,
    color: colors.grayDark,
});

export const categoriesListItemSelectedStyle = style({
    border: '1px solid #333',
    backgroundColor: colors.blue,
    color: colors.white,
});
