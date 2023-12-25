var emailElements = document.getElementsByClassName('email');
var emailBgElements = document.getElementsByClassName('emailPopupBg');

if (emailElements.length > 0) {
    emailElements[0].addEventListener('click', function() {
        document.getElementById('emailPopup').classList.toggle('hidden');
        document.getElementById('emailPopupBg').classList.toggle('hidden');
        document.getElementById('mainWindow').classList.toggle('hoverable');
    });
}

if (emailBgElements.length > 0) {
    emailBgElements[0].addEventListener('click', function() {
        document.getElementById('emailPopup').classList.toggle('hidden');
        document.getElementById('emailPopupBg').classList.toggle('hidden');
        document.getElementById('mainWindow').classList.toggle('hoverable');
    });
}