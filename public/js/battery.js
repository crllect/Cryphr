function getBatteryIcon(level) {
	// This function maps battery level to an appropriate Font Awesome icon.
	if (level >= 85) return 'fa-solid fa-battery-full fa-2xl';
	if (level >= 70) return 'fa-solid fa-battery-three-quarters fa-2xl';
	if (level >= 40) return 'fa-solid fa-battery-half fa-2xl';
	if (level >= 20) return 'fa-solid fa-battery-quarter fa-2xl';
	return 'fa-solid fa-battery-empty fa-2xl';
}

function updateBatteryDisplay(batteryLevel, iconClass) {
	// This function updates the HTML element with ID 'battery' based on the provided battery level and icon class.
	const batteryElement = document.getElementById('battery');
	if (batteryElement) {
		const showing =
			batteryElement.getAttribute('data-showing') || 'percentage'; // Retrieve the current display mode.
		if (showing === 'icon') {
			batteryElement.innerHTML = `<span class="${iconClass} batteryIcon" style="transform: translateY(0.15vh);"></span>`; // Update with the icon.
		} else {
			batteryElement.innerHTML = batteryLevel + '%'; // Update with percentage.
		}
	}
}

function setupBatteryDisplay(battery) {
	// This function sets up the initial battery display and adds event listeners for changes.
	const updateDisplay = () => {
		const batteryLevel = Math.round(battery.level * 100); // Get and round battery level.
		const iconClass = getBatteryIcon(batteryLevel); // Get the icon class for the current level.
		updateBatteryDisplay(batteryLevel, iconClass); // Update the battery display.
	};

	updateDisplay(); // Update the display initially.

	battery.addEventListener('chargingchange', updateDisplay); // Listen for charging state changes.
	battery.addEventListener('levelchange', updateDisplay); // Listen for battery level changes.

	const batteryElement = document.getElementById('battery');
	if (batteryElement) {
		batteryElement.onclick = function () {
			// Toggle between percentage and icon display on click.
			const currentShowing =
				this.getAttribute('data-showing') || 'percentage';
			this.setAttribute(
				'data-showing',
				currentShowing === 'percentage' ? 'icon' : 'percentage'
			);
			updateDisplay(); // Update the display after toggling.
		};
	}
}

if ('getBattery' in navigator) {
	// Check if the browser supports the Battery API.
	navigator.getBattery().then(setupBatteryDisplay); // Get battery object and setup display.
} else {
	// Browser does not support Battery API, display an error.
	const batteryElement = document.getElementById('battery');
	if (batteryElement) {
		batteryElement.innerHTML =
			'<span class="fa-solid fa-triangle-exclamation"></span>';
	}
}
