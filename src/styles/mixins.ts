import { css } from 'styled-components';

import { colors, fontFamilies } from './constants';

export const baseHeadingStyles = css`
    color: ${colors.grayDark};
    font-family: ${fontFamilies.sansSerif};
    line-height: 1.4;
`;

export const baseTitleStyles = css`
    ${baseHeadingStyles};
    font-size: 30px;
    font-weight: 700;
    margin: 0;
`;

export const baseParagraphStyles = css`
    color: ${colors.grayDark};
    font-family: ${fontFamilies.sansSerif};
    font-size: 18px;
    font-weight: 250;
    line-height: 1.6;
`;

export const baseFocusStateStyles = css`
    :focus {
        border-bottom-style: none;
        border-radius: 3px;
        box-shadow: 0 0 0 3px ${colors.pink};
        outline: none;
    }

    :focus :hover {
        border-bottom-style: none;
    }
`;

export const baseLinkStyles = css`
    ${baseFocusStateStyles};
    border-bottom: 1px solid ${colors.grayLight};
    color: ${colors.blue};
    padding-bottom: 1px;
    text-decoration: none;
    transition: border-bottom 0.5s ease;
    word-break: break-word;

    :hover {
        border-bottom: 1px solid ${colors.blue};
    }
`;
