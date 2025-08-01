// Carrossel de Depoimentos
let currentSlide = 0;
const testimonialsPerView = 3;
let totalTestimonials = 0;
let maxSlide = 0;
let autoSlideInterval;

// Função para inicializar o carrossel
function initializeCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    totalTestimonials = testimonials.length;
    maxSlide = Math.max(0, totalTestimonials - testimonialsPerView);
    
    // Ajusta o número de indicadores baseado no número de slides possíveis
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i <= maxSlide; i++) {
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.onclick = () => currentTestimonial(i + 1);
        indicatorsContainer.appendChild(indicator);
    }
}

// Função para mostrar um depoimento específico
function showTestimonial(slideIndex) {
    // Limita o índice dentro dos limites válidos
    if (slideIndex > maxSlide) currentSlide = 0;
    if (slideIndex < 0) currentSlide = maxSlide;
    
    // Move o carrossel
    const carousel = document.querySelector('.testimonials-carousel');
    const slideWidth = (100 / testimonialsPerView); // 33.333%
    const translateX = -(currentSlide * slideWidth);
    carousel.style.transform = `translateX(${translateX}%)`;
    
    // Atualiza os indicadores
    updateIndicators();
}

// Função para atualizar os indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// Função para ir para o próximo depoimento
function nextTestimonial() {
    currentSlide++;
    if (currentSlide > maxSlide) currentSlide = 0;
    showTestimonial(currentSlide);
}

// Função para ir para o depoimento anterior
function previousTestimonial() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = maxSlide;
    showTestimonial(currentSlide);
}

// Função para ir para um depoimento específico
function currentTestimonial(n) {
    currentSlide = n - 1;
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    if (currentSlide < 0) currentSlide = 0;
    showTestimonial(currentSlide);
    
    // Para o auto-slide temporariamente quando o usuário interage
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Função para iniciar o auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000); // Muda a cada 5 segundos
}

// Função para parar o auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicializa o carrossel quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    showTestimonial(currentSlide);
    startAutoSlide();
    
    // Para o auto-slide quando o mouse está sobre o carrossel
    const carouselContainer = document.querySelector('.testimonials-carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

// Suporte para navegação por teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousTestimonial();
    } else if (event.key === 'ArrowRight') {
        nextTestimonial();
    }
});

