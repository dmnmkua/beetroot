window.addEventListener('DOMContentLoaded', () => {

  function SelectBlock() {

    // переменные
    const list = document.querySelector('.block__list'),
          item = document.querySelectorAll('.block__item'),
          blockAttach = document.querySelectorAll('.block__attach'),
          block1 = document.querySelector('#block_1'),
          block2 = document.querySelector('#block_2'),
          block3 = document.querySelector('#block_3');

    // функция создания блока в табах
    createTabBlock_ = (title, text, index) => {
      let blockTitle = document.createElement('h1');
      blockTitle.classList.add('block__attach-title');
      let blockTitleText = document.createTextNode(title);
      blockTitle.appendChild(blockTitleText);
      let blockText = document.createElement('p');
      blockText.classList.add('block__attach-desc');
      let blockTextText = document.createTextNode(text)
      blockText.appendChild(blockTextText);
      blockAttach[index].appendChild(blockTitle);
      blockAttach[index].appendChild(blockText);
    }

    // подгружаем первый блок
    blockAttach[0].classList.add('block__attach--preloader');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ajax-menu.firebaseio.com/ajax2.json`);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
      blockAttach[0].classList.remove('block__attach--preloader');

      if(xhr.status === 200 || xhr.status === 300) {
        let data = xhr.response;
        createTabBlock_(data[0].title, data[0].someText, 0);
      }
      else {
        alert(xhr.status + " : " + xhr.statusText);
      }
    })
    xhr.send();

    // функция сброса
    reset_ = () => {
      for(let i = 0; i < item.length; i++) {
        if(item[i].classList.contains('block__item--active')) {
          item[i].classList.remove('block__item--active');
        }
        if(blockAttach[i].classList.contains('block__attach--active')) {
          blockAttach[i].classList.remove('block__attach--active');
        }
      }
    }

    // события
    event_ = () => {

      // событие по клику на таб
      list.addEventListener('click', (e) => {

        reset_();

        if(e.target.tagName === 'LI') {
          for(let i = 0; i < item.length; i++) {
            if(e.target === item[i]) {
              if(blockAttach[i].childNodes.length === 0) {
                blockAttach[i].classList.add('block__attach--preloader');
                let xhr = new XMLHttpRequest();
                xhr.open('GET', `https://ajax-menu.firebaseio.com/ajax2.json`);
                xhr.responseType = 'json';

                xhr.addEventListener('load', function() {
                  blockAttach[i].classList.remove('block__attach--preloader');

                  if(xhr.status === 200 || xhr.status === 300) {
                    let data = xhr.response;
                    createTabBlock_(data[i].title, data[i].someText, i)
                  }
                  else {
                    alert(xhr.status + " : " + xhr.statusText);
                  }
                })
                xhr.send();
              }

              item[i].classList.add('block__item--active');
              setTimeout( () => {
                blockAttach[i].classList.add('block__attach--active');
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
