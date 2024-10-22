// Cambiar color de la navegación al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});


let slideIndex = 0;

const slides = document.querySelector('.carousel-slide');
const images = slides.querySelectorAll('img');
const totalSlides = images.length;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Iniciar el carrusel mostrando la primera imagen
showSlide(slideIndex);

// Opcional: Puedes activar el movimiento automático del carrusel
setInterval(() => {
    moveSlide(1);
}, 5000);  // Cambiar cada 5 segundos
