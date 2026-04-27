(function() {
	let savedTheme = null;
	try {
		savedTheme = localStorage.getItem('theme');
	} catch (e) {}

	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const theme = savedTheme || systemTheme;
	
	document.documentElement.style.setProperty('color-scheme', theme);
})();
