document.getElementById('nebulaPreset').addEventListener('click', function() {
    fetch('css/presets/nebulaPreset.css')
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
            console.error('There has been a problem with your fetch operation:', error);
        });
});
