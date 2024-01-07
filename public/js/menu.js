document.querySelector(".menu").addEventListener("click", function () {
    this.classList.toggle("menuOpen");
    var mainWindow = document.querySelector(".mainWindow").classList;
    var iframeWindow = document.querySelector(".iframeWindow").classList;
    var waybar = document.querySelector(".waybar").classList;
    var fullMenu = document.querySelector(".fullMenu").classList;
    var body = document.body.classList;
    if (this.classList.contains("menuOpen")) {
        mainWindow.add("menuOpen-mainWindow");
        iframeWindow.add("menuOpen-iframeWindow");
        waybar.add("menuOpen-waybar");
        fullMenu.add("menuOpen-fullMenu");
        body.add("menuOpen-body");

        if (!iframeWindow.contains("hidden")) {
            iframeWindow.add("menuOpen-iframeWindowOpen");
        }
    } else {
        mainWindow.remove("menuOpen-mainWindow");
        iframeWindow.remove("menuOpen-iframeWindow");
        iframeWindow.remove("menuOpen-iframeWindowOpen");
        waybar.remove("menuOpen-waybar");
        fullMenu.remove("menuOpen-fullMenu");
        body.remove("menuOpen-body");

        if (!iframeWindow.contains("hidden")) {
            iframeWindow.add("iframeWindowOpen")
        }
    }
});

// make sure that every element is accounted for, and that it accounts for active elements, you will figure something out
