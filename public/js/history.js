document.addEventListener("DOMContentLoaded", function () {
    updateHistoryDisplay();
});

window.addEventListener("storage", function (event) {
    if (event.key === "historyArray") {
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
        queryDiv.textContent = `Query: ${item.query}`;
        queryDiv.className = "history-query";
        queryDiv.onclick = function() {
            window.parent.postMessage({ type: 'historySearch', query: item.query }, '*');
        };

        let dateDiv = document.createElement("div");
        dateDiv.textContent = `Date: ${item.dateStamp}`;
        dateDiv.className = "history-date";

        let timeDiv = document.createElement("div");
        timeDiv.textContent = `Time: ${formatHistoryTime(item.timeStamp, toggledClock)}`;
        timeDiv.className = "history-time";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "history-delete";
        deleteButton.onclick = function() {
            deleteHistoryItem(i);
        };

        entryDiv.appendChild(queryDiv);
        entryDiv.appendChild(dateDiv);
        entryDiv.appendChild(timeDiv);
        entryDiv.appendChild(deleteButton);

        historyContainer.appendChild(entryDiv);
    }
}

function formatHistoryTime(timeStamp, is24HourFormat) {
    let [hours, minutes] = timeStamp.split(':').map(num => parseInt(num, 10));
    if (!is24HourFormat) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    } else {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
}

function deleteHistoryItem(index) {
    let historyArray = JSON.parse(localStorage.getItem("historyArray")) || [];
    if (index >= 0 && index < historyArray.length) {
        historyArray.splice(index, 1);
        localStorage.setItem("historyArray", JSON.stringify(historyArray));
        updateHistoryDisplay();
    }
}
