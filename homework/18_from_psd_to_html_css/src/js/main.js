"use strict";

window.onload = function() {
  let btn = document.querySelector('#btn');
  let menu = document.querySelector('#menu');

  btn.addEventListener('click', function() {
    menu.classList.toggle('nav__list--open');
  })
}
