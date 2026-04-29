(function () {
	const toggle = document.getElementById('theme-toggle');
	const darkIcon = document.getElementById('theme-toggle-dark-icon');
	const lightIcon = document.getElementById('theme-toggle-light-icon');

	if (!toggle || !darkIcon || !lightIcon) {
		return;
	}

	function updateIcons(theme) {
		const isDark = theme === 'dark';
		if (isDark) {
			darkIcon.style.display = 'none';
			lightIcon.style.display = 'flex';
		} else {
			darkIcon.style.display = 'flex';
			lightIcon.style.display = 'none';
		}
		
		toggle.setAttribute('aria-pressed', isDark);
		toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
	}

	// Initialise icons based on current color scheme
	const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('color-scheme').trim() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	
	// Re verify from localStorage or style if set in head
	const appliedTheme = document.documentElement.style.getPropertyValue('color-scheme') || currentTheme;
	
	updateIcons(appliedTheme);

	toggle.addEventListener('click', () => {
		const isDark = document.documentElement.style.getPropertyValue('color-scheme') === 'dark';
		const newTheme = isDark ? 'light' : 'dark';
		
		document.documentElement.style.setProperty('color-scheme', newTheme);
		try {
			localStorage.setItem('theme', newTheme);
		} catch (e) {}
		updateIcons(newTheme);
	});
})();
