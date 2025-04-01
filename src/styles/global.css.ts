import { globalStyle, globalFontFace } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
});

export const ATKINSON_HYPERLEGIBLE = 'Atkinson Hyperlegible Next';
const FONTS_PATH = '/fonts/Atkinson-Hyperlegible-Next';

// Extra Light (200)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-ExtraLight.woff2") format("woff2")`,
    fontWeight: 200,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-ExtraLightItalic.woff2") format("woff2")`,
    fontWeight: 200,
    fontStyle: 'italic',
});

// Light (300)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-Light.woff2") format("woff2")`,
    fontWeight: 300,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-LightItalic.woff2") format("woff2")`,
    fontWeight: 300,
    fontStyle: 'italic',
});

// Regular (400)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-Regular.woff2") format("woff2")`,
    fontWeight: 400,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-RegularItalic.woff2") format("woff2")`,
    fontWeight: 400,
    fontStyle: 'italic',
});

// Medium (500)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-Medium.woff2") format("woff2")`,
    fontWeight: 500,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-MediumItalic.woff2") format("woff2")`,
    fontWeight: 500,
    fontStyle: 'italic',
});

// Semi Bold (600)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-SemiBold.woff2") format("woff2")`,
    fontWeight: 600,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-SemiBoldItalic.woff2") format("woff2")`,
    fontWeight: 600,
    fontStyle: 'italic',
});

// Bold (700)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-Bold.woff2") format("woff2")`,
    fontWeight: 700,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-BoldItalic.woff2") format("woff2")`,
    fontWeight: 700,
    fontStyle: 'italic',
});

// Extra Bold (800)
globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-ExtraBold.woff2") format("woff2")`,
    fontWeight: 800,
    fontStyle: 'normal',
});

globalFontFace(ATKINSON_HYPERLEGIBLE, {
    src: `url("${FONTS_PATH}/AtkinsonHyperlegibleNext-ExtraBoldItalic.woff2") format("woff2")`,
    fontWeight: 800,
    fontStyle: 'italic',
});
