document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.site-header__toggle');
    const navMenu = document.querySelector('.site-nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            navMenu.classList.toggle('site-nav--active');
            menuToggle.classList.toggle('site-header__toggle--active');
        });
    }

    // 2. Smooth Scroll & Menüyü Kapatma
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Mobilde menüyü kapat
                if (navMenu && navMenu.classList.contains('site-nav--active')) {
                    navMenu.classList.remove('site-nav--active');
                    menuToggle.classList.remove('site-header__toggle--active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // 3. Sponsor Slider Duraklatma
    const sliderTrack = document.querySelector('.sponsors__track');
    
    if (sliderTrack) {
        sliderTrack.addEventListener('mouseenter', () => {
            sliderTrack.style.animationPlayState = 'paused';
        });
        
        sliderTrack.addEventListener('mouseleave', () => {
            sliderTrack.style.animationPlayState = 'running';
        });
    }
});