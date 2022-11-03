const navbarBtn = document.querySelector('.header__btn-navbar');

navbarBtn.addEventListener('click', () => {
    const menuOverlay = document.querySelector('.mobile-menu__overlay');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuOverlay.classList.contains('mobile-menu__overlay_open')) {
        setTimeout(() => {
            menuOverlay.classList.remove('mobile-menu__overlay_open');
            menuOverlay.style.display = 'none';
        }, 350);

        mobileMenu.classList.remove('mobile-menu_open');
    }
    else {
        menuOverlay.style.display = 'block';
        setTimeout(() => {
            menuOverlay.classList.add('mobile-menu__overlay_open')
            mobileMenu.classList.add('mobile-menu_open');
        }, 0);
        
    }
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    if (window.pageYOffset > 70) {
        header.classList.add('header_fixed');
        content.classList.add('content_header-fixed');
    }
    else {
        header.classList.remove('header_fixed');
        content.classList.remove('content_header-fixed');
    }
});