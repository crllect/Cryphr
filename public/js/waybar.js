// Initialize search history and ID counter from local storage or set defaults
let historyArray = JSON.parse(localStorage.getItem('historyArray')) || [];
let nextHistoryItemId =
	JSON.parse(localStorage.getItem('nextHistoryItemId')) || 0;

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Get references to the URL input field and search button
	var urlInput = document.getElementById('urlInput');
	var searchButton = document.getElementById('searchButton');

	// Function to update the search button's color based on the URL input field
	function updateButtonColor() {
		if (urlInput.value.trim() !== '') {
			searchButton.style.color = '#ffffff'; // White color for valid input
		} else {
			searchButton.style.color = '#7C7777'; // Gray color for empty input
		}
	}

	// Add event listeners for input and blur events on the URL input field
	urlInput.addEventListener('input', updateButtonColor);
	urlInput.addEventListener('blur', function () {
		if (urlInput.value.trim() === '') {
			searchButton.style.color = '#7C7777'; // Reset to gray if input is empty after blurring
		}
	});

	// Event listener for messages sent from other windows (e.g., history search)
	window.addEventListener('message', function (event) {
		if (event.data.type && event.data.type === 'historySearch') {
			performSearch(event.data.query); // Perform search with the received query
		}
	});
});

// Event listener for changes in local storage (specifically for UVEnabled)
window.addEventListener('storage', function (event) {
	if (event.key === 'UVEnabled') {
		let newValue = JSON.parse(event.newValue) || false;
		UVEnabled = newValue; // Update the UVEnabled flag
	}
});

// Function to perform a search based on the provided query
function performSearch(query) {
	let urlInput = document.getElementById('urlInput');
	urlInput.value = query; // Set the input field value to the query
	document.getElementById('searchButton').click(); // Trigger the search button click
}

// Flag to indicate if Universal View is enabled, initialized from local storage
let UVEnabled = JSON.parse(localStorage.getItem('UVEnabled')) || false;

// Event listener for Enter key press in the URL input field
document
	.getElementById('urlInput')
	.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault(); // Prevent default form submission behavior
			document.getElementById('searchButton').click(); // Trigger the search button click
		}
	});

