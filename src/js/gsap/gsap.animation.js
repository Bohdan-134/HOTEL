gsap.registerPlugin(ScrollTrigger);
const aboutUsRoom = document.querySelector('.about-us__item .room');
const aboutUsRestaurant = document.querySelector('.about-us__item .restaurant');
const aboutUsExceptionalFood = document.querySelector('.about-us__item .exceptional-food');
const aboutUsDestination = document.querySelector('.about-us__item .destination');

function animationGsapCounter(srcElem, toCounter) {
    return gsap.fromTo(srcElem, {
        textContent: 0,
    }, {
        duration: 4,
        ease: "power1.in",
        snap: { textContent: 1 },
        textContent: toCounter,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 70%",
            end: "300% 70%",
            scrub: true,
        }
    });
}

animationGsapCounter(aboutUsRoom, 302);
animationGsapCounter(aboutUsRestaurant, 25);
animationGsapCounter(aboutUsExceptionalFood, 510);
animationGsapCounter(aboutUsDestination, 65);