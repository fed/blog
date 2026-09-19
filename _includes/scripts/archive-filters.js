(function () {
	const filters = document.querySelector(".archive__filters");
	const buttons = [...filters.querySelectorAll(".archive__filter")];
	const items = document.querySelectorAll(".archive__list-item");

	function select(tag) {
		buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.tag === tag)));
		items.forEach((item) => {
			item.hidden = tag !== "" && !item.dataset.tags.split(" ").includes(tag);
		});
	}

	filters.hidden = false;

	// Restore the selection from ?tag=..., falling back to "All" for unknown tags
	const initial = new URLSearchParams(location.search).get("tag") || "";
	select(buttons.some((button) => button.dataset.tag === initial) ? initial : "");

	filters.addEventListener("click", (event) => {
		const selected = event.target.closest(".archive__filter");

		if (!selected) {
			return;
		}

		const tag = selected.dataset.tag;
		select(tag);
		history.replaceState(null, "", tag === "" ? location.pathname : `?tag=${encodeURIComponent(tag)}`);
	});
})();
