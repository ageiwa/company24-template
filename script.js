const navbarBtn = document.querySelector('.header__btn-navbar');

navbarBtn.addEventListener('click', () => {
    const header = document.querySelector('.header');
    const menuOverlay = document.querySelector('.mobile-menu__overlay');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuOverlay.classList.contains('mobile-menu__overlay_open')) {
        setTimeout(() => {
            menuOverlay.classList.remove('mobile-menu__overlay_open');
            menuOverlay.style.display = 'none';
            header.classList.remove('header_menu-open');
        }, 350);

        mobileMenu.classList.remove('mobile-menu_open');
    }
    else {
        menuOverlay.style.display = 'block';
        setTimeout(() => {
            header.classList.add('header_menu-open');
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

const accordeonItems = document.querySelectorAll('.accordeon__item');

accordeonItems.forEach(item => {
    item.addEventListener('click', () => openAnswer(item));
});

function openAnswer(item) {
    const answer = item.lastElementChild;
    const arrow = item.firstElementChild.lastElementChild;

    if (answer.classList.contains('accordeon__answer_open')) {
        answer.classList.remove('accordeon__answer_open');
        arrow.classList.remove('quest__arrow-icon_to-up');

        closeAnswer();
    }
    else {
        closeAnswer();

        answer.classList.add('accordeon__answer_open');
        arrow.classList.add('quest__arrow-icon_to-up');
    }
}

function closeAnswer() {
    const answers = document.querySelectorAll('.accordeon__answer_open');
    const arrows = document.querySelectorAll('.quest__arrow-icon_to-up');

    answers.forEach(answer => answer.classList.remove('accordeon__answer_open'));
    arrows.forEach(arrow => arrow.classList.remove('quest__arrow-icon_to-up'));
}