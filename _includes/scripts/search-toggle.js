(function () {
	const toggle = document.getElementById("search-toggle");
	const modal = document.querySelector("pagefind-modal");

	if (!toggle || !modal) {
		return;
	}

	let pagefindLoaded;

	function loadPagefind() {
		pagefindLoaded ??= Promise.all([
			loadElement("link", { rel: "stylesheet", href: "/pagefind/pagefind-component-ui.css" }, document.head),
			loadElement("script", { src: "/pagefind/pagefind-component-ui.js" }, document.body)
		]);

		return pagefindLoaded;
	}

	function loadElement(tagName, attributes, parent) {
		return new Promise((resolve, reject) => {
			const element = Object.assign(document.createElement(tagName), attributes, {
				onload: resolve,
				onerror: reject
			});
			parent.append(element);
		});
	}

	// Pagefind search UI lazy loading:
	// Pagefind's UI (~46 KB gzipped) is only fetched once someone shows intent to search.
	// Hovering or focusing the button starts the download so it's usually ready by the time they click,
	// and clicking waits for it in case it isn't (e.g. on touch devices).
	toggle.addEventListener("pointerenter", loadPagefind);
	toggle.addEventListener("focus", loadPagefind);
	toggle.addEventListener("click", () => loadPagefind().then(() => modal.open()));
})();
