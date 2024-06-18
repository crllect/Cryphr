// Set emailElements to all elements with class 'email'
var emailElements = document.getElementsByClassName('email');

// Set emailBgElements to all elements with class 'emailPopupBg'
var emailBgElements = document.getElementsByClassName('emailPopupBg');

// Check if any email elements exist
if (emailElements.length > 0) {
	// Add a click event listener to the first email element
	emailElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the email popup, background, and main window elements
		document.getElementById('emailPopup').classList.toggle('hidden');
		document.getElementById('emailPopupBg').classList.toggle('hidden');
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}

// Check if any email background elements exist
if (emailBgElements.length > 0) {
	// Add a click event listener to the first email background element
	emailBgElements[0].addEventListener('click', function () {
		// Toggle the 'hidden' class on the email popup, background, and main window elements
		document.getElementById('emailPopup').classList.toggle('hidden');
		document.getElementById('emailPopupBg').classList.toggle('hidden');
		document.getElementById('mainWindow').classList.toggle('hoverable');
	});
}
