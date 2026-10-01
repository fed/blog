(function () {
	const menu = document.querySelector(".layout-header__menu");
	const toggle = menu.querySelector(".layout-header__menu-toggle");
	const mobileQuery = window.matchMedia("(max-width: 767px)");

	function syncOpenState(matchesMobile) {
		menu.open = !matchesMobile;
	}

	function syncMainInert() {
		document.getElementById("main")?.toggleAttribute("inert", menu.open && mobileQuery.matches);
	}

	syncOpenState(mobileQuery.matches);

	mobileQuery.addEventListener("change", (event) => {
		syncOpenState(event.matches);
		syncMainInert();
	});

	menu.addEventListener("toggle", syncMainInert);
	menu.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && menu.open && mobileQuery.matches) {
			menu.open = false;
			toggle.focus();
		}
	});
})();
