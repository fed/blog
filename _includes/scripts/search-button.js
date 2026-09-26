(function () {
	const button = document.getElementById("search-button");
	const modal = document.querySelector("pagefind-modal");
	const fileLoads = new Map();

	function loadPagefind() {
		return Promise.all([
			loadFile("link", { rel: "stylesheet", href: "/pagefind/pagefind-component-ui.css" }, document.head),
			loadFile("script", { src: "/pagefind/pagefind-component-ui.js" }, document.body)
		]);
	}

	function loadFile(tagName, attributes, parent) {
		const url = attributes.href ?? attributes.src;

		if (!fileLoads.has(url)) {
			const element = Object.assign(document.createElement(tagName), attributes);
			const fileLoad = new Promise((resolve, reject) => {
				element.onload = resolve;
				element.onerror = () => {
					element.remove();
					fileLoads.delete(url);
					reject(new Error(`Could not load ${url}`));
				};
			});
			fileLoads.set(url, fileLoad);
			parent.append(element);
		}

		return fileLoads.get(url);
	}

	function preloadPagefind() {
		loadPagefind().catch(() => {});
	}

	function openSearch() {
		loadPagefind().then(() => modal.open());
	}

	// Pagefind search UI lazy loading:
	// Pagefind's UI (~46 KB gzipped) is only fetched once someone shows intent to search.
	// Hovering or focusing the button starts the download so it's usually ready by the time they click,
	// and clicking waits for it in case it isn't (e.g. on touch devices).
	button.addEventListener("pointerenter", preloadPagefind);
	button.addEventListener("focus", preloadPagefind);
	button.addEventListener("click", openSearch);
})();
