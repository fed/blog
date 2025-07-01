import { style } from '@vanilla-extract/css';

import { baseHeadingStyle, baseParagraphStyle } from '../styles/common.css';
import { gridSize, fontSizes } from '../styles/constants';

export const titleStyle = style([
    baseHeadingStyle,
    {
        fontSize: fontSizes.xl,
        margin: `0 0 ${2.5 * gridSize}px`,
    },
]);

export const contentStyle = baseParagraphStyle;
