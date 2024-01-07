function saveSearchEnginePreference() {
    var selectedEngine = document.getElementById("searchEngineSelect").value;
    localStorage.setItem("preferredSearchEngine", selectedEngine);
    // do something to alert user that its been saved
}

document.addEventListener("DOMContentLoaded", function () {
    var savedEngine = localStorage.getItem("preferredSearchEngine");
    if (savedEngine) {
        document.getElementById("searchEngineSelect").value = savedEngine;
    }
});
