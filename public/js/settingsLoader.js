function applyCustomCSS(css) {
	// Applies custom CSS to the document
	let styleSheet = document.getElementById('custom-css-style'); // Get the existing custom CSS style sheet
	if (!styleSheet) {
		// Create the style sheet if it doesn't exist
		styleSheet = document.createElement('style');
		styleSheet.id = 'custom-css-style';
		document.head.appendChild(styleSheet); // Append the style sheet to the head of the document
	}
	styleSheet.textContent = css; // Set the text content of the style sheet to the provided CSS
}

function handleFileUpload(e) {
	// Handles file upload for custom CSS
	const file = e.target.files[0]; // Get the first selected file
	if (!file) {
		// Return if no file is selected
		return;
	}

	const reader = new FileReader(); // Create a new file reader
	reader.onload = function (e) {
		// Define a function to execute when the file is loaded
		const contents = e.target.result; // Get the file contents
		localStorage.setItem('customCSS', contents); // Store the custom CSS in local storage
		applyCustomCSS(contents); // Apply the custom CSS to the document
	};

	reader.readAsText(file); // Read the file contents as text
}

function clearCustomCSS() {
	// Clears the custom CSS
	localStorage.removeItem('customCSS'); // Remove the custom CSS from local storage
	applyCustomCSS(''); // Apply empty CSS, effectively clearing any custom styles
}

window.addEventListener('storage', function (e) {
	// Listen for changes in local storage
	if (e.key === 'customCSS') {
		// Check if the change was to the 'customCSS' key
		applyCustomCSS(e.newValue); // Apply the new custom CSS to the document
	}
});

document.addEventListener('DOMContentLoaded', function () {
	// Listen for the document to be ready
	const customCSS = localStorage.getItem('customCSS'); // Get the custom CSS from local storage
	if (customCSS) {
		// Apply the custom CSS if it exists
		applyCustomCSS(customCSS);
	}
});

window.settingsLoader = {
	// Create an object to expose functions for external use
	applyCustomCSS, // Function to apply custom CSS
	handleFileUpload, // Function to handle custom CSS file upload
	clearCustomCSS // Function to clear the custom CSS
};

// Add fun ASCII logo to console :)
console.log(`
                       x .d88"  x .d88"                           :8
             .u    .    5888R    5888R                           .88
      .    .d88B :@8c   '888R    '888R        .u          .     :888ooo
 .udR88N  ="8888f8888r   888R     888R     ud8888.   .udR88N  -*8888888
<888'888k   4888>'88"    888R     888R   :888'8888. <888'888k   8888
9888 'Y"    4888> '      888R     888R   d888 '88%" 9888 'Y"    8888 
9888        4888>        888R     888R   8888.+"    9888        8888
9888       .d888L .+     888R     888R   8888L      9888       .8888Lu=
?8888u../  ^"8888*"     .888B .  .888B . '8888c. .+ ?8888u../  ^%888*
 "8888P'      "Y"       ^*888%   ^*888%   "88888%    "8888P'     'Y"
   "P'                    "%       "%       "YP'       "P'

https://github.com/crllect
https://discord.com/users/713488984596021291
`);
