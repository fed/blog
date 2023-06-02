import { style } from '@vanilla-extract/css';

import { gridSize } from '../styles/constants';

export const articleStyle = style({
    selectors: {
        '&:not(:last-child)': {
            marginBottom: `${5.5 * gridSize}px`,
        },
    },
});
