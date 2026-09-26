(function () {
	function readSavedTheme() {
		try {
			return localStorage.getItem("theme");
		} catch {
			return null;
		}
	}

	function saveTheme(theme) {
		try {
			localStorage.setItem("theme", theme);
		} catch {}
	}

	function applyTheme(theme) {
		document.documentElement.style.setProperty("color-scheme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}

	window.siteTheme = { readSavedTheme, saveTheme, applyTheme };

	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	applyTheme(readSavedTheme() || systemTheme);
})();
