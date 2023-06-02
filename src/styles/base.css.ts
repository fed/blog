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

export const srOnlyStyle = style({
    borderWidth: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
});
