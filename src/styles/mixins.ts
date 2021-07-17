import { css } from 'styled-components';

/* Colors */
export const colorGrayDark = '#1f2937';
export const colorGrayMedium = '#6a7482';
export const colorGrayLight = '#e1e1e1';
export const colorBlue = '#056cc1';
export const colorGreen = '#3cca5d';
export const colorYellow = '#f9ca5e';
export const colorPink = '#dc2a5f';

/* Font families */
export const fontFamilySansSerif =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
export const fontFamilyMonospace =
    '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';

/* Dimensions */
export const sizeContainerExtraSmall = '480px';
export const sizeContainerSmall = '768px';
export const sizeContainerMedium = '875px';
export const sizeContainerLarge = '1024px';
export const sizeContainerExtraLarge = '1290px';

/* Reusable styles */
export const baseHeadingStyles = css`
    color: ${colorGrayDark};
    font-family: ${fontFamilySansSerif};
    line-height: 1.4;
`;

export const baseTitleStyles = css`
    ${baseHeadingStyles};
    font-size: 30px;
    font-weight: 700;
    margin: 0;
`;

export const baseParagraphStyles = css`
    color: ${colorGrayDark};
    font-family: ${fontFamilySansSerif};
    font-size: 18px;
    font-weight: 250;
    line-height: 1.6;
`;

export const baseFocusStateStyles = css`
    :focus {
        border-bottom-style: none;
        border-radius: 3px;
        box-shadow: 0 0 0 3px ${colorPink};
        outline: none;
    }
`;

export const baseLinkStyles = css`
    ${baseFocusStateStyles};
    border-bottom: 1px solid ${colorGrayLight};
    color: ${colorBlue};
    padding-bottom: 2px;
    text-decoration: none;
    transition: border-bottom 0.5s ease;
    word-break: break-word;
    :hover {
        border-bottom: 1px solid ${colorBlue};
    }
`;
