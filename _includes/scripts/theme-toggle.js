(function() {
	const toggle = document.getElementById('theme-toggle');
	const darkIcon = document.getElementById('theme-toggle-dark-icon');
	const lightIcon = document.getElementById('theme-toggle-light-icon');

	function updateIcons(theme) {
		if (theme === 'dark') {
			darkIcon.style.display = 'none';
			lightIcon.style.display = 'inline';
		} else {
			darkIcon.style.display = 'inline';
			lightIcon.style.display = 'none';
		}
	}

	// Initialize icons based on current color-scheme
	const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('color-scheme').trim() ||
						 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	
	// Re-verify from localStorage or style if set in head
	const appliedTheme = document.documentElement.style.getPropertyValue('color-scheme') || currentTheme;
	updateIcons(appliedTheme);

	toggle.addEventListener('click', () => {
		const isDark = document.documentElement.style.getPropertyValue('color-scheme') === 'dark';
		const newTheme = isDark ? 'light' : 'dark';
		
		document.documentElement.style.setProperty('color-scheme', newTheme);
		localStorage.setItem('theme', newTheme);
		updateIcons(newTheme);
	});
})();
