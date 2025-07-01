import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontSizes, fontWeights, lineHeights, borderRadius } from './constants';

// The style definition (e.g. baseHeadingStyle) and its corresponding CSS declaration (e.g. baseHeadingStyleImpl)
// are declared separately because unfortunately when declaring global styles (as in the markdown.css.ts file)
// you need to pass in an object with CSS properties and not a vanilla-extract classname.

export const baseHeadingStyleImpl = {
    color: colors.black,
    fontFamily: fontFamilies.sansSerif,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.bold,
};

export const baseHeadingStyle = style(baseHeadingStyleImpl);

export const baseParagraphStyleImpl = {
    color: colors.black,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.light,
    lineHeight: lineHeights.lg,
};

export const baseParagraphStyle = style(baseParagraphStyleImpl);

export const baseFocusStyleImpl = {
    outline: `${borderRadius.default} solid ${colors.red}`,
    outlineOffset: '2px',
    borderRadius: '1px',
    borderBottomStyle: 'none' as const,
};

export const baseFocusHoverStyleImpl = {
    borderBottomStyle: 'none' as const,
};

export const baseFocusStyle = style({
    selectors: {
        '&:focus': baseFocusStyleImpl,
        '&:focus:hover': baseFocusHoverStyleImpl,
    },
});

export const baseLinkStyleImpl = {
    borderBottom: `1px solid ${colors.blue}`,
    color: colors.blue,
    paddingBottom: '1px',
    textDecoration: 'none',
    wordBreak: 'break-word' as const,
};

export const baseLinkHoverStyleImpl = {
    borderBottom: `3px solid ${colors.blue}`,
};

export const baseLinkStyle = style([
    baseFocusStyle,
    baseLinkStyleImpl,
    {
        selectors: {
            '&:hover': baseLinkHoverStyleImpl,
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
