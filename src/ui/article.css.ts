import { style } from '@vanilla-extract/css';

import { gridSize, fontSizes, fontWeights } from '../styles/constants';
import { baseHeadingStyleImpl } from '../styles/mixins.css';

export const titleStyle = style({
    ...baseHeadingStyleImpl,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    margin: `0 0 ${1.25 * gridSize}px 0`,
});
