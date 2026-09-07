export const SITE = {
	title: "F. Knüssel",
	url: "https://fedknu.com",
	language: "en",
	description: "Personal blog about frontend web development and some other thoughts.",
	author: {
		name: "F. Knüssel",
		email: "fed@duck.com",
		url: "https://fedknu.com/about"
	}
};

export const NAV = [
	{ key: "About", url: "/about/" },
	{ key: "Blog", url: "/" },
	{ key: "Uses", url: "/uses/" },
	{ key: "Now", url: "/now/" },
	{ key: "GitHub", url: "https://github.com/fed" },
	{ key: "Feed", url: "/feed.xml" }
];

export const TAGS = [
	{
		id: "frp",
		title: "Functional reactive programming",
		description: "Functional reactive programming with Bacon.js and RxJS."
	},
	{
		id: "javascript",
		title: "JavaScript",
		description: "Modern JavaScript features, patterns, and best practices."
	},
	{
		id: "css",
		title: "CSS",
		description: "Styling techniques, layout methods, and CSS architecture."
	},
	{
		id: "react",
		title: "The React ecosystem",
		description: "Thoughts about the React ecosystem, mostly on building declarative UIs and handling state."
	},
	{
		id: "elm",
		title: "Elm",
		description: "Functional programming for the web with Elm."
	},
	{
		id: "testing",
		title: "Automated testing",
		description:
			"Some notes on writing automated unit, integration, end-to-end, visual regression and contract tests."
	},
	{
		id: "accessibility",
		title: "Accessibility",
		description: "Building inclusive web experiences for all users."
	},
	{
		id: "web-platform",
		title: "DOM & Web APIs",
		description: "Working with the DOM, browser APIs, and web platform features."
	},
	{
		id: "maths",
		title: "Maths",
		description:
			"Exploring mathematics from an engineer's perspective, with a focus on rigorous, proof-based thinking."
	},
	{
		id: "software-engineering",
		title: "Software engineering",
		description: "Software design principles, architecture, and engineering practices."
	},
	{
		id: "knowledge-modelling",
		title: "Knowledge modelling",
		description: "Representing and structuring knowledge and domain concepts."
	},
	{
		id: "tools",
		title: "Tools",
		description: "Development tools, workflows, and productivity tips."
	},
	{
		id: "general",
		title: "General",
		description: "Everything else"
	}
];

export const tagTitle = (id) => TAGS.find((tag) => tag.id === id)?.title ?? id;

export const readableDate = (date, options = { day: "2-digit", month: "long", year: "numeric" }) =>
	date.toLocaleDateString("en-GB", { timeZone: "UTC", ...options });

export const htmlDateString = (date) => date.toISOString().slice(0, 10);
