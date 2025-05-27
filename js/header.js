// let scrollDirection = 'up';
// let prevScrollPos = window.pageYOffset;

// window.addEventListener('scroll', () => {
//   let currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     scrollDirection = 'up';
//   } else {
//     scrollDirection = 'down';
//   }

//   // Скрыть панель при прокрутке вниз
//   if (scrollDirection === 'down') {
//     document.querySelector('.header').style.transform = 'translateY(-100%)';
//   }
//   // Показать панель при прокрутке вверх
//   if (scrollDirection === 'up') {
//     document.querySelector('.header').style.transform = 'translateY(0)';
//   }

//   prevScrollPos = currentScrollPos;
// });
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos >= currentScrollPos) {
    // user has scrolled up
    document.querySelector('.header').classList.remove('hide');
  } else {
    // user has scrolled down
    document.querySelector('.header').classList.add('hide');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
