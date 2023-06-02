import { style } from '@vanilla-extract/css';

import { baseParagraphStyle, baseHeadingStyle } from '../styles/base.css';
import { gridSize, fontSizes, fontWeights } from '../styles/constants';

export const titleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        margin: 0,
    },
]);

export const spoilerStyle = style([
    baseParagraphStyle,
    {
        margin: `${1.25 * gridSize}px 0 0`,
    },
]);
