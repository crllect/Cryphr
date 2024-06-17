function getBatteryIcon(level) {
  // Returns the appropriate Font Awesome icon based on battery level
  if (level >= 85) return "fa-solid fa-battery-full fa-2xl";
  if (level >= 70) return "fa-solid fa-battery-three-quarters fa-2xl";
  if (level >= 40) return "fa-solid fa-battery-half fa-2xl";
  if (level >= 20) return "fa-solid fa-battery-quarter fa-2xl";
  return "fa-solid fa-battery-empty fa-2xl";
}

function updateBatteryDisplay(batteryLevel, iconClass) {
  // Updates the battery display element with either percentage or icon
  const batteryElement = document.getElementById("battery");
  if (batteryElement) {
    // Gets the current display type from the element's data attribute
    const showing = batteryElement.getAttribute("data-showing") || "percentage";
    if (showing === "icon") {
      // Sets the element's content to the icon
      batteryElement.innerHTML = `<span class="${iconClass} batteryIcon" style="transform: translateY(0.15vh);"></span>`;
    } else {
      // Sets the element's content to the battery level percentage
      batteryElement.innerHTML = batteryLevel + "%";
    }
  }
}

function setupBatteryDisplay(battery) {
  // Sets up event listeners for battery level and charging changes, and defines click behavior
  const updateDisplay = () => {
    // Calculates the battery level and gets the icon class
    const batteryLevel = Math.round(battery.level * 100);
    const iconClass = getBatteryIcon(batteryLevel);
    // Updates the display
    updateBatteryDisplay(batteryLevel, iconClass);
  };

  // Calls updateDisplay initially to set the initial state
  updateDisplay();

  // Adds event listeners for charging changes and level changes
  battery.addEventListener("chargingchange", updateDisplay);
  battery.addEventListener("levelchange", updateDisplay);

  const batteryElement = document.getElementById("battery");
  if (batteryElement) {
    // Sets the click behavior for the battery element to toggle between percentage and icon display
    batteryElement.onclick = function () {
      // Gets the current display type
      const currentShowing = this.getAttribute("data-showing") || "percentage";
      // Toggles the display type
      this.setAttribute(
        "data-showing",
        currentShowing === "percentage" ? "icon" : "percentage"
      );
      // Updates the display
      updateDisplay();
    };
  }
}

// Checks if the browser supports the Battery API
if ("getBattery" in navigator) {
  // If supported, gets the battery object and calls setupBatteryDisplay
  navigator.getBattery().then(setupBatteryDisplay);
} else {
  // If not supported, displays an exclamation mark icon
  const batteryElement = document.getElementById("battery");
  if (batteryElement) {
    batteryElement.innerHTML =
      '<span class="fa-solid fa-triangle-exclamation"></span>';
  }
}
