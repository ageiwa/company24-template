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

        navbarBtnAnimate('close');
    }
    else {
        menuOverlay.style.display = 'block';
        setTimeout(() => {
            header.classList.add('header_menu-open');
            menuOverlay.classList.add('mobile-menu__overlay_open')
            mobileMenu.classList.add('mobile-menu_open');
        }, 0);
        
        navbarBtnAnimate('open');
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

function navbarBtnAnimate(action) {
    const btnLine = document.querySelectorAll('.btn-navbar__line');

    if (action === 'open') {
        btnLine[0].style.left = '16px';
        btnLine[0].style.width = '0';
        btnLine[0].style.height = '0';
        btnLine[0].style.top = '14px';

        btnLine[1].style.transform = 'rotate(45deg)';
        btnLine[2].style.transform = 'rotate(-45deg)';

        btnLine[3].style.left = '16px';
        btnLine[3].style.width = '0';
        btnLine[3].style.height = '0';
        btnLine[3].style.top = '14px';
    }
    else {
        btnLine[0].style.left = '0';
        btnLine[0].style.width = '32px';
        btnLine[0].style.height = '2px';
        btnLine[0].style.top = '0';

        btnLine[1].style.transform = 'rotate(0deg)';
        btnLine[2].style.transform = 'rotate(0deg)';
        
        btnLine[3].style.left = '0';
        btnLine[3].style.width = '32px';
        btnLine[3].style.height = '2px';
        btnLine[3].style.top = '28px';
    }
}