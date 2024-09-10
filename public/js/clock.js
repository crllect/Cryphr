// Initialize toggledClock state from localStorage, defaulting to false if not present
let toggledClock = JSON.parse(localStorage.getItem('toggledClock')) || false;

// Event listener for the 'time' element click
document.getElementById('time').addEventListener('click', function () {
	// Toggle the clock state
	toggledClock = !toggledClock;
	// Save the updated state to localStorage
	localStorage.setItem('toggledClock', toggledClock);
	// Update the clock display
	updateClock();

	// Send a message to the 'fullMenu' iframe to notify it of the clock toggle
	const historyIframe = document.getElementById('fullMenu').contentWindow;
	historyIframe.postMessage(
		{ type: 'toggleClock', toggledClock: toggledClock },
		'*'
	);
});

// Function to update the clock display
function updateClock() {
	// Get the current time
	const now = new Date();
	let hours = now.getHours();
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	// Format hours based on toggledClock state
	if (toggledClock) {
		hours = hours.toString().padStart(2, '0');
	} else {
		if (hours > 12) {
			hours -= 12;
		}
		if (hours === 0) {
			hours = 12;
		}
		hours = hours.toString();
	}

	// Construct the time string
	const timeString = `${hours}:${minutes}:${seconds}`;
	// Update the 'time' element's text content
	document.getElementById('time').textContent = timeString;
	// Dispatch a custom event to notify other components of the clock update
	document.dispatchEvent(
		new CustomEvent('clockUpdated', { detail: { toggledClock } })
	);
}

// Function to update timestamps in the history
function updateHistoryTimestamps() {
	// Select all elements with the 'timestamp' class
	const historyItems = document.querySelectorAll('.timestamp');
	// Iterate over each history item
	historyItems.forEach(function (item) {
		// Get the timestamp from the element's data attribute
		const timestamp = new Date(item.getAttribute('data-timestamp'));
		// Format the timestamp and update the element's text content
		item.textContent = formatTimestamp(timestamp);
	});
}

// Function to format a timestamp based on toggledClock state
function formatTimestamp(date) {
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, '0');
	if (toggledClock) {
		hours = hours.toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	} else {
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		return `${hours}:${minutes} ${ampm}`;
	}
}

// Initialize the clock display
updateClock();
// Update the clock display every second
setInterval(updateClock, 1000);
