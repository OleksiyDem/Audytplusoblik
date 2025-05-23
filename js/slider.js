var swiper = new Swiper('.swiper-services', {
  // Optional parameters
  // чи буде слайдер безкінечним
  loop: true,

  // Default parameters к-ть слайдів на екрані
  slidesPerView: 1,

  // відстань між слайдами, px
  spaceBetween: 20,

  // Responsive breakpoints (mobile-first)
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});

var swiper = new Swiper('.swiper-customers', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 2000,
  },

  // Default parameters к-ть слайдів на екрані
  slidesPerView: 1,

  // grid: {
  //   rows: 2,
  // },

  // відстань між слайдами, px
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
    },
  },
});
