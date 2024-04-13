var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var homeproduct = new Swiper(".home-product-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    700: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });