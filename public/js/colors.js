// This code adds event listeners to elements on Crypher so that custom CSS can be added.

// Adds an event listener to the upload button.
document
	.getElementById('uploadButton')
	.addEventListener('change', function (e) {
		// Get the first file selected by the user.
		const file = e.target.files[0];
		// If no file is selected, return.
		if (!file) {
			return;
		}

		// Create a new FileReader object.
		const reader = new FileReader();
		// When the FileReader finishes reading the file, execute this function.
		reader.onload = function (e) {
			// Get the contents of the file.
			const contents = e.target.result;
			// Store the contents in local storage.
			localStorage.setItem('customCSS', contents);
			// Apply the custom CSS to the page.
			applyCustomCSS(contents);
		};

		// Read the file as text.
		reader.readAsText(file);

		// Clear the input field.
		e.target.value = '';
	});

// This function applies the provided CSS to the page.
function applyCustomCSS(css) {
	// Get the existing custom CSS style element.
	let styleSheet = document.getElementById('custom-css-style');
	// If the style element doesn't exist, create it.
	if (!styleSheet) {
		styleSheet = document.createElement('style');
		styleSheet.id = 'custom-css-style';
		document.head.appendChild(styleSheet);
	}
	// Set the content of the style element to the provided CSS.
	styleSheet.textContent = css;
}

// When the page loads, check if there is any custom CSS stored in local storage.
window.addEventListener('load', function () {
	const customCSS = localStorage.getItem('customCSS');
	// If there is custom CSS, apply it to the page.
	if (customCSS) {
		applyCustomCSS(customCSS);
	}
});

// Adds an event listener to the clear button.
document.getElementById('clearButton').addEventListener('click', function () {
	// Remove the custom CSS from local storage.
	localStorage.removeItem('customCSS');
	// Apply an empty string as CSS to clear the custom styles.
	applyCustomCSS('');
});

// Adds an event listener to the "copy to clipboard" button.
document
	.getElementById('cssTemplateCopyText')
	.addEventListener('click', function () {
		// Get the CSS code from the textarea.
		const cssCode = document.getElementById('cssTemplate').value;

		// Attempt to copy the code to the clipboard.
		navigator.clipboard
			.writeText(cssCode)
			.then(() => {
				// Alert the user that the code was copied.
				alert('CSS code copied to clipboard!');
			})
			.catch(err => {
				// Alert the user if there was an error copying the code.
				alert('Error in copying text: ', err);
			});
	});
