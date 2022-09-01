import styled, { css } from 'styled-components';

import { colors, fontFamilies, fontWeights, gridSize } from '../styles/constants';

type LozengeType = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

interface Props {
    children: string;
    type?: LozengeType;
}

export const Lozenge = styled.span<Props>`
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    font-size: 11px;
    font-weight: ${fontWeights.bold};
    line-height: 1;
    padding: ${0.375 * gridSize}px ${0.5 * gridSize}px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) => {
        switch (props.type) {
            case 'primary':
                return css`
                    background-color: ${colors.blue};
                `;

            case 'success':
                return css`
                    background-color: ${colors.green};
                `;

            case 'error':
                return css`
                    background-color: ${colors.red};
                `;

            case 'warning':
                return css`
                    background-color: ${colors.yellow};
                    color: ${colors.brown};
                `;

            case 'info':
                return css`
                    background-color: ${colors.purple};
                `;

            case 'default':
            default:
                return css`
                    background-color: ${colors.grayMedium};
                `;
        }
    }}}
`;
