// Ellenőrzés, hogy a felhasználó már elfogadta-e a sütiket
if (!localStorage.getItem('cookiesAccepted')) {
    document.querySelector('.cookie-banner').style.display = 'block'; // Banner megjelenítése
} else {
    document.querySelector('.cookie-banner').style.display = 'none'; // Banner elrejtése
}

// A "Rendben" gombra kattintás után a banner elrejtése
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true'); // Beállítja, hogy a felhasználó elfogadta
    document.querySelector('.cookie-banner').style.display = 'none'; // Banner eltüntetése
}
