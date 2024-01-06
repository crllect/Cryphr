function getBatteryIcon(level) {
    if (level >= 85) return 'fa-solid fa-battery-full fa-2xl';
    if (level >= 70) return 'fa-solid fa-battery-three-quarters fa-2xl';
    if (level >= 40) return 'fa-solid fa-battery-half fa-2xl';
    if (level >= 20) return 'fa-solid fa-battery-quarter fa-2xl';
    return 'fa-solid fa-battery-low fa-2xl';
}

function updateBatteryDisplay(batteryLevel, iconClass) {
    const batteryElement = document.getElementById('battery');
    if (batteryElement) {
        const showing = batteryElement.getAttribute('data-showing');
        if (showing === 'percentage') {
            batteryElement.innerHTML = batteryLevel + '%';
        } else {
            batteryElement.innerHTML = `<span class="${iconClass} batteryIcon" style="transform: translateY(0.15vh);"></span>`;
        }
    }
}

function setupBatteryDisplay(battery) {
    const updateDisplay = () => {
        const batteryLevel = Math.round(battery.level * 100);
        const iconClass = getBatteryIcon(batteryLevel);
        updateBatteryDisplay(batteryLevel, iconClass);
    };

    updateDisplay();

    battery.addEventListener('chargingchange', updateDisplay);
    battery.addEventListener('levelchange', updateDisplay);

    const batteryElement = document.getElementById('battery');
    if (batteryElement) {
        batteryElement.onclick = function() {
            if (this.getAttribute('data-showing') === 'percentage') {
                this.setAttribute('data-showing', 'icon');
            } else {
                this.setAttribute('data-showing', 'percentage');
            }
            updateDisplay();
        };
    }
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(setupBatteryDisplay);
} else {
    const batteryElement = document.getElementById('battery');
    if (batteryElement) {
        batteryElement.innerHTML = '<span class="fa-solid fa-triangle-exclamation"></span>';
    }
}
