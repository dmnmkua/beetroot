window.addEventListener('DOMContentLoaded', () => {

  function SelectBlock() {

    // переменные
    this.list = document.querySelector('.block__list');
    this.item = document.querySelectorAll('.block__item');
    this.blockAttach = document.querySelectorAll('.block__attach');

    // функция создания блока в табах
    createTabBlock_ = (title, text, index) => {
      this.blockTitle = document.createElement('h1');
      this.blockTitle.classList.add('block__attach-title');
      this.blockTitleText = document.createTextNode(title);
      this.blockTitle.appendChild(this.blockTitleText);
      this.blockText = document.createElement('p');
      this.blockText.classList.add('block__attach-desc');
      this.blockTextText = document.createTextNode(text);
      this.blockText.appendChild(this.blockTextText);
      this.blockAttach[index].appendChild(this.blockTitle);
      this.blockAttach[index].appendChild(this.blockText);
    }

    // подгружаем первый блок
    this.blockAttach[0].classList.add('block__attach--preloader');
    this.xhr = new XMLHttpRequest();

    this.xhr.open('GET', `https://ajax-menu.firebaseio.com/ajax2.json`);
    this.xhr.responseType = 'json';

    this.xhr.addEventListener('load', () => {
      this.blockAttach[0].classList.remove('block__attach--preloader');

      if(this.xhr.status === 200 || this.xhr.status === 304) {
        this.data = this.xhr.response;
        createTabBlock_(this.data[0].title, this.data[0].someText, 0);
      }
      else {
        alert(this.xhr.status + " : " + this.xhr.statusText);
      }
    })
    this.xhr.send();

    // функция сброса
    reset_ = () => {
      for(let i = 0; i < this.item.length; i++) {
        if(this.item[i].classList.contains('block__item--active')) {
          this.item[i].classList.remove('block__item--active');
        }
        if(this.blockAttach[i].classList.contains('block__attach--active')) {
          this.blockAttach[i].classList.remove('block__attach--active');
        }
      }
    }

    // события
    event_ = () => {

      // событие по клику на таб
      this.list.addEventListener('click', (e) => {

        reset_();

        if(e.target.tagName === 'LI') {
          for(let i = 0; i < this.item.length; i++) {
            if(e.target === this.item[i]) {
              if(this.blockAttach[i].childNodes.length === 0) {
                this.blockAttach[i].classList.add('block__attach--preloader');
                this.xhr = new XMLHttpRequest();

                this.xhr.open('GET', `https://ajax-menu.firebaseio.com/ajax2.json`);
                this.xhr.responseType = 'json';

                this.xhr.addEventListener('load', () => {
                  this.blockAttach[i].classList.remove('block__attach--preloader');

                  if(this.xhr.status === 200 || this.xhr.status === 304) {
                    this.data = this.xhr.response;
                    createTabBlock_(this.data[i].title, this.data[i].someText, i)
                  }
                  else {
                    alert(this.xhr.status + " : " + this.xhr.statusText);
                  }
                })
                this.xhr.send();
              }

              this.item[i].classList.add('block__item--active');
              setTimeout( () => {
                this.blockAttach[i].classList.add('block__attach--active');
              }, 300);
            }
          }
        }
      })
    }

    init_ = () => {
      event_();
    }

    init_();

  }

  let selectBlock = new SelectBlock();

})
