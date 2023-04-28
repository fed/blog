import { colors, fontFamilies, fontWeights, fontSizes, borderRadius, lineHeights } from './constants';

export const baseHeadingStyleImpl = {
    color: colors.grayDark,
    fontFamily: fontFamilies.sansSerif,
    lineHeight: 1.4,
};

export const baseParagraphStyleImpl = {
    color: colors.grayDark,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.light,
    lineHeight: lineHeights.extra,
};

export const baseFocusStateStyleImpl = {
    borderRadius: borderRadius.default,
    boxShadow: `0 0 0 ${borderRadius.default} ${colors.pink}`,
    outline: 'none',
    textDecoration: 'none',
};

export const baseLinkStyleImpl = {
    color: colors.blue,
};

export const srOnlyStyleImpl = {
    borderWidth: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute' as const,
    whiteSpace: 'nowrap' as const,
    width: '1px',
};
