function updateSettings() { // I sadly used chatGPT to write this, as writing all of it by hand would have wasted so much time, holy shit.
    changeParentCssVariable('--bgCol', document.getElementById('bgColPicker').value);
    changeParentCssVariable('--windowCol', document.getElementById('windowCol').value);
    changeParentCssVariable('--windowBlur', document.getElementById('windowBlur').value + 'vh');
    changeParentCssVariable('--windowBrightness', document.getElementById('windowBrightness').value);
    changeParentCssVariable('--windowContrast', document.getElementById('windowContrast').value);
    changeParentCssVariable('--frontElementCol', document.getElementById('frontElementCol').value);
    changeParentCssVariable('--textCol', document.getElementById('textCol').value);
    changeParentCssVariable('--textColSec', document.getElementById('textColSec').value);
    changeParentCssVariable('--linkCol', document.getElementById('linkCol').value);
    changeParentCssVariable('--shadowCol', document.getElementById('shadowCol').value);
    changeParentCssVariable('--shadowRad', document.getElementById('shadowRad').value);
    changeParentCssVariable('--uniMargin', document.getElementById('uniMargin').value + 'vh');
    changeParentCssVariable('--waybarHeight', document.getElementById('waybarHeight').value + 'vh');
    changeParentCssVariable('--urlInputLength', document.getElementById('urlInputLength').value + 'vw');
    changeParentCssVariable('--botBarHeight', document.getElementById('botBarHeight').value + 'vh');
    changeParentCssVariable('--botBarFontSize', document.getElementById('botBarFontSize').value);
    changeParentCssVariable('--fullMenuSize', document.getElementById('fullMenuSize').value + 'vh');
    changeParentCssVariable('--borderRad', document.getElementById('borderRad').value + 'px');
    changeParentCssVariable('--borderThickness', document.getElementById('borderThickness').value + 'px');
    changeParentCssVariable('--borderCol', document.getElementById('borderCol').value);
    changeParentCssVariable('--transitionSpeed', document.getElementById('transitionSpeed').value + 's');
    changeParentCssVariable('--fastTransitionSpeed', document.getElementById('fastTransitionSpeed').value + 's');
    changeParentCssVariable('--menuButtonCol', document.getElementById('menuButtonCol').value);
    changeParentCssVariable('--activeTransition', document.getElementById('activeTransition').value + 's');
    changeParentCssVariable('--activeWindowCol', document.getElementById('activeWindowCol').value);
    changeParentCssVariable('--fullMenuOffset', document.getElementById('fullMenuOffset').value + 'px');
    changeParentCssVariable('--hoverConst', document.getElementById('hoverConst').value + 'vh');
    changeParentCssVariable('--hoverCoefficient', document.getElementById('hoverCoefficient').value);
    changeParentCssVariable('--hoverWindowBlur', document.getElementById('hoverWindowBlur').value + 'vw');
    changeParentCssVariable('--hoverWindowBrightness', document.getElementById('hoverWindowBrightness').value);
    changeParentCssVariable('--hoverWindowContrast', document.getElementById('hoverWindowContrast').value);
    changeParentCssVariable('--hoverBorderCol', document.getElementById('hoverBorderCol').value);
    changeParentCssVariable('--hoverWindowCol', document.getElementById('hoverWindowCol').value);
    changeParentCssVariable('--hoverBorderThickness', document.getElementById('hoverBorderThickness').value + 'px');
    changeParentCssVariable('--hoverBorderRad', document.getElementById('hoverBorderRad').value);
    changeParentCssVariable('--hoverBorderOpacity', document.getElementById('hoverBorderOpacity').value);
    changeParentCssVariable('--hoverShadowCol', document.getElementById('hoverShadowCol').value);
    changeParentCssVariable('--hoverShadowRad', document.getElementById('hoverShadowRad').value);
    changeParentCssVariable('--hoverFrontElementCol', document.getElementById('hoverFrontElementCol').value);
    changeParentCssVariable('--doParticles', document.getElementById('doParticles').value);
}

function changeParentCssVariable(variableName, value) {
    var message = { variable: variableName, value: value };
    window.parent.postMessage(message, "*");
    localStorage.setItem(variableName, value);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key.startsWith("--")) {
            document.documentElement.style.setProperty(key, value);
        }

        if (key === "--doParticles") {
            let selectElement = document.getElementById("doParticles");
            if (selectElement) {
                selectElement.value = value.trim();
            }
        }
    }
});

function resetSettings() {
    for (let i = localStorage.length; i >= 0; i--) {
        let key = localStorage.key(i);
        if (key && key.startsWith("--")) {
            localStorage.removeItem(key);
        }
        for (let i = localStorage.length; i >= 0; i--) {
            let key = localStorage.key(i);
            if (key && key.startsWith("--")) {
                localStorage.removeItem(key);
            }
        }
    }
    window.parent.location.reload();
}
