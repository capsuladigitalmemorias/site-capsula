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

    // --- Lógica do FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Encontra o item FAQ pai (que contém a pergunta e a resposta)
            const faqItem = question.closest('.faq-item');
            if (faqItem) {
                // Alterna a classe 'active' no item pai
                faqItem.classList.toggle('active');

                // OPCIONAL: Para fechar outras perguntas abertas quando uma nova é clicada
                // Se você quiser que apenas uma pergunta esteja aberta por vez, descomente o bloco abaixo.
                // Se quiser permitir múltiplas perguntas abertas, mantenha-o comentado.
                /*
                faqQuestions.forEach(otherQuestion => {
                    const otherFaqItem = otherQuestion.closest('.faq-item');
                    if (otherFaqItem && otherFaqItem !== faqItem && otherFaqItem.classList.contains('active')) {
                        otherFaqItem.classList.remove('active');
                    }
                });
                */
            }
        });
    });
});