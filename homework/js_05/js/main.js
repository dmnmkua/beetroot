window.onload = () => {

  let btn = document.getElementById('btn');
  let overlay = document.getElementById('overlay');
  let list = document.getElementById('list');

  btn.addEventListener('click', () => {
    overlay.classList.toggle('overlay--show');
    list.classList.toggle('nav__list--show');
  })
  overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay--show');
    list.classList.toggle('nav__list--show');
  })

  function getEl() {
    // объявляем переменные
    let arr,
        arr2 = [],
        arr3 = [];

    // получаем коллекцию всех элементов в body
    arr = document.body.getElementsByTagName('*');

     // создаем массив из всех тегов в body
    for(let i = 0; i < arr.length; i++) {
      arr2.push(arr[i].tagName.toLowerCase());
    }

    // сортируем массив
    arr2 = arr2.sort();

    // записываем уникальные элементы в новый массив
    for(let i = 0; i < arr2.length; i++) {
      if(arr2[i] !== arr2[i-1]) {
        arr3.push(arr2[i])
      }
    }

    // вставляем на страницу список
    let crOl = document.createElement('ol');
    let ol = document.body.appendChild(crOl);
    ol.classList.add('ol--style');

    // ищем колличество уникальных элементов
    arr3.forEach(function(item, i) {
      let count = 0;
      arr2.forEach(function(item2, i2) {
        if(item === item2) {
          count++;
        }
      })

      // создаем пункты меню
      let crLi = document.createElement('li');
      let crText = document.createTextNode(`Тэгов "${item}" на странице: ${count}`);

      // вставляем пункты в созданный список с описанием
      crLi.appendChild(crText);
      ol.appendChild(crLi);
    })
  }

  // вызываем функцию
  getEl();

}
