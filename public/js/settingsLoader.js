function applyCustomCSS(css) {
    let styleSheet = document.getElementById("custom-css-style");
    if (!styleSheet) {
        styleSheet = document.createElement("style");
        styleSheet.id = "custom-css-style";
        document.head.appendChild(styleSheet);
    }
    styleSheet.textContent = css;
}

function handleFileUpload(e) {
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
}

function clearCustomCSS() {
    localStorage.removeItem("customCSS");
    applyCustomCSS("");
}

window.addEventListener("storage", function (e) {
    if (e.key === "customCSS") {
        applyCustomCSS(e.newValue);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const customCSS = localStorage.getItem("customCSS");
    if (customCSS) {
        applyCustomCSS(customCSS);
    }
});

window.settingsLoader = {
    applyCustomCSS,
    handleFileUpload,
    clearCustomCSS,
};
