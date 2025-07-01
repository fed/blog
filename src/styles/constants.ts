import { ATKINSON_HYPERLEGIBLE } from './global.css';

export const colors = {
    black: '#1f2937',
    grayDark: '#344563',
    grayMedium: '#526b8d',
    grayLight: '#e1e1e1',
    grayExtraLight: '#fafafa',
    white: '#fff',
    yellow: '#f9ca5e',
    red: '#ed615a',
    blue: '#0572e6',
};

export const gridSize = 8;

export const fontFamilies = {
    sansSerif: `"${ATKINSON_HYPERLEGIBLE}", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Noto Sans", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    monospace: '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace',
};

// 16px base font size
export const fontSizes = {
    xs: '0.875rem', // 14px
    sm: '1.125rem', // 18px
    md: '1.375rem', // 22px
    lg: '1.875rem', // 30px
    xl: '2.5rem', // 40px
};

export const fontWeights = {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
};

export const lineHeights = {
    sm: 1,
    md: 1.4,
    lg: 1.75,
};

export const containerDimensions = {
    sm: '768px',
    lg: '1024px',
};

export const borderRadius = {
    default: '3px',
};
