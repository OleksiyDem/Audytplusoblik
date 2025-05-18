const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// у файлі mobile-menuBtnClose.js
// const disableScroll = () =>
//   document.body.classList.toggle('is-scroll-disabled');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnOpen.addEventListener('click', disableScroll);
modalBtnClose.addEventListener('click', disableScroll);
