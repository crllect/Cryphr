document.querySelector('.menu').addEventListener('click', function () {
	// Toggle the 'menuOpen' class on the menu element
	this.classList.toggle('menuOpen');

	// Get class lists of various elements for easy manipulation
	var mainWindow = document.querySelector('.mainWindow').classList;
	var iframeWindow = document.querySelector('.iframeWindow').classList;
	var waybar = document.querySelector('.waybar').classList;
	var fullMenu = document.querySelector('.fullMenu').classList;
	var body = document.body.classList;

	// If the menu is open
	if (this.classList.contains('menuOpen')) {
		// Add 'menuOpen' related classes to elements for styling
		mainWindow.add('menuOpen-mainWindow');
		iframeWindow.add('menuOpen-iframeWindow');
		waybar.add('menuOpen-waybar');
		fullMenu.add('menuOpen-fullMenu');
		body.add('menuOpen-body');

		// If the iframeWindow is not hidden, add an additional class 
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

		// If the iframeWindow is not hidden, add 'iframeWindowOpen' class
		if (!iframeWindow.contains('hidden')) {
			iframeWindow.add('iframeWindowOpen');
		}
	}
});
