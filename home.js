function openPopup() {
    document.getElementById('popupOverlay').classList.add('active');
    document.getElementById('mainWrapper').classList.add('blurred');
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    document.getElementById('mainWrapper').classList.remove('blurred');
}

function closePopupOnOverlay(event) {
    if (event.target.id === 'popupOverlay') {
        closePopup();
    }
}