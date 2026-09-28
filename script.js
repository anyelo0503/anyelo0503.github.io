// Simple JavaScript for interactivity

// Número de WhatsApp central: actualizar aquí para reflejarlo en todo el sitio
const WHATSAPP_NUMBER = '573204025836';

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    }

    // Animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    });

    document.querySelectorAll('.item, .testimonial').forEach(el => {
        observer.observe(el);
    });

    // WhatsApp integration
    document.querySelectorAll('.whatsapp-link, .whatsapp-float').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('Hola, quiero programar una recogida.');
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Basic validation
            const email = form.querySelector('#email').value;
            const phone = form.querySelector('#phone').value;
            if (!email || !phone) {
                alert('Por favor, completa todos los campos requeridos.');
                e.preventDefault();
            }
        });
    }

    // Counter animation
    function animateCounter(id, target) {
        let count = 0;
        const element = document.getElementById(id);
        const increment = target / 100;
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(count) + '+';
        }, 30);
    }

    const impactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('counter1', 5000);
                animateCounter('counter2', 10000);
                animateCounter('counter3', 20);
                animateCounter('counter4', 10);
            }
        });
    });

    document.querySelectorAll('.impact').forEach(el => {
        impactObserver.observe(el);
    });

    // Impact calculator
    window.calculateImpact = function() {
        const clothes = parseInt(document.getElementById('clothes').value) || 0;
        const co2Saved = clothes * 10; // Ejemplo: 10kg CO2 por prenda
        document.getElementById('impact-result').textContent = `Tu impacto: ${co2Saved} kg de CO2 ahorrados.`;
    };
});