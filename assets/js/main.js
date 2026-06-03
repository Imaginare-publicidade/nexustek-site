document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a, button') : [];
    const contactModal = document.getElementById('contact-modal');
    const contactOpenButtons = document.querySelectorAll('[data-contact-open]');
    const contactCloseButtons = document.querySelectorAll('[data-contact-close]');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'border-dark-border');
            navbar.classList.remove('border-transparent');
        } else {
            navbar.classList.remove('shadow-lg', 'border-dark-border');
            navbar.classList.add('border-transparent');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    function openContactModal() {
        if (!contactModal) return;
        contactModal.classList.remove('hidden');
        contactModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.add('hidden');
        contactModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    contactOpenButtons.forEach(button => {
        button.addEventListener('click', openContactModal);
    });

    contactCloseButtons.forEach(button => {
        button.addEventListener('click', closeContactModal);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && contactModal && !contactModal.classList.contains('hidden')) {
            closeContactModal();
        }
    });
});
