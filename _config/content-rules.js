const RULES = [
	{
		message: "has a level 1 heading, use ## instead since the layout renders the <h1> from the front matter title",
		isBroken: (token) => token.type === "heading_open" && token.tag === "h1"
	},
	{
		message: "has an image without alt text",
		isBroken: (token) =>
			(token.type === "image" && token.content.trim() === "") || (isHtml(token) && /<img(?![^>]*\salt=)/i.test(token.content))
	},
	{
		message: "has an iframe without a title",
		isBroken: (token) => isHtml(token) && /<iframe(?![^>]*\stitle=)/i.test(token.content)
	}
];

function isHtml(token) {
	return token.type === "html_block" || token.type === "html_inline";
}

export default function (md) {
	md.core.ruler.push("content_rules", (state) => {
		for (const block of state.tokens) {
			for (const token of [block, ...(block.children ?? [])]) {
				const rule = RULES.find(({ isBroken }) => isBroken(token));

				if (rule) {
					throw new Error(`${state.env.page.inputPath}:${block.map[0] + 1} ${rule.message}`);
				}
			}
		}
	});
}
