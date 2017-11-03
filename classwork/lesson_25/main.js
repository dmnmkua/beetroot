window.addEventListener('DOMContentLoaded', init_);

function init_() {

  function Menu() {

    this.nav = document.querySelector('.nav');

    event_ = () => {
      this.nav.addEventListener('mouseover', e => {
        if(e.target.closest('li').children.length > 1) {
          e.target.closest('li').children[1].classList.add('nav__list2--show')
        }
      })

      this.nav.addEventListener('mouseout', e => {
          if(this.nav.querySelectorAll('.nav__list2--show')) {
            for(let i = 0; this.nav.querySelectorAll('.nav__list2--show'); i++) {
              this.nav.querySelectorAll('.nav__list2--show')[i].classList.remove('nav__list2--show');
            }
          }
      })
    }

    init_ = () => {
      event_();
    }

    init_()

  }

  let menu = new Menu();

}
