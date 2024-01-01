let historyArray = JSON.parse(localStorage.getItem("historyArray")) || [];

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

    // Listen for messages from history.html
    window.addEventListener('message', function(event) {
        if (event.data.type && event.data.type === 'historySearch') {
            performSearch(event.data.query);
        }
    });
});

function performSearch(query) {
    let urlInput = document.getElementById("urlInput");
    urlInput.value = query;
    document.getElementById("searchButton").click();
}

let proxyEnabled = true;

document.getElementById("urlInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

// Function to add search query to local storage with date and time
function addToSearchHistory(query) {
    let currentDate = new Date();
    let dateStamp = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    let timeStamp = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    historyArray.push({ query, dateStamp, timeStamp });
    localStorage.setItem("historyArray", JSON.stringify(historyArray));
}

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value;

    // Add search query to history
    if (url.trim() !== "") {
        addToSearchHistory(url.trim());
    }

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
        }, 850);
        setTimeout(function() {
            mainWindow.forEach(element => element.classList.remove("mainWindowClose"))
        }, 450);
    } else {
        iframeWindow.classList.remove("hidden");
        iframeWindow.classList.remove("menuOpen-iframeWindowOpen");
        iframeWindow.classList.remove("iframeWindowOpen");
        mainWindow.forEach(element => element.classList.add("mainWindowClose"));
        iframeWindow.classList.remove("hidden");
        setTimeout(function() {
            mainWindow.forEach(element => element.classList.add("hidden"));
        }, 850);
        setTimeout(function() {
            if (document.getElementById("fullMenu").classList.contains("menuOpen-fullMenu")) {
                iframeWindow.classList.add("menuOpen-iframeWindowOpen");
            } else {
                iframeWindow.classList.add("iframeWindowOpen");
            }
        }, 450);

        let preferredSearchEngine = localStorage.getItem("preferredSearchEngine");
        let searchUrl = preferredSearchEngine || "https://duckduckgo.com/?q=";

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
