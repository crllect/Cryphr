/*
document.addEventListener("DOMContentLoaded", function() {
    var input = document.createElement("input");
    input.setAttribute("placeholder", "placeholder");
    input.style.position = "absolute";
    input.style.opacity = "0";
    input.style.pointerEvents = "none";

    document.body.appendChild(input);

    var placeholderStyle = window.getComputedStyle(input, "::placeholder");
    var placeholderColor = placeholderStyle.color;

    var searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.style.color = placeholderColor;
    }

    document.body.removeChild(input);
  });
*/

document.addEventListener("DOMContentLoaded", function () {
    var urlInput = document.getElementById("urlInput");
    var searchButton = document.getElementById("searchButton");

    function updateButtonColor() {
        if (urlInput.value.trim() !== "") {
            searchButton.style.color = "#ffffff";
        } else {
            searchButton.style.color = "#7C7777";
        }
    }

    urlInput.addEventListener("input", updateButtonColor);

    urlInput.addEventListener("blur", function () {
        if (urlInput.value.trim() === "") {
            searchButton.style.color = "#7C7777";
        }
    });
});
