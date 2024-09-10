function applyPreset(preset) {
	// Fetches the CSS file for the given preset from the 'css/presets' directory.
	fetch(`css/presets/${preset}.css`)
		.then(response => {
			// Checks if the network response is successful.
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// Returns the response as text.
			return response.text();
		})
		.then(css => {
			// Applies the custom CSS to the page.
			applyCustomCSS(css);
			// Stores the custom CSS in local storage.
			localStorage.setItem('customCSS', css);
		})
		.catch(error => {
			// Logs any errors encountered during the fetch operation.
			console.error(
				'There has been a problem with your fetch operation:',
				error
			);
		});
}

// Adds an event listener to the 'nebulaPreset' button.
document.getElementById('nebulaPreset').addEventListener('click', function () {
	// Applies the 'nebulaPreset' when the button is clicked.
	applyPreset('nebulaPreset');
});

// Adds an event listener to the 'transparentPreset' button.
document
	.getElementById('transparentPreset')
	.addEventListener('click', function () {
		// Applies the 'transparentPreset' when the button is clicked.
		applyPreset('transparentPreset');
	});

// Adds an event listener to the 'debugPreset' button.
document.getElementById('debugPreset').addEventListener('click', function () {
	// Applies the 'debugPreset' when the button is clicked.
	applyPreset('debugPreset');
});
