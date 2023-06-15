import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

export function swiperInit() {
    const swiperRL = new Swiper(".swiper-registration", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        simulateTouch: false,
        breakpoints: {
            700: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 1,
            }
        }
    });
  const registrationButton = document.getElementById('modal-registration');
  const loginButton = document.getElementById('modal-login');

  registrationButton.addEventListener('click', function() {
    if(loginButton.classList.contains('active')) loginButton.classList.remove('active');
    this.classList.add('active');
    swiperRL.slideTo(0);
  });

  loginButton.addEventListener('click', function() {
    if(registrationButton.classList.contains('active')) registrationButton.classList.remove('active');
    this.classList.add('active');
    swiperRL.slideTo(1);
  });

  return swiperRL;
}