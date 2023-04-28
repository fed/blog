import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontSizes, fontWeights, gridSize, lineHeights, borderRadius } from '../styles/constants';

const baseLozengeStyle = style({
    borderRadius: borderRadius.default,
    color: colors.white,
    display: 'inline-block',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    padding: `${0.375 * gridSize}px ${0.5 * gridSize}px`,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
});

export const primaryLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.blue,
    },
]);

export const successLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.green,
    },
]);

export const errorLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.red,
    },
]);

export const warningLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.yellow,
        color: colors.brown,
    },
]);

export const infoLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.purple,
    },
]);

export const defaultLozengeStyle = style([
    baseLozengeStyle,
    {
        backgroundColor: colors.grayMedium,
    },
]);
