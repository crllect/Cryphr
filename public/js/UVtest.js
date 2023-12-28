document.getElementById('urlInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('loadButton').click();
    }
});


document.getElementById('loadButton').onclick = function(event) {
    event.preventDefault();

    var url = document.getElementById('urlInput').value; 
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    var encodedUrl = __uv$config.encodeUrl(url);

    var iframeWindow = document.getElementById('iframeWindow');
    document.querySelectorAll('.mainWindow').forEach(function(element) {
        element.classList.add('hidden');
    });

    iframeWindow.classList.remove('hidden');
    document.getElementById('loadingIframe').classList.remove('hidden');

    iframeWindow.src = __uv$config.prefix + encodedUrl;

    setTimeout(function() {
        document.getElementById('loadingIframe').classList.add('hidden');
    }, 2000);
};
