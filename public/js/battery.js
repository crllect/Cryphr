/* 
This function provides the updateBatteryDisplay function with the correct battery icon based on the battery level.
*/
function getBatteryIcon(level) {
  if (level >= 85) return 'fa-solid fa-battery-full fa-2xl';
  if (level >= 70) return 'fa-solid fa-battery-three-quarters fa-2xl';
  if (level >= 40) return 'fa-solid fa-battery-half fa-2xl';
  if (level >= 20) return 'fa-solid fa-battery-quarter fa-2xl';
  return 'fa-solid fa-battery-empty fa-2xl';
}

/*
This function takes the battery icon class from the getBatteryIcon function and the applies it to the website.
 */
function updateBatteryDisplay(batteryLevel, iconClass) {
  const batteryElement = document.getElementById('battery');
  if (batteryElement) {
    const showing = batteryElement.getAttribute('data-showing') || 'percentage';
    if (showing === 'icon') {
      batteryElement.innerHTML = `<span class="${iconClass} batteryIcon" style="transform: translateY(0.15vh);"></span>`;
    } else {
      batteryElement.innerHTML = batteryLevel + '%';
    }
  }
}

/*
This function finds the battery level and runs the getBatteryIcon and updateBatteryDisplay functions described above.P
*/
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
    batteryElement.onclick = function () {
      const currentShowing = this.getAttribute('data-showing') || 'percentage';
      this.setAttribute(
        'data-showing',
        currentShowing === 'percentage' ? 'icon' : 'percentage'
      );
      updateDisplay();
    };
  }
}

/*
This code checks if the browser supports the Battery Status API. 
If it does, it retrieves the battery status and sets up a display to show battery information. 
If the API is not supported, it displays an error icon to indicate that the battery status cannot be displayed.
 */
if ('getBattery' in navigator) {
  navigator.getBattery().then(setupBatteryDisplay);
} else {
  const batteryElement = document.getElementById('battery');
  if (batteryElement) {
    batteryElement.innerHTML =
      '<span class="fa-solid fa-triangle-exclamation"></span>';
  }
}
