document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault();
    var url = "youtube.com";
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
};