// Function to add a new search query to the search history
function addToSearchHistory(query) {
	// Get the current date and time in different formats
	let currentDate = new Date();
	let dateStamp = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; // MM/DD/YYYY format
	let timeStamp24 = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`; // 24-hour format (HH:MM)
	let hours = currentDate.getHours();
	let hours12 = hours % 12 || 12;
	let ampm = hours >= 12 ? 'PM' : 'AM';
	let timeStamp12 = `${hours12.toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')} ${ampm}`; // 12-hour format (HH:MM AM/PM)

	// Create a new history item object with the query and timestamps
	let newHistoryItem = {
		id: nextHistoryItemId,
		query: query,
		dateStamp: dateStamp,
		timeStamp24: timeStamp24,
		timeStamp12: timeStamp12
	};

	// Add the new item to the history array
	historyArray.push(newHistoryItem);
	// Update the history array in local storage
	localStorage.setItem('historyArray', JSON.stringify(historyArray));

	// Increment the next history item ID
	nextHistoryItemId++;
	// Update the next ID in local storage
	localStorage.setItem(
		'nextHistoryItemId',
		JSON.stringify(nextHistoryItemId)
	);
}

// Flag to track if the settings window is open
let settingsOpen = false;

// Function to close the settings window
function closeSettings() {
	if (settingsOpen) {
		settingsOpen = false;
		document.getElementById('mainWindow').src = 'greeter.html'; // Switch back to the greeter page
	}
}

// Set the initial source of the main window to the greeter page
document.getElementById('mainWindow').src = 'greeter.html';

// Event listener for the settings button
document.getElementById('settingsButton').onclick = function (event) {
	event.preventDefault(); // Prevent default button behavior

	let mainWindow = document.getElementById('mainWindow'); // Get the main window element

	settingsOpen = !settingsOpen; // Toggle the settingsOpen flag

	// Set the source of the main window based on whether settings are open or closed
	mainWindow.src = settingsOpen ? 'settings.html' : 'greeter.html';
};

// Event listener for the search button
document.getElementById('searchButton').onclick = function (event) {
	event.preventDefault(); // Prevent default button behavior

	closeSettings(); // Close the settings window if it's open

	let url = document.getElementById('urlInput').value; // Get the URL from the input field

	if (url.trim() !== '') {
		addToSearchHistory(url.trim()); // Add the URL to the search history if it's not empty
	}

	// Get references to the iframe elements and loading iframe
	let iframeWindow = document.getElementById('iframeWindow');
	let mainWindow = document.querySelectorAll('.mainWindow');
	let loadingIframe = document.getElementById('loadingIframe');

	// Handle different scenarios based on the URL
	if (url.trim() === '') {
		// If URL is empty:
		if (settingsOpen) {
			// If settings are open, switch back to the greeter page
			let mainWindow = document.getElementById('mainWindow');
			mainWindow.src = 'greeter.html';
		}
		// If the full menu is open, remove the menu open classes from the iframe
		if (
			document
				.getElementById('fullMenu')
				.classList.contains('menuOpen-fullMenu')
		) {
			iframeWindow.classList.remove('menuOpen-iframeWindowOpen');
			iframeWindow.classList.remove('iframeWindowOpen');
		} else {
			iframeWindow.classList.remove('iframeWindowOpen');
		}
		// Show the main window and hide the iframe
		mainWindow.forEach(element => element.classList.remove('hidden'));
		setTimeout(function () {
			iframeWindow.classList.add('hidden');
		}, 850);
		setTimeout(function () {
			mainWindow.forEach(element =>
				element.classList.remove('mainWindowClose')
			);
		}, 450);
	} else {
		// If URL is not empty:
		if (settingsOpen) {
			// Switch back to the greeter page if settings are open
			let mainWindow = document.getElementById('mainWindow');
			mainWindow.src = 'greeter.html';
		}
		// Show the iframe and hide the main window
		iframeWindow.classList.remove('hidden');
		iframeWindow.classList.remove('menuOpen-iframeWindowOpen');
		iframeWindow.classList.remove('iframeWindowOpen');
		mainWindow.forEach(element => element.classList.add('mainWindowClose'));
		iframeWindow.classList.remove('hidden');
		setTimeout(function () {
			mainWindow.forEach(element => element.classList.add('hidden'));
		}, 850);
		setTimeout(function () {
			// Apply the appropriate menu open classes for the full menu
			if (
				document
					.getElementById('fullMenu')
					.classList.contains('menuOpen-fullMenu')
			) {
				iframeWindow.classList.add('menuOpen-iframeWindowOpen');
			} else {
				iframeWindow.classList.add('iframeWindowOpen');
			}
		}, 450);

		// Get the preferred search engine from local storage
		let preferredSearchEngine = localStorage.getItem(
			'preferredSearchEngine'
		);
		// Default search engine URL if none is set
		let searchUrl =
			preferredSearchEngine || 'https://www.bing.com/search?q=';

		// Handle URLs that are likely search queries
		if (
			!url.includes('.') ||
			url.split('.').slice(1).toString().includes(' ')
		) {
			url = searchUrl + encodeURIComponent(url);
		} else {
			// Add https protocol if missing
			if (!url.startsWith('http://') && !url.startsWith('https://')) {
				url = 'https://' + url;
			}
		}

		// Set the iframe's source based on whether Universal View is enabled
		if (!UVEnabled) {
			iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
		} else {
			iframeWindow.src =
				__dynamic$config.prefix +
				'route?url=' +
				encodeURIComponent(url);
		}
	}
};

// Event listener for the reload button
document.getElementById('reloadButton').onclick = function (event) {
	// Show the loading iframe
	let loadingIframe = document.getElementById('loadingIframe');
	loadingIframe.classList.remove('hidden');
	// Reload the iframe's content
	document.getElementById('iframeWindow').contentWindow.location.reload(true);
	// Hide the loading iframe after 2 seconds
	setTimeout(function () {
		loadingIframe.classList.add('hidden');
	}, 2000);
};

// Event listener for the settings button (this one handles opening the settings window)
document.getElementById('settingsButton').onclick = function (event) {
	event.preventDefault(); // Prevent default button behavior

	let urlInput = document.getElementById('urlInput'); // Get the URL input field
	let mainWindow = document.getElementById('mainWindow'); // Get the main window element
	let iframeWindow = document.getElementById('iframeWindow'); // Get the iframe element

	// Check if the iframe is currently visible
	if (!iframeWindow.classList.contains('hidden')) {
		// If iframe is visible:
		urlInput.value = ''; // Clear the URL input field
		performSearch(''); // Perform a search with an empty query

		// Check if settings are open and open them if they are not
		if (!settingsOpen) {
			mainWindow.src = 'settings.html';
		}
		settingsOpen = true; // Set the settingsOpen flag to true
	} else {
		// If iframe is not visible:
		// Check if settings are open and toggle their state
		if (settingsOpen) {
			mainWindow.src = 'greeter.html'; // Switch back to the greeter page
			settingsOpen = false; // Set the settingsOpen flag to false
		} else {
			mainWindow.src = 'settings.html'; // Switch to the settings page
			settingsOpen = true; // Set the settingsOpen flag to true
		}
	}
};

// Log a message to the console in case of unexpected errors
console.log(
	'Yea, I dont know if something I did broke so horribly that you needed to open the dev console to fix it. If that is the case, you should probably tell me about it'
);
