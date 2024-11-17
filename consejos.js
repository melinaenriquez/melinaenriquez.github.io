let currentConsejosImageIndex = 0;
const consejosImages = document.querySelectorAll('.consejos-carousel .carousel-image');

function showConsejosImage(index) {
    consejosImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function nextConsejosImage() {
    currentConsejosImageIndex = (currentConsejosImageIndex + 1) % consejosImages.length;
    showConsejosImage(currentConsejosImageIndex);
}

// Mostrar la primera imagen al cargar la página
showConsejosImage(currentConsejosImageIndex);