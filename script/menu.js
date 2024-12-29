let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

function handleScrollEvent() {
    if (mobileMediaQuery.matches) {
    
        nav.classList.remove('visible', 'hidden');
        return;
    }

    window.addEventListener('scroll', onScroll);
}

function onScroll() {
    if (!mobileMenu.classList.contains('open')) { 
        if (window.scrollY < lastScrollY) {
            nav.classList.add('visible'); 
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden'); 
            nav.classList.remove('visible');
        }
    }
    lastScrollY = window.scrollY;
}

mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('open'); 
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    mobileMenuIcon.setAttribute('aria-expanded', isOpen);
});

const closeButton = document.querySelector('.mobile-menu .close-button');

if (closeButton) {
    closeButton.addEventListener('click', function () {
        mobileMenu.classList.remove('open'); 
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenuIcon.setAttribute('aria-expanded', 'false');
    });
}

mobileMediaQuery.addEventListener('change', handleScrollEvent);

handleScrollEvent();
