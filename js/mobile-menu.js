const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
// const menuBtnClose1 = document.querySelector('.menu-btn-close1');
// const menuBtnClose2 = document.querySelector('.menu-btn-close2');
// const menuBtnClose3 = document.querySelector('.menu-btn-close3');
// const menuBtnClose4 = document.querySelector('.menu-btn-close4');
// const menuBtnClose5 = document.querySelector('.menu-btn-close5');
// const menuBtnClose6 = document.querySelector('.menu-btn-close6');
// const menuBtnClose7 = document.querySelector('.menu-btn-close7');
// const menuBtnClose8 = document.querySelector('.menu-btn-close8');
// const menuBtnClose9 = document.querySelector('.menu-btn-close9');
// const menuBtnClose10 = document.querySelector('.menu-btn-close10');
// const menuBtnClose11 = document.querySelector('.menu-btn-close11');
// const menuBtnClose12 = document.querySelector('.menu-btn-close12');
// const menuBtnClose13 = document.querySelector('.menu-btn-close13');
// const menuBtnClose14 = document.querySelector('.menu-btn-close14');
// const menuBtnClose15 = document.querySelector('.menu-btn-close15');
// const menuBtnClose16 = document.querySelector('.menu-btn-close16');
// const menuBtnClose17 = document.querySelector('.menu-btn-close17');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
// menuBtnClose1.addEventListener('click', toggleMenu);
// menuBtnClose2.addEventListener('click', toggleMenu);
// menuBtnClose3.addEventListener('click', toggleMenu);
// menuBtnClose4.addEventListener('click', toggleMenu);
// menuBtnClose5.addEventListener('click', toggleMenu);
// menuBtnClose6.addEventListener('click', toggleMenu);
// menuBtnClose7.addEventListener('click', toggleMenu);
// menuBtnClose8.addEventListener('click', toggleMenu);
// menuBtnClose9.addEventListener('click', toggleMenu);
// menuBtnClose10.addEventListener('click', toggleMenu);
// menuBtnClose11.addEventListener('click', toggleMenu);
// menuBtnClose12.addEventListener('click', toggleMenu);
// menuBtnClose13.addEventListener('click', toggleMenu);
// menuBtnClose14.addEventListener('click', toggleMenu);
// menuBtnClose15.addEventListener('click', toggleMenu);
// menuBtnClose16.addEventListener('click', toggleMenu);
// menuBtnClose17.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
// menuBtnClose1.addEventListener('click', disableScroll);
// menuBtnClose2.addEventListener('click', disableScroll);
// menuBtnClose3.addEventListener('click', disableScroll);
// menuBtnClose4.addEventListener('click', disableScroll);
// menuBtnClose5.addEventListener('click', disableScroll);
// menuBtnClose6.addEventListener('click', disableScroll);
// menuBtnClose7.addEventListener('click', disableScroll);
// menuBtnClose8.addEventListener('click', disableScroll);
// menuBtnClose9.addEventListener('click', disableScroll);
// menuBtnClose10.addEventListener('click', disableScroll);
// menuBtnClose11.addEventListener('click', disableScroll);
// menuBtnClose12.addEventListener('click', disableScroll);
// menuBtnClose13.addEventListener('click', disableScroll);
// menuBtnClose14.addEventListener('click', disableScroll);
// menuBtnClose15.addEventListener('click', disableScroll);
// menuBtnClose16.addEventListener('click', disableScroll);
// menuBtnClose17.addEventListener('click', disableScroll);
