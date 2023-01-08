import './swiper/main.swiper.js'
import './aos/aos.animation.js'
import './module/check-form.js'
import './vanilla/vanilla.js'
import './gsap/gsap.animation.js'

export const modalContentErrorHtml = {
    content: '<div class="modal"><div class="messageForm__wrap"><p class="messageForm__text">Oops! Something went wrong</p></div></div>'
}

// error
const btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('click', () => {
        return openModal(modalContentErrorHtml.content)
    })
})

// sendForm
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const sendEmailForm = document.getElementById('sendEmail');
const input = document.getElementById('input-send-mail');

sendEmailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isEmailValid(input.value)) return openModal(modalContentErrorHtml.content);
    else return false
})

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

// watch video
const btnPlayVideo = document.querySelectorAll('.btn-play-video');

const modalContentHTML = {
    watchVideo: '<div class="modal"><iframe width="700" height="400" src="https://www.youtube.com/embed/2oyvVhq48OA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    mobileMenu: '<div class="modal" id="mobile-menu"><ul class="mobile-menu__list"><li class="mobile-menu__item"> <a href="#">Home</a></li><li class="mobile-menu__item"> <a href="#">Branch</a></li><li class="mobile-menu__item"> <a href="#">Search</a></li><li class="mobile-menu__item"> <a href="#">About Us</a></li><li class="mobile-menu__item"> <a href="#">Pages</a></li><li class="mobile-menu__item"> <a href="#">Blog</a></li></ul></div>',
}

btnPlayVideo.forEach(elem => {
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        return openModal(modalContentHTML.watchVideo)
    })
})

// --- MODAL ---
export function openModal(elem) {
    const wrapModal = document.createElement('div');
    wrapModal.classList.add('modal-wrap');
    wrapModal.innerHTML = elem;
    document.body.append(wrapModal);
    wrapModal.addEventListener('click', closeModal)
}

export function closeModal(e) {
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