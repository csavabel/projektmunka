if (!localStorage.getItem('cookiesAccepted')) {
    document.querySelector('.cookie-banner').style.display = 'block'; 
} else {
    document.querySelector('.cookie-banner').style.display = 'none'; 
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true'); 
    document.querySelector('.cookie-banner').style.display = 'none';
}
