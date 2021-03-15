import { css } from 'styled-components';

/* Colors */
const colorGrayDark = '#333';
const colorGrayMedium = '#8f8f8f';
const colorGrayLight = '#e1e1e1';
const colorBlue = '#056cc1';
const colorGreen = '#3cca5d';
const colorYellow = '#f9ca5e';
const colorPink = '#dc2a5f';

/* Font families */
const fontFamilySerif = 'Lora, serif';
const fontFamilySansSerif =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
const fontFamilyMonospace =
    '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';

/* Dimensions */
const sizeContainerSmall = '768px';
const sizeContainerLarge = '875px';

/* Reusable styles */
export const baseTitleStyles = css`
    color: ${colorGrayDark};
    font-family: ${fontFamilySansSerif};
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
`;

export const baseSubtitleStyles = css`
    color: ${colorGrayDark};
    font-family: ${fontFamilySansSerif};
    font-size: 18px;
    font-weight: 300;
`;

export const baseParagraphStyles = css`
    color: ${colorGrayDark};
    font-family: ${fontFamilySerif};
    font-size: 21px;
    line-height: 1.6;
`;

export const baseRawLinkStyles = css`
    color: ${colorBlue};
    text-decoration: none;
    transition: border-bottom 0.5s ease;
    word-break: break-word;
`;

export const baseFocusStateStyles = css`
    :focus {
        border-bottom-style: none;
        border-radius: 3px;
        box-shadow: 0 0 0 3px color-pink;
        outline: none;
    }
`;

export const baseLinkStyles = css`
    ${baseRawLinkStyles};
    border-bottom: 1px solid ${colorGrayLight};
    padding-bottom: 2px;
    :hover {
        border-bottom: 1px solid ${colorBlue};
    }
`;

export const baseSansSerifStyles = css`
    font-family: ${fontFamilySansSerif};
`;

export const baseSmallContainerStyles = css`
    max-width: ${sizeContainerSmall};
`;

export const baseLargeContainerStyles = css`
    max-width: ${sizeContainerLarge};
`;
