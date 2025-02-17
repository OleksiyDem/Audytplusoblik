const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuBtnClose1 = document.querySelector('.menu-btn-close1');
const menuBtnClose2 = document.querySelector('.menu-btn-close2');
const menuBtnClose3 = document.querySelector('.menu-btn-close3');
const menuBtnClose4 = document.querySelector('.menu-btn-close4');
const menuBtnClose5 = document.querySelector('.menu-btn-close5');
const menuBtnClose6 = document.querySelector('.menu-btn-close6');
const menuBtnClose7 = document.querySelector('.menu-btn-close7');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuBtnClose1.addEventListener('click', toggleMenu);
menuBtnClose2.addEventListener('click', toggleMenu);
menuBtnClose3.addEventListener('click', toggleMenu);
menuBtnClose4.addEventListener('click', toggleMenu);
menuBtnClose5.addEventListener('click', toggleMenu);
menuBtnClose6.addEventListener('click', toggleMenu);
menuBtnClose7.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
menuBtnClose1.addEventListener('click', disableScroll);
menuBtnClose2.addEventListener('click', disableScroll);
menuBtnClose3.addEventListener('click', disableScroll);
menuBtnClose4.addEventListener('click', disableScroll);
menuBtnClose5.addEventListener('click', disableScroll);
menuBtnClose6.addEventListener('click', disableScroll);
menuBtnClose7.addEventListener('click', disableScroll);
