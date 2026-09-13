(function () {
	const menu = document.querySelector(".layout-header__menu");

	if (!menu) {
		return;
	}

	const mobileQuery = window.matchMedia("(max-width: 767px)");

	function syncOpenState(matchesMobile) {
		menu.open = !matchesMobile;
	}

	syncOpenState(mobileQuery.matches);
	mobileQuery.addEventListener("change", (event) => syncOpenState(event.matches));
})();
