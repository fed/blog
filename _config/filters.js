import { DateTime } from "luxon";
import TAGS from "../_data/tags.js";

export default function (eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
	});

	eleventyConfig.addFilter("readableTags", (tags) =>
		tags.reduce((accumulator, tagId) => {
			if (tagId === "posts") {
				return accumulator;
			}

			const tag = TAGS.find((tag) => tag.id === tagId);

			if (!tag || !tag.title) {
				return accumulator;
			}

			return tag.title;
		}, [])
	);
}
