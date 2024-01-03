document
    .getElementById("uploadButton")
    .addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const contents = e.target.result;
            localStorage.setItem("customCSS", contents);
            applyCustomCSS(contents);
        };

        reader.readAsText(file);

        e.target.value = "";
    });

function applyCustomCSS(css) {
    let styleSheet = document.getElementById("custom-css-style");
    if (!styleSheet) {
        styleSheet = document.createElement("style");
        styleSheet.id = "custom-css-style";
        document.head.appendChild(styleSheet);
    }
    styleSheet.textContent = css;
}

window.addEventListener("load", function () {
    const customCSS = localStorage.getItem("customCSS");
    if (customCSS) {
        applyCustomCSS(customCSS);
    }
});

document.getElementById("clearButton").addEventListener("click", function () {
    localStorage.removeItem("customCSS");
    applyCustomCSS("");
});

document.getElementById('cssTemplate').addEventListener('click', function() { // Again, more chatgpt, ion care tho, hella usefull
    const cssCode = this.value;
    navigator.clipboard.writeText(cssCode)
        .then(() => {
            alert('CSS code copied to clipboard!');
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });
});
