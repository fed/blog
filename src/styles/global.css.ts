import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
});

const atkinson = 'Atkinson Hyperlegible';

globalFontFace(atkinson, {
    src: 'url("/fonts/Atkinson-Hyperlegible-Regular-102a.woff2") format("woff2")',
    fontStyle: 'normal',
    fontWeight: 'normal',
});

globalFontFace(atkinson, {
    src: 'url("/fonts/Atkinson-Hyperlegible-Italic-102a.woff2") format("woff2")',
    fontStyle: 'italic',
    fontWeight: 'normal',
});

globalFontFace(atkinson, {
    src: 'url("/fonts/Atkinson-Hyperlegible-Bold-102a.woff2") format("woff2")',
    fontStyle: 'normal',
    fontWeight: 'bold',
});

globalFontFace(atkinson, {
    src: 'local("/fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2") format("woff2")',
    fontStyle: 'italic',
    fontWeight: 'bold',
});
