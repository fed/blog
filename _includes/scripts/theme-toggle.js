(function () {
	const toggle = document.getElementById("theme-toggle");
	const { readSavedTheme, saveTheme, applyTheme } = window.siteTheme;
	let hasChosenTheme = readSavedTheme() !== null;

	function updateTheme(theme) {
		applyTheme(theme);
		toggle.setAttribute("aria-checked", String(theme === "dark"));
	}

	updateTheme(document.documentElement.getAttribute("data-theme"));

	toggle.addEventListener("click", () => {
		const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
		updateTheme(newTheme);
		saveTheme(newTheme);
		hasChosenTheme = true;
	});

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
		if (!hasChosenTheme) {
			updateTheme(event.matches ? "dark" : "light");
		}
	});
})();
