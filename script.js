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
