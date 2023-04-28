import { style } from '@vanilla-extract/css';

import { gridSize } from '../styles/constants';
import { srOnlyStyleImpl } from '../styles/mixins.css';

export const srOnlyStyle = style(srOnlyStyleImpl);

export const articleStyle = style({
    selectors: {
        '&:not(:last-child)': {
            marginBottom: `${5.5 * gridSize}px`,
        },
    },
});
