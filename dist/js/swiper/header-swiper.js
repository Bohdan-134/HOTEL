
import Swiper from'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
let yourNames=['Jan','Feb','Mar','Apr','May','Jun','Jul']
const swiper=new Swiper(".header-slider",{pagination:{el:".swiper-pagination",clickable:true,},paginationBulletRender:function(index,className){return'<span class="'+className+'">'+yourNames[index]+'</span>';}})
const swiperPpagination=document.querySelectorAll('.header-slider .swiper-pagination-bullet');swiperPpagination.forEach((e,index)=>{e.innerHTML=yourNames[index]});