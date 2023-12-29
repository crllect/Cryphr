/*
document.addEventListener("DOMContentLoaded", function() {
    var input = document.createElement("input");
    input.setAttribute("placeholder", "placeholder");
    input.style.position = "absolute";
    input.style.opacity = "0";
    input.style.pointerEvents = "none";

    document.body.appendChild(input);

    var placeholderStyle = window.getComputedStyle(input, "::placeholder");
    var placeholderColor = placeholderStyle.color;

    var searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.style.color = placeholderColor;
    }

    document.body.removeChild(input);
  });
*/

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

    let url = document.getElementById("urlInput").value;
    let preferredSearchEngine = localStorage.getItem("preferredSearchEngine");
    let searchUrl = preferredSearchEngine || "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
    }

    let iframeWindow = document.getElementById("iframeWindow");
    document.querySelectorAll(".mainWindow").forEach(function (element) {
        element.classList.add("hidden");
    });

    iframeWindow.classList.remove("hidden");
    document.getElementById("loadingIframe").classList.remove("hidden");

    console.log(url);

    if (proxyEnabled) {
        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
        iframeWindow.src = url;
    }

    setTimeout(function () {
        document.getElementById("loadingIframe").classList.add("hidden");
    }, 2000);
};

document.getElementById("reloadButton").onclick = function (event) {
    document.getElementById("iframeWindow").contentWindow.location.reload(true);
};

