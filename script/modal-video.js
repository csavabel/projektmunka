function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

function closeModal(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.getElementById("myVideo").pause();
    }
}
function openModal() {
    document.getElementById("videoModal").style.display = "block";
    const video = document.getElementById("myVideo");
    video.play();
}