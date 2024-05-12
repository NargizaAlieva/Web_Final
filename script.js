let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
  login.classList.toggle('active');
  cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  cart.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  grabCursor:true,
  loop: true,
  centeredSlides:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper(".menu-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },
});