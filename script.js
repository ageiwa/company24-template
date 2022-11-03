window.addEventListener('scroll', (e) => {
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

