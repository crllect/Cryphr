let toggledClock = false;

document.getElementById("time").addEventListener("click", function () {
    // is the logic for clicking the clock making it 24 hour time, or standart time
    toggledClock = !toggledClock;
    updateClock();
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
updateClock();
setInterval(updateClock, 1000);
