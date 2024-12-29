let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-grid .thumbnail');
const mainImage = document.getElementById('main-image'); 
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImage = document.createElement('img');
modal.appendChild(modalImage);

function updateMainImage(index) {
    mainImage.src = images[index].src;
    currentImageIndex = index;
}

function showImage(src) {
    modal.style.display = 'block';
    modalImage.src = src;
    modalImage.alt = "Kép a galériából";
}

modal.addEventListener('click', function (event) {
    if (event.target !== modalImage) {
        modal.style.display = 'none';
    }
});

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

images.forEach((img, index) => {
    if (index === 0) {
        mainImage.src = img.src;
    }
    img.addEventListener('click', () => {
        showImage(img.src);
    });
});