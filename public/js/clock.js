// Initialize toggledClock from localStorage, defaulting to false
let toggledClock = JSON.parse(localStorage.getItem('toggledClock')) || false;

// Add an event listener to the 'time' element
document.getElementById('time').addEventListener('click', function () {
	// Toggle the clock state
	toggledClock = !toggledClock;
	// Save the toggled state to localStorage
	localStorage.setItem('toggledClock', toggledClock); 
	// Update the clock display
	updateClock();

	// Send a message to the history iframe to update its timestamps
	const historyIframe = document.getElementById('fullMenu').contentWindow;
	historyIframe.postMessage(
		{ type: 'toggleClock', toggledClock: toggledClock },
		'*'
	);
});

// Update the clock display
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
	// Update the 'time' element content
	document.getElementById('time').textContent = timeString;
	// Dispatch a custom event 'clockUpdated' to signal the clock update
	document.dispatchEvent(
		new CustomEvent('clockUpdated', { detail: { toggledClock } })
	);
}

// Update timestamps in the history section
function updateHistoryTimestamps() {
	// Get all elements with class 'timestamp'
	const historyItems = document.querySelectorAll('.timestamp');
	// Iterate over each history item
	historyItems.forEach(function (item) {
		// Get the timestamp attribute value and parse it into a Date object
		const timestamp = new Date(item.getAttribute('data-timestamp'));
		// Format the timestamp using formatTimestamp function
		item.textContent = formatTimestamp(timestamp);
	});
}

// Format a timestamp according to toggledClock state
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

// Initial clock update
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);
