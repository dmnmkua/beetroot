$(document).ready(function() {
  $('.tab-btn').on('click', function(e) {
    $('.tab-content').hide();
    var anc = $(this).attr('href');
    console.log(anc);
    $(anc).show();
  })
})
