window.addEventListener('DOMContentLoaded', init_);

function init_() {


  function Menu() {

    this.active = document.querySelector('.active');
    this.nav = document.querySelector('.nav');
    this.activeItem = document.querySelector('.active--item')

    openMenu_ = () => {
      if(!this.active.classList.contains('active--show')) {
        this.active.classList.add('active--show');
      }
    }

    closeMenu_ = () => {
      this.active.classList.remove('active--show');
      // if(this.activeItem.classList.contains('active--item')) {
      //
      //   console.log(true);
      // }
      // else {
      //
      //   console.log(false);
      // }
    }

    event_ = () => {
      this.activeItem.addEventListener('mouseover', event => {
        openMenu_();
      })

      this.activeItem.addEventListener('mouseout', event => {
        closeMenu_();
      })
    }

    init_ = () => {
      event_();
    }

    init_();
  }

  let menu = new Menu();
}
