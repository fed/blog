import { style } from '@vanilla-extract/css';

import { baseTitleStyle } from '../styles/common.css';
import { gridSize } from '../styles/constants';

export const titleStyle = style([
    baseTitleStyle,
    {
        margin: `0 0 ${1.25 * gridSize}px 0`,
    },
]);
