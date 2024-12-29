function confirmReservation() {
    let checkinDate = document.getElementById('checkin-date').value;
    let checkoutDate = document.getElementById('checkout-date').value;

    let numGuests = document.getElementById('num-guests').value;

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

    document.getElementById('selected-dates').innerText = `Bejelentkezés: ${checkinDate}, Kijelentkezés: ${checkoutDate}`;
    document.getElementById('num-guests-summary').innerText = `Vendégek száma: ${numGuests}`;
    document.getElementById('selected-programs').innerText = `Választott programok: ${selectedPrograms.join(', ')}`;


    document.getElementById('booking-summary').style.display = 'block';
}

function confirmFinalBooking() {
    alert('Foglalása sikeresen véglegesítve! Köszönjük, hogy a Nyírfa Liget Birtokot választotta!');
    document.getElementById('reservation-form').reset();  
    document.getElementById('booking-summary').style.display = 'none';  
}
