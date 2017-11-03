$(function() {

  var headerElement = $('.header');
  var headerHeight = $('.header').innerHeight();

  var navElement = $('.nav__item');
  var section = $('.section');


  $(document).on('scroll', function(event) {

    if ($(this).scrollTop() > headerHeight && $(this).scrollTop() > 150) {
      headerElement.addClass('header--fixed');
      $('body').css('paddingTop', headerHeight + 'px')
    }
    else if($(this).scrollTop() > headerHeight) {
      headerElement.addClass('header--hide');
    }
    else {
      headerElement.removeClass('header--hide')
    }

    if($(this).scrollTop() < 150) {
      headerElement.removeClass('header--fixed');
      $('body').css('paddingTop', '0');
    }


    var headerOffSet = headerElement.offset().top

    for(var i = 0; i < section.length; i++) {
      if(headerOffSet >= $(section[i]).offset().top) {
        var attrId = $(section[i]).attr('Id');
        navElement.removeClass('current');
        $('a[href^="#' + attrId + '"]').closest('.nav__item').addClass('current');
      }
    }


  })

  $('nav a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var anchor = $(this).attr('href');
    var offTop = $(anchor).offset().top;

    $('html, body').animate({
      scrollTop: offTop
    }, 1000)
  })

  var navItem = $('.nav__item');
  var navSecList = $('.nav__secList');

  

  // $(headerElement).hover(function() {
  //   $(headerElement).css({
  //     'opacity': '1',
  //     'height': '100%'
  //   })
  // }, function() {
  //   $(headerElement).css({
  //     'opacity': '0',
  //     'height': '0'
  //   })
  // })

})
