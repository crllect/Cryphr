document.querySelector('.menu').addEventListener('click', function () {
	// Toggle the 'menuOpen' class on the menu element.
	this.classList.toggle('menuOpen');

	// Get the class list of various elements for manipulation.
	var mainWindow = document.querySelector('.mainWindow').classList;
	var iframeWindow = document.querySelector('.iframeWindow').classList;
	var waybar = document.querySelector('.waybar').classList;
	var fullMenu = document.querySelector('.fullMenu').classList;
	var body = document.body.classList;

	// If the menu is open...
	if (this.classList.contains('menuOpen')) {
		// Add specific classes to various elements to handle the open menu state.
		mainWindow.add('menuOpen-mainWindow');
		iframeWindow.add('menuOpen-iframeWindow');
		waybar.add('menuOpen-waybar');
		fullMenu.add('menuOpen-fullMenu');
		body.add('menuOpen-body');

		// If the iframe is not hidden, add an additional class.
		if (!iframeWindow.contains('hidden')) {
			iframeWindow.add('menuOpen-iframeWindowOpen');
		}
	} else {

		// Remove 'menuOpen' related classes from elements
		mainWindow.remove('menuOpen-mainWindow');
		iframeWindow.remove('menuOpen-iframeWindow');
		iframeWindow.remove('menuOpen-iframeWindowOpen');
		waybar.remove('menuOpen-waybar');
		fullMenu.remove('menuOpen-fullMenu');
		body.remove('menuOpen-body');

		// If the iframe is not hidden, add a class to show it.
		if (!iframeWindow.contains('hidden')) {
			iframeWindow.add('iframeWindowOpen');
		}
	}
});
