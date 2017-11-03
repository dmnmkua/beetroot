$(function () {

    if ($('.slider__list').length) {

        let imgUrl = [
            'http://www.soulshepherding.org/wp-content/uploads/2012/08/trail-prayer-walk-400x200.jpg',
            'http://www.daytripsfromsplit.com/wp-content/uploads/2014/05/bluelagooncroatia1-400x200.jpg',
            'http://naturecolombia.com/wp-content/uploads/2017/04/Tepuyes-at-Nuevo-Tolima-Guaviare-400x200.jpg'
        ]

        const container = $('.slider__list');
        for(let i = 0; i < imgUrl.length; i++) {
          container.append(`<li class="slider__item"><img src="${imgUrl[i]}"></li>`)
        }

        container.slick({
          
        });
    }
})
