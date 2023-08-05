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

export const headerStyle = style({
    backgroundColor: '#f6f8fa',
    borderBottom: `1px solid ${colors.grayLight}`,
});

export const navigationMenuStyle = style({
    alignItems: 'center',
    display: 'flex', // Enable scrolling to provide access to all navigation menu items on mobile
    overflowX: 'scroll',
    padding: `${1.75 * gridSize}px 0 ${1.75 * gridSize}px ${3 * gridSize}px`,
    '@media': {
        [`screen and (min-width: ${containerDimensions.sm})`]: {
            margin: '0 auto',
            maxWidth: containerDimensions.lg,
            overflowX: 'hidden', // Hide the scrollbar on Windows (desktop)
        },
    },
});

export const logoLinkStyle = style([
    baseFocusStyle,
    {
        alignItems: 'center',
        display: 'flex',
        marginRight: `${3.5 * gridSize}px`,
        textDecoration: 'none',
        width: 'max-content',
    },
]);

export const avatarStyle = style({
    height: `${2.5 * gridSize}px`,
    marginRight: `${1.25 * gridSize}px`,
    width: `${2.5 * gridSize}px`,
});

export const siteNameStyle = style({
    alignItems: 'center',
    color: colors.navy,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    whiteSpace: 'nowrap',
});

export const listStyle = style({
    display: 'flex',
    margin: 0,
    paddingLeft: 0,
});

export const listItemStyle = style({
    color: colors.navy,
    display: 'inline-block',
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    listStyleType: 'none',
    selectors: {
        '&:not(:last-child)': {
            marginRight: `${2 * gridSize}px`,
        },
    },
});

export const linkStyle = style([
    baseFocusStyle,
    {
        borderRadius: borderRadius.default,
        color: colors.navy,
        display: 'inline-block',
        fontFamily: fontFamilies.sansSerif,
        textDecoration: 'none',
        transition: 'background-color 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)',
        selectors: {
            '&:hover': {
                color: colors.blue,
                textDecoration: 'none',
            },
        },
    },
]);
