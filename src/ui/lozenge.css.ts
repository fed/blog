import { style, styleVariants } from '@vanilla-extract/css';

import { borderRadius, colors, fontFamilies, fontSizes, gridSize, lineHeights } from '../styles/constants';

const base = style({
    borderRadius: borderRadius.default,
    color: colors.white,
    display: 'inline-block',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xxs,
    lineHeight: lineHeights.sm,
    padding: `${0.375 * gridSize}px ${0.625 * gridSize}px`,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
});

export const lozenge = styleVariants({
    default: [base, { backgroundColor: colors.grayMedium }],
    primary: [base, { backgroundColor: colors.blue }],
    success: [base, { backgroundColor: colors.green }],
    error: [base, { backgroundColor: colors.red }],
    warning: [base, { backgroundColor: colors.yellow, color: colors.brown }],
    info: [base, { backgroundColor: colors.purple }],
});
