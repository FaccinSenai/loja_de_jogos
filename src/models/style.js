const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        leftSection.style.left = '0';
    } else {
        leftSection.style.left = '-160px';
    }
    isMenuOpen = !isMenuOpen;
});
