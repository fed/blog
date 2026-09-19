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

	// On mobile the row scrolls, so make sure the restored chip isn't off-screen
	filters.querySelector('[aria-pressed="true"]').scrollIntoView({ block: "nearest", inline: "nearest" });

	// Fade out an edge while there's more to scroll to on that side
	function updateFade() {
		const hasMoreAtStart = filters.scrollLeft > 1;
		const hasMoreAtEnd = filters.scrollLeft + filters.clientWidth < filters.scrollWidth - 1;
		filters.classList.toggle("archive__filters--fade-start", hasMoreAtStart);
		filters.classList.toggle("archive__filters--fade-end", hasMoreAtEnd);
	}

	updateFade();
	filters.addEventListener("scroll", updateFade, { passive: true });
	window.addEventListener("resize", updateFade);

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
