import markdownIt from "markdown-it";
import markdownItKatexPkg from "@vscode/markdown-it-katex";
import katex from "katex";
import CleanCSS from "clean-css";
import navigationPlugin from "@11ty/eleventy-navigation";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";
import htmlmin from "html-minifier-terser";
import filtersPlugin from "./_config/filters.js";
import metadata from "./_data/metadata.js";

// @vscode/markdown-it-katex is CommonJS, its default export lands under `.default` when imported from ESM
const markdownItKatex = markdownItKatexPkg.default;

export default function (eleventyConfig) {
	// Copy the entire assets folder
	eleventyConfig.addPassthroughCopy("assets");

	// The toggle script is deferred rather than inlined, so it needs to be served as a static file
	eleventyConfig.addPassthroughCopy({ "_includes/scripts/theme-toggle.js": "assets/js/theme-toggle.js" });

	// KaTeX web fonts, referenced by _includes/styles/katex.css
	eleventyConfig.addPassthroughCopy({ "node_modules/katex/dist/fonts": "assets/fonts/katex" });

	// Render LaTeX ($inline$ and $$block$$) to static HTML/CSS at build time.
	// The `katex` option pins the plugin to our own katex package (0.18.x) rather than the older 0.16.x
	// it bundles itself, since _includes/styles/katex.css is copied from our version and the two use
	// different CSS class names (0.18 prefixes them with `katex-`, 0.16 doesn't).
	eleventyConfig.setLibrary("md", markdownIt({ html: true }).use(markdownItKatex, { katex }));

	// Minify and inline CSS
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// Minify HTML output
	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
		}

		// If not an HTML output, return content as-is
		return content;
	});

	// Use `draft: true` to mark any template as a draft.
	// Drafts are **only** included during --serve / --watch
	// and are excluded from full builds.
	eleventyConfig.addPreprocessor("drafts", "*", (data) => {
		if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	// Watch CSS files
	eleventyConfig.addWatchTarget("_includes/**/*.css");

	// RSS feed plugin
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 0 // no limit
		},
		metadata: {
			language: metadata.language,
			title: metadata.title,
			subtitle: metadata.description,
			base: metadata.url,
			author: metadata.author
		}
	});

	// Image plugin
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

	// Navigation plugin
	eleventyConfig.addPlugin(navigationPlugin);

	//  Syntax highlighting plugin
	eleventyConfig.addPlugin(syntaxHighlightPlugin);

	// Filters plugin
	eleventyConfig.addPlugin(filtersPlugin);

	return {
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data"
		}
	};
}
