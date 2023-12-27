document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault();
    var url = "https://youtube.com"; // make sure to always add https://
    var encodedUrl = __uv$config.encodeUrl(url);

    document.getElementById('iframeWindow-1').src = __uv$config.prefix + encodedUrl;
};
