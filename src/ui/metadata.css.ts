import { style } from '@vanilla-extract/css';

import { colors, fontFamilies, fontSizes, gridSize } from '../styles/constants';
import { srOnlyStyleImpl } from '../styles/mixins.css';

export const srOnlyStyle = style(srOnlyStyleImpl);

export const containerStyle = style({
    margin: `0 0 ${0.625 * gridSize}px`,
});

export const publicationDateStyle = style({
    color: colors.grayMedium,
    fontFamily: fontFamilies.sansSerif,
    fontSize: fontSizes.xxs + 1,
    marginRight: `${1.25 * gridSize}px`,
    textTransform: 'uppercase',
});
