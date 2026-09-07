import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://fedknu.com",
	markdown: {
		// `defaultColor: false` makes Shiki emit `--shiki-light` / `--shiki-dark` custom
		// properties instead of hardcoded colours, so `light-dark()` in blog-post.css can
		// pick between them off the `color-scheme` the theme toggle sets.
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark"
			},
			defaultColor: false
		}
	}
});
