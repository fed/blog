(function() {
	const savedTheme = localStorage.getItem('theme');
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const theme = savedTheme || systemTheme;
	
	document.documentElement.style.setProperty('color-scheme', theme);
})();
