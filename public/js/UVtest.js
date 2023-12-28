document
    .getElementById("urlInput")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    var url = document.getElementById("urlInput").value;
    var preferredSearchEngine = localStorage.getItem("preferredSearchEngine");
    var searchUrl = preferredSearchEngine || "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
    }

    var iframeWindow = document.getElementById("iframeWindow");
    document.querySelectorAll(".mainWindow").forEach(function (element) {
        element.classList.add("hidden");
    });

    iframeWindow.classList.remove("hidden");
    document.getElementById("loadingIframe").classList.remove("hidden");

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);

    setTimeout(function () {
        document.getElementById("loadingIframe").classList.add("hidden");
    }, 2000);
};

document.getElementById("reloadButton").onclick = function (event) {
    document.getElementById("iframeWindow").contentWindow.location.reload(true);
};
