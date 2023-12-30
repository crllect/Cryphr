document.addEventListener("DOMContentLoaded", function () {
    var urlInput = document.getElementById("urlInput");
    var searchButton = document.getElementById("searchButton");

    function updateButtonColor() {
        if (urlInput.value.trim() !== "") {
            searchButton.style.color = "#ffffff";
        } else {
            searchButton.style.color = "#7C7777";
        }
    }

    urlInput.addEventListener("input", updateButtonColor);

    urlInput.addEventListener("blur", function () {
        if (urlInput.value.trim() === "") {
            searchButton.style.color = "#7C7777";
        }
    });
});

let proxyEnabled = true;

document.getElementById("urlInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value;
    let iframeWindow = document.getElementById("iframeWindow");
    let mainWindow = document.querySelectorAll(".mainWindow");
    let loadingIframe = document.getElementById("loadingIframe");

    if (url.trim() === "") {
        if (document.getElementById("fullMenu").classList.contains("menuOpen-fullMenu")) {
            iframeWindow.classList.remove("menuOpen-iframeWindowOpen");
            iframeWindow.classList.remove("iframeWindowOpen");
        } else {
            iframeWindow.classList.remove("iframeWindowOpen");
        }
        mainWindow.forEach(element => element.classList.remove("hidden"));
        setTimeout(function() {
            iframeWindow.classList.add("hidden");
        }, 750);
        setTimeout(function() {
            mainWindow.forEach(element => element.classList.remove("mainWindowClose"))
        }, 250);
    } else {
        if (document.getElementById("mainWindow").classList.contains("menuOpen-mainWindow")) {
            iframeWindow.classList.remove("hidden");
            iframeWindow.classList.remove("menuOpen-iframeWindowOpen");
            iframeWindow.classList.remove("iframeWindowOpen");
        }
        mainWindow.forEach(element => element.classList.add("mainWindowClose"));
        iframeWindow.classList.remove("hidden");
        setTimeout(function() {
            mainWindow.forEach(element => element.classList.add("hidden"));
        }, 750);
        setTimeout(function() {
            if (document.getElementById("fullMenu").classList.contains("menuOpen-fullMenu")) {
                iframeWindow.classList.add("menuOpen-iframeWindowOpen");
            } else {
                iframeWindow.classList.add("iframeWindowOpen");
            }
        }, 250);

        loadingIframe.classList.remove("hidden"); // Show loading animation

        let preferredSearchEngine = localStorage.getItem("preferredSearchEngine");
        let searchUrl = preferredSearchEngine || "https://www.google.com/search?q=";

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        if (proxyEnabled) {
            iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        } else {
            iframeWindow.src = url;
        }

        setTimeout(function () {
            loadingIframe.classList.add("hidden"); // Hide loading animation after a delay
        }, 2000);
    }
};

document.getElementById("reloadButton").onclick = function (event) {
    let loadingIframe = document.getElementById("loadingIframe");
    loadingIframe.classList.remove("hidden"); // Show loading animation on reload
    document.getElementById("iframeWindow").contentWindow.location.reload(true);
    setTimeout(function () {
        loadingIframe.classList.add("hidden"); // Hide loading animation after a delay
    }, 2000);
};
