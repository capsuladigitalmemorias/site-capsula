document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Menu Hambúrguer ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
        });

        // Opcional: Fecha o menu quando um item é clicado (útil em single-page applications)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerButton.classList.remove('active');
                }
            });
        });
    }

    // --- Lógica do Carrossel Swiper ---
    const swiper = new Swiper('.swiper', {
        // Parâmetros opcionais (ajuste conforme sua necessidade)
        loop: true, // Para o carrossel ser infinito

        // Se precisar de paginação (as bolinhas)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Se precisar de setas de navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Configurações responsivas (ajustar quantos slides aparecem)
        breakpoints: {
            // Quando a largura da tela for >= 768px
            768: {
                slidesPerView: 2, // Exemplo: 2 depoimentos por vez em telas maiores
                spaceBetween: 30,
            },
            // Quando a largura da tela for < 768px (mobile)
            0: { // Começa do 0px
                slidesPerView: 1, // Exemplo: 1 depoimento por vez no mobile
                spaceBetween: 10,
            }
        }
    });
});