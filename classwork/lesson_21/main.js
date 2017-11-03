window.addEventListener('DOMContentLoaded', init_);

function init_() {

    function Navigation(navObj) {

        this.btn = document.getElementById(navObj.btnId);
        this.nav = document.getElementById(navObj.navigationId);
        this.overlay = document.createElement('div');
        this.start;

        this.openNav_ = () => {
            document.body.appendChild(this.overlay);
            setTimeout( () => this.nav.classList.add(navObj.activeNavClass), 200);
        }

        this.hideNav_ = event => {

            if( document.querySelector(`.${navObj.overlayClass}`) && event.keyCode === 27 || event.type === 'click' ) {
                this.nav.classList.remove(navObj.activeNavClass);
                setTimeout( () => document.body.removeChild(this.overlay), 200);
            }
        }



        // stack events function
        this.events_ = () => {
            this.btn.addEventListener('click', this.openNav_);
            this.overlay.addEventListener('click', this.hideNav_);
            window.addEventListener('keyup', this.hideNav_);
        }

        // root function
        this.init_ = () => {

            this.events_();
            this.overlay.classList.add(navObj.overlayClass);
        }
        this.init_();
    }

    const nav = {
        btnId: 'nav-btn',
        navigationId: 'navigation',
        activeNavClass: 'active-navigation',
        overlayClass: 'overlay'
    }

    const offCanvas = new Navigation(nav);

    function Slider(config) {
        let params = {
            autoplay: true,
            inf: true
        }

        for( let key in config ) {
            params[key] = config[key];
        }
        console.log(params, config)


        this.sliderWrap = document.querySelector('.slider')
        this.container = document.querySelector('.slider__list');
        this.sliderItem = document.querySelectorAll('.slider__item');
        this.sliderItemLength = this.sliderItem.length;
        this.move;
        this.containerWidth = 0;
        this.nowPos = 0;
        this.perItemWidth = this.sliderItem[0].clientWidth;
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');
        this.controlList = document.querySelector('.dots__list');

        this.createDots_ = () => {
          this.crDotsEl = document.createElement('li');
          this.crDotsEl.classList.add('dots__item');
          this.controlList.appendChild(this.crDotsEl);
        }

        this.addDots_ = () => {
          for(let i = 0; i < this.sliderItem.length; i++) {
            this.createDots_();
          }
          this.controlItem = document.querySelectorAll('.dots__item');
          this.controlItem[0].classList.add('dots__item--active');
        }

        this.addDots_();

        this.dotsReset_ = () => {
          if(document.querySelector('.dots__item--active')) {
            document.querySelector('.dots__item--active').classList.remove('dots__item--active');
          }
        }

        this.moveWrap = () => {
            this.move =  setInterval( this.moveNext_, 2000);
        }

        this.moveNext_ = () => {
            if( this.containerWidth - this.perItemWidth > this.nowPos ) {
                this.nowPos += this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            } else {
                this.nowPos = 0;
                this.container.style.left = `-${this.nowPos}px`;
            }
            this.dotsReset_();
            this.controlItem[this.nowPos / this.perItemWidth].classList.add('dots__item--active');
        }
        this.movePrev_ = () => {
            if( this.nowPos > 0 ) {
                this.nowPos -= this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            } else {
                this.nowPos = this.containerWidth - this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            }
            this.dotsReset_();
            this.controlItem[this.nowPos / this.perItemWidth].classList.add('dots__item--active');
        }
        this.controlDots_ = () => {
          if(event.target.tagName === 'LI') {
            this.dotsReset_();
            for(let i = 0; i < this.controlItem.length; i++) {
              if(event.target === this.controlItem[i]) {
                this.container.style.left = -this.perItemWidth * i + 'px';
                this.controlItem[i].classList.add('dots__item--active');
              }
              // if(this.pos / this.containerWidth === i) {
              //   this.controlItem[i].classList.add('dots__item--active');
              // }
            }
          }
        }

        this.events_ = () => {
            if( params.autoplay === true ) {
               this.sliderWrap.addEventListener('mouseover', () => clearInterval(this.move) );
               this.container.addEventListener( 'mouseleave', () => this.moveWrap() );
            }
            this.next.addEventListener('click', this.moveNext_);
            this.prev.addEventListener('click', this.movePrev_);
            this.controlList.addEventListener('click', this.controlDots_);

        }

        this.start_ = (el) => {

            this.sliderItem.forEach( el => this.containerWidth += el.clientWidth );
            this.container.style.width = `${this.containerWidth}px`;

            if( params.autoplay === true )  this.moveWrap();
        }

        this.init_ = () => {
            this.events_();
            this.start_();
        }
        this.init_();
    }

    const slider = new Slider({
        autoplay: false
    });

}
