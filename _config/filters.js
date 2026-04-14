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
}
