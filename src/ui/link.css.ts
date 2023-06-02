import { style } from '@vanilla-extract/css';

import { gridSize } from '../styles/constants';

export const externalLinkIconStyle = style({
    marginLeft: `${1.25 * gridSize}px`,
    width: `${2 * gridSize}px`,
});
