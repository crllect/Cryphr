document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key.startsWith("--")) {
            document.documentElement.style.setProperty(key, value);
        }

        if (key === "--doParticles") {
            let selectElement = document.getElementById("doParticles");
            if (selectElement) {
                selectElement.value = value.trim();
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key.startsWith("--")) {
            document.documentElement.style.setProperty(key, value);
        }
    }
});

window.addEventListener(
    "message",
    function (event) {
        var data = event.data;
        if (data.variable && data.value) {
            document.documentElement.style.setProperty(
                data.variable,
                data.value
            );
            localStorage.setItem(data.variable, data.value);
        }
    },
    false
);

window.addEventListener('message', function(event) {
    if (event.origin !== "*") {
        return;
    }

    var data = event.data;
    if(data.variable && data.value) {
        document.documentElement.style.setProperty(data.variable, data.value);
        localStorage.setItem(data.variable, data.value);
    }
}, false);
