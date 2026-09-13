(function () {
	const toggle = document.getElementById("theme-toggle");

	if (!toggle) {
		return;
	}

	toggle.addEventListener("click", () => {
		const isDark = document.documentElement.style.getPropertyValue("color-scheme") === "dark";
		const newTheme = isDark ? "light" : "dark";

		document.documentElement.style.setProperty("color-scheme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
		try {
			localStorage.setItem("theme", newTheme);
		} catch (e) {}

		toggle.setAttribute("aria-checked", newTheme === "dark");
	});
})();
