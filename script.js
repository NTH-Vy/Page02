/* ==========================================================================
   1. HAMBURGER MENU (Mobile Navigation)
   ========================================================================== */
(function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('navMenu');

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        hamburger.classList.add('is-active');
        navMenu.classList.add('is-open');
        overlay.classList.add('is-active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; 
    }

    function closeMenu() {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-open');
        overlay.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        navMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
})();

/* ==========================================================================
   2. TESTIMONIAL SLIDER
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let autoPlayInterval;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoPlay();
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 6000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();
});


