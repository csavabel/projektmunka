// Modális megnyitása
function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

// Modális bezárása, ha a felhasználó kívülre kattint
function closeModal(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.getElementById("myVideo").pause();  // Videó megállítása, ha a modál bezáródik
    }
}
function openModal() {
    document.getElementById("videoModal").style.display = "block";
    const video = document.getElementById("myVideo");
    video.play(); // Automatikusan elindítja a lejátszást
}