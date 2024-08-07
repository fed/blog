import { style } from '@vanilla-extract/css';

import { baseFocusStyle } from '../styles/common.css';
import { gridSize, colors, fontFamilies, fontSizes, containerDimensions, fontWeights, lineHeights } from '../styles/constants';

const skipLinkHeight = 6.25 * gridSize;

export const skipLinkStyle = style({
    alignItems: 'center',
    backgroundColor: colors.pink,
    color: colors.white,
    display: 'flex',
    fontFamily: fontFamilies.sansSerif,
    height: `${skipLinkHeight}px`,
    left: 0,
    padding: `0 ${2 * gridSize}px`,
    position: 'fixed',
    textDecoration: 'none',
    top: 0,
    transform: `translateY(-${skipLinkHeight}px)`,
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

export const headerStyle = style({
    backgroundColor: colors.grayExtraLight,
    borderBottom: `1px solid ${colors.grayLight}`,
});

export const navigationMenuStyle = style({
    alignItems: 'center',
    display: 'flex',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    overflowX: 'scroll', // Enable scrolling to provide access to all navigation menu items on mobile
    padding: `${1.75 * gridSize}px 0 ${1.5 * gridSize}px ${3 * gridSize}px`,
    '@media': {
        [`screen and (min-width: ${containerDimensions.sm})`]: {
            margin: '0 auto',
            maxWidth: containerDimensions.lg,
            overflowX: 'hidden', // Hide the scrollbar on Windows (desktop)
        },
    },
});

export const baseNavigationLinkStyle = style([
    baseFocusStyle,
    {
        color: colors.navy,
        textDecoration: 'none',
        selectors: {
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
]);

export const logoLinkStyle = style([
    baseNavigationLinkStyle,
    {
        alignItems: 'center',
        display: 'flex',
        marginRight: `${6 * gridSize}px`,
    },
]);

export const emojiStyle = style({
    height: `${2.5 * gridSize}px`,
    marginRight: `${1.25 * gridSize}px`,
    width: `${2.5 * gridSize}px`,
});

export const siteNameStyle = style({
    alignItems: 'center',
    fontWeight: fontWeights.bold,
    whiteSpace: 'nowrap',
});

export const dimmedSiteNameStyle = style({
    fontWeight: fontWeights.light,
    color: colors.grayMedium,
});

export const listStyle = style({
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    paddingLeft: 0,
});

export const listItemStyle = style({
    display: 'inline-block',
    listStyleType: 'none',
    marginRight: `${2.5 * gridSize}px`, // Make sure all items including the last one have a rght margin to ensure the navbar is scrollable on mobile
});
