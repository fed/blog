---
title: Migrating from styled-components to vanilla-extract
date: 2023-06-04
spoiler: Some learnings after migrating a codebase from styled-components into vanilla-extract.
category: frontend
---

Here are some learnings from migrating a codebase from [styled-components](https://styled-components.com/) to
[vanilla-extract](https://vanilla-extract.style/). Some of the migration steps were not super clear in the official docs, so hopefully
you'll find this useful.

The main motivation for this migration was to move from a model in which styles were generated at runtime to one where they were generated
during build time. For a small and simple codebase this change might not be noticeable, but for a large scale enterprise web application
this could potentially be a significant performance improvement.

## Configuring vanilla-extract to work with Gatsby and Jest

The first step was to configure Gatsby to work with vanilla-extract, which involves installing and adding `gatsby-plugin-vanilla-extract` to
the collection of plugins in the `gatsby-config.js` file.

These are the dependencies I had to install to get this to work:

```
yarn add @vanilla-extract/css @vanilla-extract/jest-transform @vanilla-extract/webpack-plugin gatsby-plugin-vanilla-extract
```

This is all you need to get the tool to work with Gatsby. However, if you try to run your unit tests (in my case, powered by Jest and
Enzyme) they will fail. To fix this you'll need to
[configure vanilla-extract's Babel transformer](https://vanilla-extract.style/documentation/test-environments/#jest) on all `*.css.ts`
files, and make sure this transformer gets called before `babel-jest` as this does not know anything about vanilla-extract, so you need to
transform all style definitions first before moving on to the rest of the code.

You'll also need to
[remove any stubbing of `*.css` files](https://vanilla-extract.style/documentation/test-environments/#remove-style-mocking) as part of the
`moduleNameMapper` map, as this clashes with vanilla-extract because Jest can't differentiate between `.css` and `.css.ts` imports.

This is what the `jest.config.js` file looks like after these changes:

```js {diff}
module.exports = {
	transform: {
+		'\\.css\\.ts$': '@vanilla-extract/jest-transform',
		'^.+\\.[jt]sx?$': 'babel-jest',
	},
	moduleNameMapper: {
-		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
	},
};
```

There's something else you need to consider regarding whether you need styles to be available while running your tests. While sometimes you
might need to test against your actual styles, it can potentially be a major slowdown. If your tests don't require styles to be available,
you can
[import `disableRuntimeStyles` to prevent all style creation](https://vanilla-extract.style/documentation/test-environments/#disabling-runtime-styles).

```js
import '@vanilla-extract/css/disableRuntimeStyles';
```

Make sure to run your tests and also the `gatsby build` to make sure everything is still working.

Here's the [link to the first commit](https://github.com/fed/blog/commit/69e3b183dca75471a63ad1ecf740f56c4bfa86bb) where I set up the tool.

## Migrating a styled-component with different variants

```ts
export const Lozenge = styled.span<{ children: ReactNode; $type?: LozengeType }>`
    border-radius: ${borderRadius.default};
    color: ${colors.white};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.xxs};
    line-height: ${lineHeights.sm};
    padding: ${0.375 * gridSize}px ${0.625 * gridSize}px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) => {
		switch (props.$type) {
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
```

into the following, which reads nicely:

```ts
import { style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, colors, fontFamilies, fontSizes, gridSize, lineHeights } from '../styles/constants';

const base = style({
	borderRadius: borderRadius.default,
	color: colors.white,
	display: 'inline-block',
	fontFamily: fontFamilies.sansSerif,
	fontSize: fontSizes.xxs,
	lineHeight: lineHeights.sm,
	padding: `${0.375 * gridSize}px ${0.625 * gridSize}px`,
	textTransform: 'uppercase',
	whiteSpace: 'nowrap',
});

export const lozenge = styleVariants({
	default: [base, { backgroundColor: colors.grayMedium }],
	primary: [base, { backgroundColor: colors.blue }],
	success: [base, { backgroundColor: colors.green }],
	error: [base, { backgroundColor: colors.red }],
	warning: [base, { backgroundColor: colors.yellow, color: colors.brown }],
	info: [base, { backgroundColor: colors.purple }],
});
```
