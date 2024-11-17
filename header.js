let currentHeaderImageIndex = 0;
const headerImages = document.querySelectorAll('.header-carousel .carousel-image');

function showHeaderImage(index) {
    headerImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function nextHeaderImage() {
    currentHeaderImageIndex = (currentHeaderImageIndex + 1) % headerImages.length;
    showHeaderImage(currentHeaderImageIndex);
}

// Mostrar la primera imagen al cargar la página
showHeaderImage(currentHeaderImageIndex);

