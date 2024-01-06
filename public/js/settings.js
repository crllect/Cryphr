function redirectTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("setColorSettings")
        .addEventListener("click", function () {
            localStorage.setItem("recentSettings", "colorSettings");
            redirectTo("colors.html");
        });

    document
        .getElementById("setProxySettings")
        .addEventListener("click", function () {
            localStorage.setItem("recentSettings", "proxySettings");
            redirectTo("proxyConfig.html");
        });

    document
        .getElementById("setCloakingSettings")
        .addEventListener("click", function () {
            localStorage.setItem("recentSettings", "cloakSettings");
            redirectTo("cloaking.html");
        });

    document
        .getElementById("wipeAllSettings")
        .addEventListener("click", function () {
            localStorage.clear();
            window.parent.location.reload();
        });
});
