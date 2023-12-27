var creditsElements = document.getElementsByClassName('credits');
var creditsBgElements = document.getElementsByClassName('creditsPopupBg');

if (creditsElements.length > 0) {
    creditsElements[0].addEventListener('click', function() {
        document.getElementById('creditsPopup').classList.toggle('hidden');
        document.getElementById('creditsPopupBg').classList.toggle('hidden');
        document.getElementById('mainWindow').classList.toggle('hoverable');
    });
}

if (creditsBgElements.length > 0) {
    creditsBgElements[0].addEventListener('click', function() {
        document.getElementById('creditsPopup').classList.toggle('hidden');
        document.getElementById('creditsPopupBg').classList.toggle('hidden');
        document.getElementById('mainWindow').classList.toggle('hoverable');
    });
}