
import Swiper from'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiperOurNews=new Swiper(".our-news__swiper",{slidesPerView:1,loop:true,spaceBetween:30,centeredSlides:true,autoHeight:true,autoplay:true,pagination:{el:".our-news-swiper-pagination",clickable:true,},breakpoints:{1000:{slidesPerView:3,}}});