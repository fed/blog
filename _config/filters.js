import { DateTime } from "luxon";
import TAGS from "../_data/tags.js";

export default function (eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		// return dateObj.toISOString();
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
	});

	eleventyConfig.addFilter("readableTags", (tags) =>
		tags
			.filter((id) => id !== "posts")
			.map((id) => TAGS.find((tag) => tag.id === id)?.title)
			.filter(Boolean)
	);

	// Tags used by at least one of the given posts, in the order they're declared in _data/tags.js
	eleventyConfig.addFilter("usedTags", (posts) =>
		TAGS.map((tag) => ({
			...tag,
			count: posts.filter((post) => post.data.tags.includes(tag.id)).length
		})).filter((tag) => tag.count > 0)
	);
}
