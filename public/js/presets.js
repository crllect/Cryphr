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

document.getElementById('copperPreset').addEventListener('click', function() {
    fetch('css/presets/copperPreset.css')
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

document.getElementById('emeraldPreset').addEventListener('click', function() {
    fetch('css/presets/emeraldPreset.css')
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

document.getElementById('forestPreset').addEventListener('click', function() {
    fetch('css/presets/forestPreset.css')
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

document.getElementById('goldenPreset').addEventListener('click', function() {
    fetch('css/presets/goldenPreset.css')
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

document.getElementById('lavenderPreset').addEventListener('click', function() {
    fetch('css/presets/lavenderPreset.css')
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

document.getElementById('midnightPreset').addEventListener('click', function() {
    fetch('css/presets/midnightPreset.css')
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

document.getElementById('mintPreset').addEventListener('click', function() {
    fetch('css/presets/mintPreset.css')
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

document.getElementById('oceanPreset').addEventListener('click', function() {
    fetch('css/presets/oceanPreset.css')
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

document.getElementById('rosePreset').addEventListener('click', function() {
    fetch('css/presets/rosePreset.css')
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

document.getElementById('rusticPreset').addEventListener('click', function() {
    fetch('css/presets/rusticPreset.css')
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

document.getElementById('sandyPreset').addEventListener('click', function() {
    fetch('css/presets/sandyPreset.css')
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

document.getElementById('sapphirePreset').addEventListener('click', function() {
    fetch('css/presets/sapphirePreset.css')
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

document.getElementById('sunsetPreset').addEventListener('click', function() {
    fetch('css/presets/sunsetPreset.css')
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

document.getElementById('violetPreset').addEventListener('click', function() {
    fetch('css/presets/violetPreset.css')
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

document.getElementById('winterPreset').addEventListener('click', function() {
    fetch('css/presets/winterPreset.css')
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

document.getElementById('transparentPreset').addEventListener('click', function() {
    fetch('css/presets/transparentPreset.css')
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
document.getElementById('debugPreset').addEventListener('click', function() {
    fetch('css/presets/debugPreset.css')
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
