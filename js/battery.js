function getBatteryIcon(level) {
    if (level >= 85) return 'fa-solid fa-battery-full';
    if (level >= 70) return 'fa-solid fa-battery-three-quarters';
    if (level >= 40) return 'fa-solid fa-battery-half';
    if (level >= 20) return 'fa-solid fa-battery-quarter';
    return 'fa-solid fa-battery-low';
}

function updateBatteryDisplay(batteryLevel, iconClass) {
    const batteryElement = document.getElementById('battery');
    if (batteryElement) {
        // Set the icon with increased font size
        batteryElement.innerHTML = `<span class="${iconClass} batteryIcon" style="font-size: calc(5vh); transform: translateY(5%);"></span>`;
        batteryElement.setAttribute('data-battery-level', batteryLevel);
        batteryElement.onclick = function() {
            if (this.getAttribute('data-showing') === 'percentage') {
                // Reset to icon with increased font size
                this.innerHTML = `<span class="${iconClass} batteryIcon" style="font-size: calc(5vh); transform: translateY(5%);"></span>`;
                this.setAttribute('data-showing', 'icon');
            } else {
                // Display the percentage with original font size
                this.innerHTML = batteryLevel + '%';
                this.setAttribute('data-showing', 'percentage');
            }
        };
    }
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        const batteryLevel = Math.round(battery.level * 100);
        const iconClass = getBatteryIcon(batteryLevel);
        updateBatteryDisplay(batteryLevel, iconClass);
    });
} else {
    const batteryElement = document.getElementById('battery');
    if (batteryElement) {
        batteryElement.innerHTML = '<span class="fa-solid fa-triangle-exclamation"></span>';
    }
}
