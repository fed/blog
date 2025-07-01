import { style } from '@vanilla-extract/css';

import { baseFocusStyle } from '../styles/common.css';
import {
    gridSize,
    colors,
    fontFamilies,
    fontSizes,
    containerDimensions,
    fontWeights,
    lineHeights,
    borderRadius,
} from '../styles/constants';

const skipLinkHeight = 6.25 * gridSize;
const skipLinkMargin = gridSize;

export const skipLinkContainerStyle = style({
    alignItems: 'center',
    backgroundColor: colors.red,
    display: 'inline-flex',
    borderRadius: borderRadius.default,
    height: `${skipLinkHeight}px`,
    left: 0,
    padding: `0 ${2 * gridSize}px`,
    position: 'fixed',
    top: 0,
    transform: `translateY(-${skipLinkHeight + skipLinkMargin}px)`,
    zIndex: 10,
    margin: `${skipLinkMargin}px`,
    selectors: {
        '&:has(> a:focus)': {
            transform: 'translateY(0)',
        },
    },
});

export const skipLinkStyle = style({
    color: colors.white,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.light,
    outlineOffset: `${0.5 * gridSize}px`,
});

export const contentStyle = style({
    margin: '0 auto',
    maxWidth: containerDimensions.lg,
    padding: `${4.5 * gridSize}px ${3 * gridSize}px ${6 * gridSize}px`,
});

export const headerStyle = style({
    backgroundColor: colors.grayExtraLight,
    borderBottom: `1px solid ${colors.grayLight}`,
    selectors: {
        '&::before': {
            height: `${0.375 * gridSize}px`,
            backgroundColor: colors.yellow,
            content: '""',
            display: 'block',
            width: '100%',
        },
    },
});

export const navigationMenuStyle = style({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    overflowX: 'scroll', // Enable scrolling to provide access to all navigation menu items on mobile
    padding: `${2 * gridSize}px ${3 * gridSize}px`,
    '@media': {
        [`screen and (min-width: ${containerDimensions.sm})`]: {
            margin: '0 auto',
            maxWidth: containerDimensions.lg,
            overflowX: 'hidden', // Hide the scrollbar on Windows (desktop)
        },
    },
});

const underlinedLinkStyleImpl = {
    content: '""',
    display: 'block',
    height: `${0.25 * gridSize}px`,
    background: 'currentColor',
};

export const baseNavigationLinkStyle = style([
    baseFocusStyle,
    {
        color: colors.navy,
        textDecoration: 'none',
        selectors: {
            '&::after': {
                ...underlinedLinkStyleImpl,
                transition: 'width .3s',
                width: 0,
            },
            '&:hover::after': {
                width: '100%',
            },
        },
    },
]);

export const activeNavigationLinkStyle = style({
    selectors: {
        '&::after': {
            ...underlinedLinkStyleImpl,
            width: '100%',
        },
    },
});

export const logoLinkStyle = style([
    baseNavigationLinkStyle,
    {
        alignItems: 'flex-start',
        display: 'flex',
        marginRight: `${5 * gridSize}px`,
    },
]);

export const emojiStyle = style({
    height: '32px',
    marginRight: `${1.5 * gridSize}px`,
});

export const siteNameContainerStyle = style({
    whiteSpace: 'nowrap',
});

export const nameStyle = style({
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.sm,
});

export const taglineStyle = style({
    fontWeight: fontWeights.light,
    color: colors.grayMedium,
    fontSize: fontSizes.xs,
    marginTop: `${0.375 * gridSize}px`,
});

export const listStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    paddingLeft: 0,
});

export const listItemStyle = style({
    display: 'inline-block',
    listStyleType: 'none',
    // Make sure all items including the last one have a right margin
    // to ensure the navbar is scrollable on mobile
    marginRight: `${3.5 * gridSize}px`,
});
