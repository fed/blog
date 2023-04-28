import { style } from '@vanilla-extract/css';

import { gridSize } from '../styles/constants';
import { baseFocusStateStyleImpl, baseLinkStyleImpl } from '../styles/mixins.css';

export const linkStyle = style({
    ...baseLinkStyleImpl,
    ':focus': baseFocusStateStyleImpl,
});

export const externalLinkIconStyle = style({
    marginLeft: `${1.25 * gridSize}px`,
    width: `${2 * gridSize}px`,
});
