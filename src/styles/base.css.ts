import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontWeights, lineHeights } from './constants';

export const baseHeadingStyle = style({
    color: colors.grayDark,
    fontFamily: fontFamilies.sansSerif,
    lineHeight: lineHeights.md,
});

export const baseTitleStyle = style([
    baseHeadingStyle,
    {
        fontWeight: fontWeights.bold,
        margin: 0,
    },
]);
