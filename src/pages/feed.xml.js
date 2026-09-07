import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../consts.js";

export async function GET(context) {
	const posts = await getCollection("blog", ({ data }) => !data.draft);
	posts.sort((a, b) => b.data.date - a.data.date);

	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description ?? "",
			pubDate: post.data.date,
			link: `/blog/${post.id}/`
		}))
	});
}
