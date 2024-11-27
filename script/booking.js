// A foglalás összegzése
function confirmReservation() {
    // Bejelentkezés és kijelentkezés dátumai
    let checkinDate = document.getElementById('checkin-date').value;
    let checkoutDate = document.getElementById('checkout-date').value;

    // Vendégek száma
    let numGuests = document.getElementById('num-guests').value;

    // Programok kiválasztása
    let selectedPrograms = [];
    if (document.getElementById('lovaglas').checked) {
        selectedPrograms.push('Lovaglás');
    }
    if (document.getElementById('tura').checked) {
        selectedPrograms.push('Túra');
    }
    if (document.getElementById('etkezes').checked) {
        selectedPrograms.push('Házi étkezés');
    }
    if (document.getElementById('programok').checked) {
        selectedPrograms.push('Egyéb programok');
    }

    // Az összegzés megjelenítése
    document.getElementById('selected-dates').innerText = `Bejelentkezés: ${checkinDate}, Kijelentkezés: ${checkoutDate}`;
    document.getElementById('num-guests-summary').innerText = `Vendégek száma: ${numGuests}`;
    document.getElementById('selected-programs').innerText = `Választott programok: ${selectedPrograms.join(', ')}`;

    // Az összegzés megjelenítése a foglalás form alatt
    document.getElementById('booking-summary').style.display = 'block';
}

// A foglalás véglegesítése
function confirmFinalBooking() {
    // Üzenet a sikeres foglalásról
    alert('Foglalása sikeresen véglegesítve! Köszönjük, hogy a Nyírfa Liget Birtokot választotta!');
    document.getElementById('reservation-form').reset();  // Form kiürítése
    document.getElementById('booking-summary').style.display = 'none';  // Összegzés eltüntetése
}
