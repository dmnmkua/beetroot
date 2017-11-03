function initMap() {
  var options = {
    center: { lat: 46.975, lng: 31.9946 },
    zoom: 15
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
}

window.addEventListener('DOMContentLoaded', () => {
  var btn = document.querySelector('#nav-btn');
  var menu = document.querySelector('#nav-list');
  var logo = document.querySelector('#logo');

  btn.addEventListener('click', function() {
    btn.classList.toggle('nav__btn--show');
    menu.classList.toggle('nav__list--show');
    logo.classList.toggle('logo-wrap--hide');
  });
})
