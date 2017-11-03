window.onload = function() {
  var btn = document.getElementById('hide-btn');
  var wrapper = document.getElementById('wrapper');


  btn.addEventListener("click", function() {

    wrapper.classList.toggle("wrapper--open");

  })

}
