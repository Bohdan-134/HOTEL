import './swiper/main.swiper.js'
import './aos/aos.animation.js'
import './module/check-form.js'
import './vanilla/vanilla.js'
import './gsap/gsap.animation.js'
import { swiperInit } from './swiper/registration-login-swiper.js';

// navigation menu
const navigationList = document.querySelectorAll('.header-navigation__item a');
navigationList.forEach(element => {
    element.addEventListener('click', (e) => {
        return e.preventDefault();
    })
})

export const modalContentErrorHtml = {
    content: '<div class="modal"><div class="messageForm__wrap"><p class="messageForm__text">Oops! Something went wrong</p></div></div>'
}

// error
// const btn = document.querySelectorAll('.btn');

// btn.forEach(element => {
//     element.addEventListener('click', () => {
//         return openModal(modalContentErrorHtml.content)
//     })
// })

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
    registration: `<div class="modal modal-registration-login"><div class="modal-registration-login-navigation"><button id="modal-registration" class="modal__button active">Registration</button><button id="modal-login" class="modal__button">Login</button></div><div class="swiper-container swiper-registration"><div class="swiper-wrapper"><div class="swiper-slide"><form class="registration-form"><input type="tel" placeholder="phone" class="ir-phone"><div class="err-message-ir-phone"></div><input type="password" placeholder="password" class="ir-password"><div class="err-message-ir-password"></div><button class="registration-form__button">Registration</button></form></div><div class="swiper-slide"><form class="login-form"><input type="tel" placeholder="phone"><input type="password" placeholder="password"><button class="login-form__button">Login</button></form></div></div><div class="swiper-pagination"></div></div></div>`,
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


// registration user

function validatePhoneInput() {
    const phoneInput = document.querySelector('.ir-phone');
    const phonePattern = /^\d{10}$/; // Паттерн для проверки телефона (10 цифр)
    const phoneNumber = phoneInput.value.trim();
    const errContainer = document.querySelector('.err-message-ir-phone');

    if (!phonePattern.test(phoneNumber) || /[a-zA-Z]/.test(phoneNumber)) {
        if (!phonePattern.test(phoneNumber)) {
            errContainer.textContent = 'Телефонный номер должен состоять из 10 цифр';
        }
        if (/[a-zA-Z]/.test(phoneNumber)) {
            errContainer.textContent = 'Пожалуйста, введите только цифры для телефонного номера';
        }
        phoneInput.classList.add('invalid');
        return false;
    } else {
        phoneInput.classList.remove('invalid');
        return true;
    }
}

function validatePasswordInput() {
    const passwordInput = document.querySelector('.ir-password');
    const passwordValue = passwordInput.value.trim();
    const errContainer = document.querySelector('.err-message-ir-password');

    if (passwordValue === '' || passwordValue.startsWith(' ')) {
        errContainer.textContent = 'Введите пароль'
        passwordInput.classList.add('invalid');
        return false;
    } else {
        passwordInput.classList.remove('invalid');
        return true;
    }
}

const btnRegistration = document.getElementById('btn-registration');
btnRegistration.addEventListener('click', () => {
    openModal(modalContentHTML.registration);
    swiperInit();
    const registrationBtn = document.querySelector('.registration-form__button');
    registrationBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем отправку формы
        if (validatePhoneInput() && validatePasswordInput()) {
            console.log('aboba');
        }
    });
})