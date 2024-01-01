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
    let historyContainer = document.getElementById("historyContainer");

    historyContainer.innerHTML = ""; // Clear existing content

    historyArray.forEach(function (item) {
        let entryDiv = document.createElement("div");
        entryDiv.textContent = `Query: ${item.query}, Date: ${item.dateStamp}, Time: ${item.timeStamp}`;
        entryDiv.onclick = function() {
            window.parent.postMessage({ type: 'historySearch', query: item.query }, '*');
        };
        historyContainer.appendChild(entryDiv);
    });
}