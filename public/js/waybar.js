let historyArray = JSON.parse(localStorage.getItem("historyArray")) || [];
let nextHistoryItemId =
    JSON.parse(localStorage.getItem("nextHistoryItemId")) || 0;

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

    window.addEventListener("message", function (event) {
        if (event.data.type && event.data.type === "historySearch") {
            performSearch(event.data.query);
        }
    });
});

window.addEventListener("storage", function (event) {
    if (event.key === "UVEnabled") {
        let newValue = JSON.parse(event.newValue) || false;
        UVEnabled = newValue;
    }
});

function performSearch(query) {
    let urlInput = document.getElementById("urlInput");
    urlInput.value = query;
    document.getElementById("searchButton").click();
}

let UVEnabled = JSON.parse(localStorage.getItem("UVEnabled")) || false;

document
    .getElementById("urlInput")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

function addToSearchHistory(query) {
    let currentDate = new Date();
    let dateStamp = `${
        currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    let timeStamp24 = `${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

    let hours = currentDate.getHours();
    let hours12 = hours % 12 || 12;
    let ampm = hours >= 12 ? "PM" : "AM";
    let timeStamp12 = `${hours12.toString().padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${ampm}`;

    let newHistoryItem = {
        id: nextHistoryItemId,
        query: query,
        dateStamp: dateStamp,
        timeStamp24: timeStamp24,
        timeStamp12: timeStamp12,
    };

    historyArray.push(newHistoryItem);
    localStorage.setItem("historyArray", JSON.stringify(historyArray));

    nextHistoryItemId++;
    localStorage.setItem(
        "nextHistoryItemId",
        JSON.stringify(nextHistoryItemId)
    );
}

let settingsOpen = false;

function closeSettings() {
    if (settingsOpen) {
        settingsOpen = false;
        document.getElementById("mainWindow").src = "greeter.html";
    }
}

document.getElementById("mainWindow").src = "greeter.html";

document.getElementById("settingsButton").onclick = function (event) {
    event.preventDefault();

    let mainWindow = document.getElementById("mainWindow");

    settingsOpen = !settingsOpen;

    mainWindow.src = settingsOpen ? "settings.html" : "greeter.html";
};

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    closeSettings();

    let url = document.getElementById("urlInput").value;

    if (url.trim() !== "") {
        addToSearchHistory(url.trim());
    }

    let iframeWindow = document.getElementById("iframeWindow");
    let mainWindow = document.querySelectorAll(".mainWindow");
    let loadingIframe = document.getElementById("loadingIframe");

    if (url.trim() === "") {
        if (settingsOpen) {
            let mainWindow = document.getElementById("mainWindow");
            mainWindow.src = "greeter.html";
        }
        if (
            document
                .getElementById("fullMenu")
                .classList.contains("menuOpen-fullMenu")
        ) {
            iframeWindow.classList.remove("menuOpen-iframeWindowOpen");
            iframeWindow.classList.remove("iframeWindowOpen");
        } else {
            iframeWindow.classList.remove("iframeWindowOpen");
        }
        mainWindow.forEach((element) => element.classList.remove("hidden"));
        setTimeout(function () {
            iframeWindow.classList.add("hidden");
        }, 850);
        setTimeout(function () {
            mainWindow.forEach((element) =>
                element.classList.remove("mainWindowClose")
            );
        }, 450);
    } else {
        if (settingsOpen) {
            let mainWindow = document.getElementById("mainWindow");
            mainWindow.src = "greeter.html";
        }
        iframeWindow.classList.remove("hidden");
        iframeWindow.classList.remove("menuOpen-iframeWindowOpen");
        iframeWindow.classList.remove("iframeWindowOpen");
        mainWindow.forEach((element) =>
            element.classList.add("mainWindowClose")
        );
        iframeWindow.classList.remove("hidden");
        setTimeout(function () {
            mainWindow.forEach((element) => element.classList.add("hidden"));
        }, 850);
        setTimeout(function () {
            if (
                document
                    .getElementById("fullMenu")
                    .classList.contains("menuOpen-fullMenu")
            ) {
                iframeWindow.classList.add("menuOpen-iframeWindowOpen");
            } else {
                iframeWindow.classList.add("iframeWindowOpen");
            }
        }, 450);

        let preferredSearchEngine = localStorage.getItem(
            "preferredSearchEngine"
        );
        let searchUrl = preferredSearchEngine || "https://www.bing.com/search?q=";

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        if (!UVEnabled) {
            iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        } else {
            iframeWindow.src =
                __dynamic$config.prefix +
                "route?url=" +
                encodeURIComponent(url);
        }
    }
};

document.getElementById("reloadButton").onclick = function (event) {
    let loadingIframe = document.getElementById("loadingIframe");
    loadingIframe.classList.remove("hidden");
    document.getElementById("iframeWindow").contentWindow.location.reload(true);
    setTimeout(function () {
        loadingIframe.classList.add("hidden");
    }, 2000);
};

document.getElementById("settingsButton").onclick = function (event) {
    event.preventDefault();

    let urlInput = document.getElementById("urlInput");
    let mainWindow = document.getElementById("mainWindow");
    let iframeWindow = document.getElementById("iframeWindow");

    if (!iframeWindow.classList.contains("hidden")) {
        urlInput.value = "";
        performSearch("");

        if (!settingsOpen) {
            mainWindow.src = "settings.html";
        }
        settingsOpen = true;
    } else {
        if (settingsOpen) {
            mainWindow.src = "greeter.html";
            settingsOpen = false;
        } else {
            mainWindow.src = "settings.html";
            settingsOpen = true;
        }
    }
};

console.log("Yea, I dont know if something I did broke so horribly that you needed to open the dev console to fix it. If that is the case, you should probably tell me about it");
