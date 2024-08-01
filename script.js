function toggleMenu() {
    var overlay = document.getElementById('overlay');
    var menu = document.querySelector('.menu');
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
        menu.classList.remove('open');
    } else {
        overlay.style.display = 'block';
        menu.classList.add('open');
    }
}
