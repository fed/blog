import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontSizes, fontWeights, lineHeights, borderRadius } from './constants';

// The style definition (e.g. baseHeadingStyle) and its corresponding CSS declaration (e.g. baseHeadingStyleImpl)
// are declared separately because unfortunately when declaring global styles (as in the markdown.css.ts file)
// you need to pass in an object with CSS properties and not a vanilla-extract classname.

export const baseHeadingStyleImpl = {
    color: colors.grayDark,
    fontFamily: fontFamilies.sansSerif,
    lineHeight: lineHeights.md,
};

export const baseHeadingStyle = style(baseHeadingStyleImpl);

export const baseTitleStyle = style([
    baseHeadingStyle,
    {
        fontWeight: fontWeights.bold,
        margin: 0,
    },
]);

export const baseParagraphStyleImpl = {
    color: colors.grayDark,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.light,
    lineHeight: lineHeights.lg,
};

export const baseParagraphStyle = style(baseParagraphStyleImpl);

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
