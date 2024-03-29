import { style } from '@vanilla-extract/css';

import { baseParagraphStyle, baseHeadingStyle } from '../styles/common.css';
import { gridSize, fontSizes, fontWeights } from '../styles/constants';

export const articleStyle = style({
    selectors: {
        '&:not(:last-child)': {
            marginBottom: `${5.5 * gridSize}px`,
        },
    },
});

export const titleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.normal,
        margin: 0,
    },
]);

export const spoilerStyle = style([
    baseParagraphStyle,
    {
        margin: `${0.625 * gridSize}px 0 0`,
    },
]);
