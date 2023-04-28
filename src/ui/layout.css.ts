import { style } from '@vanilla-extract/css';

import { colors, containerDimensions, fontFamilies, gridSize } from '../styles/constants';

export const skipLinkStyle = style({
    alignItems: 'center',
    backgroundColor: colors.pink,
    color: colors.white,
    display: 'flex',
    fontFamily: fontFamilies.sansSerif,
    height: `${6.25 * gridSize}px`,
    left: 0,
    padding: `0 ${2 * gridSize}px`,
    position: 'fixed',
    textDecoration: 'none',
    top: 0,
    transform: `translateY(-${6.25 * gridSize}px)`,
    zIndex: 10,
    selectors: {
        '&:focus': {
            transform: 'translateY(0)',
        },
    },
});

export const contentStyle = style({
    margin: '0 auto',
    maxWidth: containerDimensions.lg,
    padding: `${4.5 * gridSize}px ${3 * gridSize}px ${6 * gridSize}px`,
});
