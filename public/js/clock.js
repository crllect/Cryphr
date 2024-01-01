let toggledClock = false;

document.getElementById("time").addEventListener("click", function () {
    toggledClock = !toggledClock;
    updateClock();

    const historyIframe = document.getElementById("fullMenu").contentWindow;
    historyIframe.postMessage({ type: 'toggleClock', toggledClock: toggledClock }, "*");
});


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    if (toggledClock) {
        hours = hours.toString().padStart(2, "0");
    } else {
        if (hours > 12) {
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        hours = hours.toString();
    }

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

function updateHistoryTimestamps() {
    const historyItems = document.querySelectorAll(".timestamp");
    historyItems.forEach(function(item) {
        const timestamp = new Date(item.getAttribute("data-timestamp"));
        item.textContent = formatTimestamp(timestamp);
    });
}

function formatTimestamp(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    if (toggledClock) {
        hours = hours.toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    } else {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes} ${ampm}`;
    }
}

updateClock();
setInterval(updateClock, 1000);
