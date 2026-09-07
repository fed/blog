import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/blog",
		// Keep the 11ty URLs: `a-post.md` and `a-post/index.md` both become `/blog/a-post/`.
		generateId: ({ entry }) => entry.replace(/\.md$/, "").replace(/\/index$/, "")
	}),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		description: z.string().nullish(),
		tags: z.string(),
		draft: z.boolean().optional()
	})
});

export const collections = { blog };
