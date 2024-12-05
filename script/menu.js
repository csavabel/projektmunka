// Menü állapotának követése
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// Görgetési esemény figyelése
window.addEventListener('scroll', () => {
    if (!mobileMenu.classList.contains('open')) { // Ha nincs megnyitva a mobil menü
        if (window.scrollY < lastScrollY) {
            nav.classList.add('visible'); // Felgörgetés - megjelenítés
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden'); // Lefelé görgetés - eltüntetés
            nav.classList.remove('visible');
        }
    }
    lastScrollY = window.scrollY;
});

// Menük megnyitása és bezárása
mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('open'); // Ha nincs benne, hozzáadja; ha benne van, eltávolítja
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    mobileMenuIcon.setAttribute('aria-expanded', isOpen);
});

// Menü bezárása a "X" gombbal
const closeButton = document.querySelector('.mobile-menu .close-button');

closeButton.addEventListener('click', function () {
    mobileMenu.classList.remove('open'); // Menü bezárása
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuIcon.setAttribute('aria-expanded', 'false');
});
