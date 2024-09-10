// This function redirects the user to the specified page.
function redirectTo(page) {
	window.location.href = page;
}

// This event listener waits for the DOM to be fully loaded.
document.addEventListener('DOMContentLoaded', function () {
	// This event listener is attached to the "setColorSettings" button.
	document
		.getElementById('setColorSettings')
		.addEventListener('click', function () {
			// Stores the current settings as "colorSettings" in local storage.
			localStorage.setItem('recentSettings', 'colorSettings');
			// Redirects the user to the colors.html page.
			redirectTo('colors.html');
		});

	// This event listener is attached to the "setProxySettings" button.
	document
		.getElementById('setProxySettings')
		.addEventListener('click', function () {
			// Stores the current settings as "proxySettings" in local storage.
			localStorage.setItem('recentSettings', 'proxySettings');
			// Redirects the user to the proxyConfig.html page.
			redirectTo('proxyConfig.html');
		});

	// This event listener is attached to the "setCloakingSettings" button.
	document
		.getElementById('setCloakingSettings')
		.addEventListener('click', function () {
			// Stores the current settings as "cloakSettings" in local storage.
			localStorage.setItem('recentSettings', 'cloakSettings');
			// Redirects the user to the cloaking.html page.
			redirectTo('cloaking.html');
		});

	// This event listener is attached to the "wipeAllSettings" button.
	document
		.getElementById('wipeAllSettings')
		.addEventListener('click', function () {
			// Clears all data from local storage.
			localStorage.clear();
			// Reloads the parent window.
			window.parent.location.reload();
		});
});
