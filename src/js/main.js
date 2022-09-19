// swiper

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

let yourNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    paginationBulletRender: function(index, className) {
        return '<span class="' + className + '">' + yourNames[index] + '</span>';
    }
})

swiper.slideNext();

const swiperPpagination = document.querySelectorAll('.swiper-pagination-bullet');

swiperPpagination.forEach((e, index) => {
    e.innerHTML = yourNames[index]
});

const modalContentHTML = {
    watchVideo: '<div class="modal"><iframe width="700" height="400" src="https://www.youtube.com/embed/2oyvVhq48OA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    mobileMenu: '<div class="modal" id="mobile-menu"><ul class="mobile-menu__list"><li class="mobile-menu__item"> <a href="#">Home</a></li><li class="mobile-menu__item"> <a href="#">Branch</a></li><li class="mobile-menu__item"> <a href="#">Search</a></li><li class="mobile-menu__item"> <a href="#">About Us</a></li><li class="mobile-menu__item"> <a href="#">Pages</a></li><li class="mobile-menu__item"> <a href="#">Blog</a></li></ul></div>',
}

// watch video

const btnWatchVideo = document.getElementById('btn-watch-video');

btnWatchVideo.addEventListener('click', () => openModal(modalContentHTML.watchVideo));

function openModal(elem) {
    const wrapModal = document.createElement('div');
    wrapModal.classList.add('modal-wrap');
    wrapModal.innerHTML = elem;
    document.body.append(wrapModal);
    wrapModal.addEventListener('click', closeModal)
}

function closeModal(e) {
    const modalWrap = document.querySelector('.modal-wrap');
    const modal = document.querySelector('div.modal');
    const click = e.composedPath().includes(modal);
    if (!click) {
        modalWrap.classList.add('animation-close-modal');
        setTimeout(() => {
            modalWrap.remove();
        }, 1400)
    }
}

//mobile-menu

const btnOpenMenu = document.getElementById('mobile-menu-open');

btnOpenMenu.addEventListener('click', () => openModal(modalContentHTML.mobileMenu));