// This script handles the display of the "Credits" popup.
// When a user clicks on the "Credits" button, it toggles the visibility of the included elements and a background overlay.

var creditsElements = document.getElementsByClassName('credits');
// Get all elements with the class "credits" (likely the button that triggers the popup)
var creditsBgElements = document.getElementsByClassName('creditsPopupBg');
// Get all elements with the class "creditsPopupBg" (likely the background overlay)

// If there are any elements with the "credits" class:
if (creditsElements.length > 0) {
	// Add an event listener to the first "credits" element
	creditsElements[0].addEventListener('click', function () {
		// Toggle the "hidden" class on the popup and background overlay
		document.getElementById('creditsPopup').classList.toggle('hidden');
		document.getElementById('creditsPopupBg').classList.toggle('hidden');
		// Toggle the "hoverable" class on the main window, likely to indicate that the user cannot interact with it while the popup is open
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}

// If there are any elements with the "creditsPopupBg" class:
if (creditsBgElements.length > 0) {
	// Add an event listener to the first "creditsPopupBg" element
	creditsBgElements[0].addEventListener('click', function () {
		// Toggle the "hidden" class on the popup and background overlay
		document.getElementById('creditsPopup').classList.toggle('hidden');
		document.getElementById('creditsPopupBg').classList.toggle('hidden');
		// Toggle the "hoverable" class on the main window
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}
