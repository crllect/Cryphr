document.addEventListener('DOMContentLoaded', function () {
	// Initialize the history display when the DOM is fully loaded.
	updateHistoryDisplay();
	// Add the "Wipe History" button to the page.
	addWipeHistoryButton();
});

// Event listener for changes in local storage.
window.addEventListener('storage', function (event) {
	// Update the history display if the 'historyArray' or 'toggledClock' storage items are changed.
	if (event.key === 'historyArray' || event.key === 'toggledClock') {
		updateHistoryDisplay();
	}
});

// Function to update the history display on the page.
function updateHistoryDisplay() {
	// Retrieve the history array and toggled clock status from local storage, or initialize them as empty and false if they don't exist.
	let historyArray = JSON.parse(localStorage.getItem('historyArray')) || [];
	let toggledClock =
		JSON.parse(localStorage.getItem('toggledClock')) || false;
	let historyContainer = document.getElementById('historyContainer');

	// Clear the existing content of the history container.
	historyContainer.innerHTML = '';

	// Iterate through the history array in reverse order (most recent first).
	for (let i = historyArray.length - 1; i >= 0; i--) {
		// Get the current history item.
		let item = historyArray[i];
		// Create a div element to represent the history entry.
		let entryDiv = document.createElement('div');
		entryDiv.className = 'history-entry';

		// Create a div element for the search query.
		let queryDiv = document.createElement('div');
		queryDiv.textContent = `${item.query}`;
		queryDiv.className = 'history-query';
		// Add a click event listener to the query div to send a message to the parent window to perform a search with the stored query.
		queryDiv.onclick = function () {
			window.parent.postMessage(
				{ type: 'historySearch', query: item.query },
				'*'
			);
		};

		// Create divs for the date and time of the search.
		let dateDiv = document.createElement('div');
		dateDiv.textContent = `Date: ${item.dateStamp}`;
		dateDiv.className = 'history-date';

		let timeDiv = document.createElement('div');
		// Dynamically choose the appropriate time format based on the 'toggledClock' status.
		let timeText = toggledClock ? item.timeStamp24 : item.timeStamp12;
		timeDiv.textContent = `Time: ${timeText}`;
		timeDiv.className = 'history-time';

		// Append the query, date, and time divs to the entry div.
		entryDiv.appendChild(queryDiv);
		entryDiv.appendChild(dateDiv);
		entryDiv.appendChild(timeDiv);

		// Add the entry div to the history container.
		historyContainer.appendChild(entryDiv);
	}
}

// Function to add the "Wipe History" button to the page.
function addWipeHistoryButton() {
	// Create the button element.
	let wipeButton = document.createElement('button');
	wipeButton.textContent = 'Wipe History';
	wipeButton.className = 'history-wipe';
	// Add a click event listener to the button to trigger the `wipeHistory` function.
	wipeButton.onclick = wipeHistory;

	// Append the button to the document body.
	document.body.appendChild(wipeButton);
}

// Function to clear the search history.
function wipeHistory() {
	// Remove the 'historyArray' from local storage.
	localStorage.removeItem('historyArray');
	// Update the history display to reflect the cleared history.
	updateHistoryDisplay();

	// Reload the parent window.
	window.parent.location.reload();
}
