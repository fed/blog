import { getCollection } from "astro:content";
import { SITE, htmlDateString } from "../consts.js";

const PAGES = ["/", "/about/", "/uses/", "/now/"];

export async function GET() {
	const posts = await getCollection("blog", ({ data }) => !data.draft);

	const entries = [
		...PAGES.map((path) => ({ loc: new URL(path, SITE.url).href })),
		...posts.map((post) => ({
			loc: new URL(`/blog/${post.id}/`, SITE.url).href,
			lastmod: htmlDateString(post.data.date)
		}))
	];

	const body = `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		({ loc, lastmod }) =>
			`\t<url>\n\t\t<loc>${loc}</loc>${lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : ""}\n\t</url>`
	)
	.join("\n")}
</urlset>
`;

	return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
