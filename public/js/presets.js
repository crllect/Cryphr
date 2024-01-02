// presets.js

const presets = {
    "default": {
        "--bgCol": "url(https://w.wallhaven.cc/full/wy/wallhaven-wyp7ep.jpg)",

        /* Window Properties */
        "--windowCol": "#141414d1",
        "--windowBlur": "1vh",
        "--windowBrightness": "1",
        "--windowContrast": "1.1",
        "--frontElementCol": "#f1f1f114",
        "--textCol": "#fff",
        "--textColSec": "#fff9",
        "--linkCol": "#4b1c79",

        /* Shadow properties */
        "--shadowCol": "rgba(255, 255, 255, 0.02)",
        "--shadowRad": "0px 4px 4px",

        /* Margins */
        "--uniMargin": "1vh",
        "--waybarHeight": "10vh",
        "--urlInputLength": "43vw",
        "--botBarHeight": "4.5vh",
        "--botBarFontSize": "0.8",
        "--fullMenuSize": "25vh",

        /* Border */
        "--borderRad": "7px",
        "--borderThickness": "1.75px",
        "--borderCol": "#9c9c9c5b",

        /* Transitions */
        "--transitionSpeed": "0.4s",
        "--fastTransitionSpeed": "0.1s",

        "--activeWindowCol": "#25252ad1",

        /* Full Menu */
        "--fullMenuOffset": "10px",

        /* Hover Vars */
        "--hoverConst": "0vh",
        "--hoverCoefficient": "1",
        "--hoverWindowBlur": "0.7vw",
        "--hoverWindowBrightness": "1.2",
        "--hoverWindowContrast": "1.15",
        "--hoverBorderCol": "#a1a1ffe7",
        "--hoverWindowCol": "#141414d1",
        "--hoverBorderThickness": "1.5px",
        "--hoverBorderRad": "0.8",
        "--hoverBorderOpacity": "rgba(255, 255, 255, 0.744)",
        "--hoverFrontElementCol": "#f1f1f120",

        "--doParticles": "1",
    },
    "nebula": {
        "--bgCol": "#14121D",

        /* Window Properties */
        "--windowCol": "#14121D",
        "--windowBlur": "0vh",
        "--windowBrightness": "1",
        "--windowContrast": "1.1",
        "--frontElementCol": "#f1f1f114",
        "--textCol": "#fff",
        "--textColSec": "#fff9",
        "--linkCol": "#5a2491",

        /* Shadow properties */
        "--shadowCol": "rgba(255, 255, 255, 0.02)",
        "--shadowRad": "0px 4px 4px",

        /* Margins */
        "--uniMargin": "1vh",
        "--waybarHeight": "10vh",
        "--urlInputLength": "43vw",
        "--botBarHeight": "4.5vh",
        "--botBarFontSize": "0.8",
        "--fullMenuSize": "25vh",

        /* Border */
        "--borderRad": "7px",
        "--borderThickness": "1.75px",
        "--borderCol": "#ffffff10",

        /* Transitions */
        "--transitionSpeed": "0.4s",
        "--fastTransitionSpeed": "0.1s",

        "--activeWindowCol": "#1a1730",

        /* Full Menu */
        "--fullMenuOffset": "10px",

        /* Hover Vars */
        "--hoverConst": "0vh",
        "--hoverCoefficient": "1",
        "--hoverWindowBlur": "0.7vw",
        "--hoverWindowBrightness": "1.2",
        "--hoverWindowContrast": "1.15",
        "--hoverBorderCol": "#a1a1ffe7",
        "--hoverWindowCol": "#191725",
        "--hoverBorderThickness": "1.5px",
        "--hoverBorderRad": "0.8",
        "--hoverBorderOpacity": "rgba(255, 255, 255, 0.744)",
        "--hoverFrontElementCol": "#f1f1f120",

        "--doParticles": "0",
    }
};

function applyPreset(presetName) {
    if (presets[presetName]) {
        Object.keys(presets[presetName]).forEach(cssVariable => {
            const value = presets[presetName][cssVariable];

            // Update local storage
            localStorage.setItem(cssVariable, value);

            // Update the input field
            const inputElement = document.querySelector(`[data-css-variable="${cssVariable}"]`);
            if (inputElement) {
                inputElement.value = value;
            }

            // Update the parent document's CSS variable
            parent.document.documentElement.style.setProperty(cssVariable, value);
        });
    }
}
