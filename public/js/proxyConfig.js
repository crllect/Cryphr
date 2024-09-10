function saveSearchEnginePreference() {
	// Get the selected search engine from the dropdown
	var selectedEngine = document.getElementById('searchEngineSelect').value;
	// Save the selected engine to local storage
	localStorage.setItem('preferredSearchEngine', selectedEngine);
	// TODO: Provide user feedback that the preference has been saved
}

// This section runs after the DOM has finished loading
document.addEventListener('DOMContentLoaded', function () {
	// Retrieve the saved search engine from local storage
	var savedEngine = localStorage.getItem('preferredSearchEngine');
	// If a saved engine exists, set the dropdown to the saved value
	if (savedEngine) {
		document.getElementById('searchEngineSelect').value = savedEngine;
	}
});

// This section also runs after the DOM has finished loading
document.addEventListener('DOMContentLoaded', function () {
	// Get the toggle button element
	const toggleButton = document.getElementById('toggleUVEnabled');

	// Add an event listener to the toggle button for click events
	toggleButton.addEventListener('click', function () {
		// Retrieve the current UVEnabled setting from local storage, defaulting to false if it doesn't exist
		let UVEnabled = JSON.parse(localStorage.getItem('UVEnabled')) || false;

		// Toggle the UVEnabled setting
		UVEnabled = !UVEnabled;

		// Update the button text based on the new UVEnabled setting
		toggleButton.textContent = UVEnabled ? 'UV: OFF' : 'UV: ON';

		// Save the updated UVEnabled setting to local storage
		localStorage.setItem('UVEnabled', JSON.stringify(UVEnabled));
	});

	// Get the initial UVEnabled setting from local storage
	let initialUVEnabled =
		JSON.parse(localStorage.getItem('UVEnabled')) || false;
	// Set the initial button text based on the initial UVEnabled setting
	toggleButton.textContent = initialUVEnabled ? 'UV: OFF' : 'UV: ON';
});
