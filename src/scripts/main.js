'use strict';
function handleFormSubmit(e) {
  e.preventDefault();
}

const btn = document.querySelector('.form-contact__button');
btn.addEventListener('click', handleFormSubmit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-content--with-menu');
  } else {
    document.body.classList.remove('page-content--with-menu');
  }
});
