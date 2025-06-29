import { style } from '@vanilla-extract/css';

import { baseHeadingStyle } from '../styles/common.css';
import { gridSize, fontSizes, colors, fontFamilies, fontWeights } from '../styles/constants';

export const headingStyle = style([
    baseHeadingStyle,
    {
        margin: `0 0 ${2.5 * gridSize}px 0`,
    },
]);

export const articleList = style({
    marginTop: `${4 * gridSize}px`,
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
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xs,
    marginLeft: `${1.25 * gridSize}px`,
    textTransform: 'uppercase',
});
