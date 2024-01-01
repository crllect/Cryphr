document.addEventListener("DOMContentLoaded", function () {
    updateHistoryDisplay();
    addWipeHistoryButton();
});

window.addEventListener("storage", function (event) {
    if (event.key === "historyArray" || event.key === "toggledClock") {
        updateHistoryDisplay();
    }
});

function updateHistoryDisplay() {
    let historyArray = JSON.parse(localStorage.getItem("historyArray")) || [];
    let toggledClock = JSON.parse(localStorage.getItem("toggledClock")) || false;
    let historyContainer = document.getElementById("historyContainer");

    historyContainer.innerHTML = "";

    for (let i = historyArray.length - 1; i >= 0; i--) {
        let item = historyArray[i];
        let entryDiv = document.createElement("div");
        entryDiv.className = "history-entry";

        let queryDiv = document.createElement("div");
        queryDiv.textContent = `${item.query}`;
        queryDiv.className = "history-query";
        queryDiv.onclick = function() {
            window.parent.postMessage({ type: 'historySearch', query: item.query }, '*');
        };

        let dateDiv = document.createElement("div");
        dateDiv.textContent = `Date: ${item.dateStamp}`;
        dateDiv.className = "history-date";

        let timeDiv = document.createElement("div");
        let timeText = toggledClock ? item.timeStamp24 : item.timeStamp12;
        timeDiv.textContent = `Time: ${timeText}`;
        timeDiv.className = "history-time";

        entryDiv.appendChild(queryDiv);
        entryDiv.appendChild(dateDiv);
        entryDiv.appendChild(timeDiv);

        historyContainer.appendChild(entryDiv);
    }
}

function addWipeHistoryButton() {
    let wipeButton = document.createElement("button");
    wipeButton.textContent = "Wipe History";
    wipeButton.className = "history-wipe";
    wipeButton.onclick = wipeHistory;

    document.body.appendChild(wipeButton);
}

function wipeHistory() {
    localStorage.removeItem("historyArray");
    updateHistoryDisplay();

    window.parent.location.reload();
}
