// Get all elements with the class 'credits'
var creditsElements = document.getElementsByClassName('credits');
// Get all elements with the class 'creditsPopupBg'
var creditsBgElements = document.getElementsByClassName('creditsPopupBg');

// If there are any elements with the class 'credits'
if (creditsElements.length > 0) {
	// Add an event listener to the first 'credits' element
	creditsElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the 'creditsPopup' element
		document.getElementById('creditsPopup').classList.toggle('hidden');
		// Toggle the 'hidden' class on the 'creditsPopupBg' element
		document.getElementById('creditsPopupBg').classList.toggle('hidden');
		// Toggle the 'hoverable' class on the 'mainWindow' element
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}

// If there are any elements with the class 'creditsPopupBg'
if (creditsBgElements.length > 0) {
	// Add an event listener to the first 'creditsPopupBg' element
	creditsBgElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the 'creditsPopup' element
		document.getElementById('creditsPopup').classList.toggle('hidden');
		// Toggle the 'hidden' class on the 'creditsPopupBg' element
		document.getElementById('creditsPopupBg').classList.toggle('hidden');
		// Toggle the 'hoverable' class on the 'mainWindow' element
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}
