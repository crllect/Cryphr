// Get all elements with the class 'email'
var emailElements = document.getElementsByClassName('email');
// Get all elements with the class 'emailPopupBg'
var emailBgElements = document.getElementsByClassName('emailPopupBg');

// If there are any elements with the class 'email'
if (emailElements.length > 0) {
	// Add an event listener to the first element with the class 'email'
	emailElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the elements with the id 'emailPopup', 'emailPopupBg', and 'mainWindow'
		document.getElementById('emailPopup').classList.toggle('hidden');
		document.getElementById('emailPopupBg').classList.toggle('hidden');
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}

// If there are any elements with the class 'emailPopupBg'
if (emailBgElements.length > 0) {
	// Add an event listener to the first element with the class 'emailPopupBg'
	emailBgElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the elements with the id 'emailPopup', 'emailPopupBg', and 'mainWindow'
		document.getElementById('emailPopup').classList.toggle('hidden');
		document.getElementById('emailPopupBg').classList.toggle('hidden');
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}
