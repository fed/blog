import { globalStyle, globalFontFace } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
});

export const ATKINSON_HYPERLEGIBLE = 'Atkinson Hyperlegible';
const FONTS_PATH = '/fonts/Atkinson-Hyperlegible-Font-Web-2020-0514/WOFF2';

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/Atkinson-Hyperlegible-Regular-102a.woff2") format("woff2")`,
    fontStyle: 'normal',
    fontWeight: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/Atkinson-Hyperlegible-Italic-102a.woff2") format("woff2")`,
    fontStyle: 'italic',
    fontWeight: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/Atkinson-Hyperlegible-Bold-102a.woff2") format("woff2")`,
    fontStyle: 'normal',
    fontWeight: 'bold',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/Atkinson-Hyperlegible-BoldItalic-102a.woff2") format("woff2")`,
    fontStyle: 'italic',
    fontWeight: 'bold',
});
