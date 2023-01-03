
import Swiper from'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiperOurCustomers=new Swiper(".our-customers__swiper",{slidesPerView:1,spaceBetween:30,centeredSlides:true,initialSlide:2,autoHeight:true,pagination:{el:".our-customers-swiper-pagination",clickable:true,},breakpoints:{1000:{slidesPerView:3,}}});