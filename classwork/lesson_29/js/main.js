window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const container = document.getElementById('container');

  btn.addEventListener('click', () => {
    preloader.classList.remove('hide--preloader');
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://ajax-menu.firebaseio.com/ajax.json')
    xhr.responseType = 'json';
    xhr.addEventListener('load', function() {
      preloader.classList.add('hide--preloader');
        console.log(xhr.response);
        let data = xhr.response;
        for({link,title} of data) {
          console.log(link, title);
          let img = document.createElement('img');
          img.setAttribute('src', link);
          img.setAttribute('title', title);
          container.appendChild(img);
        }
    })
    xhr.send();




    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'list.json');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   // console.log('ответ получен', xhr.responseText);
    //   // let data = JSON.parse(xhr.responseText); // JSON.parse преобразовавыет входящие данные из текста в объект
    //   let data = xhr.response;
    //   for(let i = 0; i < data.length; i++) {
    //     let div = document.createElement('div');
    //     div.textContent = data[i].name;
    //     container.appendChild(div)
    //   }
    // })
    //
    // xhr.send();
  })
})
