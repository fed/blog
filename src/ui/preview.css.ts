import { style } from '@vanilla-extract/css';

import { fontSizes, fontWeights, gridSize } from '../styles/constants';
import { baseHeadingStyleImpl, baseParagraphStyleImpl } from '../styles/mixins.css';

export const titleStyle = style({
    ...baseHeadingStyleImpl,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    margin: 0,
});

export const spoilerStyle = style({
    ...baseParagraphStyleImpl,
    margin: `${1.25 * gridSize}px 0 0`,
});
