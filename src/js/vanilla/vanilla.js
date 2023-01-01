// --- SECTION OUR_SERVICE
const ourServiceItem = document.querySelectorAll('.our-services__item .vanilla__wrap');

VanillaTilt.init(ourServiceItem, {
    reverse: true,
    max: 20,
    perspective: 1000,
    speed: 2000,
    transition: true,
});

// --- SECTION POPULER-ROOM
const populerRoomItem = document.querySelectorAll('.populer-room-item .vanilla__wrap');

VanillaTilt.init(populerRoomItem, {
    reverse: true,
    max: 20,
    perspective: 1000,
    speed: 2000,
    transition: true,
    glare: true
});

// --- SECTION OUR-HISTORY ---

VanillaTilt.init(document.querySelector('.btn-play-video__our-history-wrap .btn-play-video'), {
    reverse: false,
    max: 20,
    perspective: 1000,
    speed: 2000,
    transition: true,
});