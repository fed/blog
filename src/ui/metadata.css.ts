import { style } from '@vanilla-extract/css';

import { gridSize, colors, fontFamilies, fontSizes } from '../styles/constants';

export const containerStyle = style({
    margin: `0 0 ${0.625 * gridSize}px`,
});

export const publicationDateStyle = style({
    color: colors.grayMedium,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xxs,
    marginRight: `${1.25 * gridSize}px`,
    textTransform: 'uppercase',
});
