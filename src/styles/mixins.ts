import { css } from 'styled-components';

import { colors, fontFamilies, fontWeights, fontSizes, lineHeights, borderRadius } from './constants';

export const baseHeadingStyles = css`
    color: ${colors.grayDark};
    font-family: ${fontFamilies.sansSerif};
    line-height: ${lineHeights.md};
`;

export const baseTitleStyles = css`
    ${baseHeadingStyles};
    font-weight: ${fontWeights.bold};
    margin: 0;
`;

export const baseParagraphStyles = css`
    color: ${colors.grayDark};
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.md};
    font-weight: ${fontWeights.light};
    line-height: ${lineHeights.lg};
`;

export const baseFocusStateStyles = css`
    :focus {
        border-bottom-style: none;
        border-radius: ${borderRadius.default};
        box-shadow: 0 0 0 ${borderRadius.default} ${colors.pink};
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

export const srOnly = css`
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
