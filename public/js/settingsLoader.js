function applyCustomCSS(css) {
    let styleSheet = document.getElementById("custom-css-style");
    if (!styleSheet) {
        styleSheet = document.createElement("style");
        styleSheet.id = "custom-css-style";
        document.head.appendChild(styleSheet);
    }
    styleSheet.textContent = css;
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const contents = e.target.result;
        localStorage.setItem("customCSS", contents);
        applyCustomCSS(contents);
    };

    reader.readAsText(file);
}

function clearCustomCSS() {
    localStorage.removeItem("customCSS");
    applyCustomCSS("");
}

window.addEventListener("storage", function (e) {
    if (e.key === "customCSS") {
        applyCustomCSS(e.newValue);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const customCSS = localStorage.getItem("customCSS");
    if (customCSS) {
        applyCustomCSS(customCSS);
    }
});

window.settingsLoader = {
    applyCustomCSS,
    handleFileUpload,
    clearCustomCSS,
};

console.log(`
                       x .d88"  x .d88"                           :8
             .u    .    5888R    5888R                           .88
      .    .d88B :@8c   '888R    '888R        .u          .     :888ooo
 .udR88N  ="8888f8888r   888R     888R     ud8888.   .udR88N  -*8888888
<888'888k   4888>'88"    888R     888R   :888'8888. <888'888k   8888
9888 'Y"    4888> '      888R     888R   d888 '88%" 9888 'Y"    8888 
9888        4888>        888R     888R   8888.+"    9888        8888
9888       .d888L .+     888R     888R   8888L      9888       .8888Lu=
?8888u../  ^"8888*"     .888B .  .888B . '8888c. .+ ?8888u../  ^%888*
 "8888P'      "Y"       ^*888%   ^*888%   "88888%    "8888P'     'Y"
   "P'                    "%       "%       "YP'       "P'

https://github.com/crllect
https://discord.com/users/713488984596021291
`);
