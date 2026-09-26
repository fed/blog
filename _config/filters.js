import TAGS from "../_data/tags.js";

export default function (eleventyConfig) {
	// Options for Intl.DateTimeFormat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
	eleventyConfig.addFilter("readableDate", (dateObj, options) =>
		new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(dateObj)
	);

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return dateObj.toISOString().slice(0, 10);
	});

	eleventyConfig.addFilter("readableTags", (tags) =>
		tags.map((id) => TAGS.find((tag) => tag.id === id)?.title).filter(Boolean)
	);

	// Tags used by at least one of the given posts, in the order they're declared in _data/tags.js
	eleventyConfig.addFilter("usedTags", (posts) =>
		TAGS.map((tag) => ({
			...tag,
			count: posts.filter((post) => post.data.tags.includes(tag.id)).length
		})).filter((tag) => tag.count > 0)
	);
}
