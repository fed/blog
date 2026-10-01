import path from "node:path";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItContainer from "markdown-it-container";
import markdownItKatexPkg from "@vscode/markdown-it-katex";
import katex from "katex";
import CleanCSS from "clean-css";
import navigationPlugin from "@11ty/eleventy-navigation";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";
import htmlmin from "html-minifier-terser";
import * as pagefind from "pagefind";
import contentRulesPlugin from "./_config/content-rules.js";
import filtersPlugin from "./_config/filters.js";
import metadata from "./_data/metadata.js";

// @vscode/markdown-it-katex is CommonJS, its default export lands under `.default` when imported from ESM
const markdownItKatex = markdownItKatexPkg.default;

export default function (eleventyConfig) {
	// Copy the entire assets folder
	eleventyConfig.addPassthroughCopy("assets");

	// KaTeX web fonts, referenced by _includes/styles/katex.css
	eleventyConfig.addPassthroughCopy({ "node_modules/katex/dist/fonts/*.woff2": "assets/fonts/katex" });

	const md = markdownIt({ html: true })
		// Render LaTeX ($inline$ and $$block$$) to static HTML/CSS at build time.
		// The `katex` option pins the plugin to our own katex package (0.18.x) rather than the older 0.16.x
		// it bundles itself, since _includes/styles/katex.css is copied from our version and the two use
		// different CSS class names (0.18 prefixes them with `katex-`, 0.16 doesn't).
		.use(markdownItKatex, { katex })
		// Add a clickable "#" anchor link after every heading, pointing at its own id
		.use(markdownItAnchor, {
			level: [2, 3, 4, 5, 6],
			slugify: eleventyConfig.getFilter("slugify"),
			permalink: markdownItAnchor.permalink.linkAfterHeader({
				style: "visually-hidden",
				assistiveText: (title) => `Permalink to “${title}”`,
				visuallyHiddenClass: "common-visually-hidden",
				wrapper: ['<div class="heading-wrapper">', "</div>"],
				renderAttrs: () => ({ "data-pagefind-ignore": "" })
			})
		})
		.use(contentRulesPlugin);

	for (const type of ["note", "tip", "info", "warning", "danger"]) {
		const openingPattern = new RegExp(`^${type}(?:\\[(.*)\\])?$`);
		md.use(markdownItContainer, type, {
			validate: (params) => openingPattern.test(params.trim()),
			render: (tokens, idx) => {
				if (tokens[idx].nesting !== 1) return "</div>\n";
				const [, customTitle] = tokens[idx].info.trim().match(openingPattern);
				const title = md.utils.escapeHtml(customTitle ?? type[0].toUpperCase() + type.slice(1));
				return `<div class="admonition admonition--${type}">\n<p class="admonition__title">${title}</p>\n`;
			}
		});
	}

	eleventyConfig.setLibrary("md", md);

	// Collect CSS from {% css %} blocks and minify it, for output via {% getBundle "css" %}
	eleventyConfig.addBundle("css", {
		transforms: [(code) => new CleanCSS().minify(code).styles]
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

	// RSS feed plugin
	eleventyConfig.addPlugin(feedPlugin, {
		collection: {
			name: "posts" // iterate over `collections.posts`
		},
		metadata: {
			language: metadata.language,
			title: metadata.title,
			subtitle: metadata.description,
			base: metadata.url,
			author: metadata.author
		},
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 6
			}
		}
	});

	// Build the Pagefind search index from the generated site, into _site/pagefind
	eleventyConfig.on("eleventy.after", async ({ directories }) => {
		const { index } = await pagefind.createIndex();
		await index.addDirectory({ path: directories.output });
		await index.writeFiles({ outputPath: path.join(directories.output, "pagefind") });
		await pagefind.close();
	});

	// Image plugin
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "auto"],
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async"
			}
		}
	});

	// Navigation plugin
	eleventyConfig.addPlugin(navigationPlugin);

	// Syntax highlighting plugin
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
