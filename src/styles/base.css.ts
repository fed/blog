import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontWeights, lineHeights, borderRadius } from './constants';

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

export const baseFocusStateStyle = style({
    selectors: {
        '&:focus': {
            outline: `${borderRadius.default} solid ${colors.pink}`,
            outlineOffset: '2px',
            borderRadius: '1px',
            borderBottomStyle: 'none',
        },
        '&:focus:hover': {
            borderBottomStyle: 'none',
        },
    },
});

export const baseLinkStyle = style([
    baseFocusStateStyle,
    {
        borderBottom: `1px solid ${colors.grayLight}`,
        color: colors.blue,
        paddingBottom: '1px',
        textDecoration: 'none',
        transition: 'border-bottom 0.5s ease',
        wordBreak: 'break-word',
        selectors: {
            '&:hover': {
                borderBottom: `1px solid ${colors.blue}`,
            },
        },
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
