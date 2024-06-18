// Event listener for file upload
document
	.getElementById('uploadButton')
	.addEventListener('change', function (e) {
		// Get the uploaded file
		const file = e.target.files[0];
		// Return if no file is selected
		if (!file) {
			return;
		}

		// Create a FileReader object
		const reader = new FileReader();
		// Set the onload event handler
		reader.onload = function (e) {
			// Get the file contents
			const contents = e.target.result;
			// Store the contents in localStorage
			localStorage.setItem('customCSS', contents);
			// Apply the custom CSS
			applyCustomCSS(contents);
		};

		// Read the file as text
		reader.readAsText(file);

		// Clear the file input value
		e.target.value = '';
	});

// Applies custom CSS to the document
function applyCustomCSS(css) {
	// Get the existing style sheet element
	let styleSheet = document.getElementById('custom-css-style');
	// Create a new style sheet element if it doesn't exist
	if (!styleSheet) {
		styleSheet = document.createElement('style');
		styleSheet.id = 'custom-css-style';
		document.head.appendChild(styleSheet);
	}
	// Set the style sheet content
	styleSheet.textContent = css;
}

// Apply any saved custom CSS on page load
window.addEventListener('load', function () {
	// Get the custom CSS from localStorage
	const customCSS = localStorage.getItem('customCSS');
	// Apply the custom CSS if it exists
	if (customCSS) {
		applyCustomCSS(customCSS);
	}
});

// Event listener for clearing custom CSS
document.getElementById('clearButton').addEventListener('click', function () {
	// Remove the custom CSS from localStorage
	localStorage.removeItem('customCSS');
	// Apply empty CSS
	applyCustomCSS('');
});

// Event listener for copying CSS template to clipboard
document
	.getElementById('cssTemplateCopyText')
	.addEventListener('click', function () {
		// Get the CSS code from the text area
		const cssCode = document.getElementById('cssTemplate').value;

		// Copy the CSS code to clipboard
		navigator.clipboard
			.writeText(cssCode)
			.then(() => {
				alert('CSS code copied to clipboard!');
			})
			.catch(err => {
				alert('Error in copying text: ', err);
			});
	});
