function applyPreset(preset) {
	fetch(`css/presets/${preset}.css`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then(css => {
			applyCustomCSS(css);
			localStorage.setItem('customCSS', css);
		})
		.catch(error => {
			console.error(
				'There has been a problem with your fetch operation:',
				error
			);
		});
}

document.getElementById('nebulaPreset').addEventListener('click', function () {
	applyPreset('nebulaPreset');
});

document
	.getElementById('transparentPreset')
	.addEventListener('click', function () {
		applyPreset('transparentPreset');
	});
document.getElementById('debugPreset').addEventListener('click', function () {
	applyPreset('debugPreset');
});
