window.onload = () => {
  const firstTask = document.querySelector('#first-task');
  const secondTask = document.querySelector('#second-task');

  function findWord() { // Функция поиска члов в тексте
    let str = prompt('Введите текст', ''); // запись текста в переменную

    while(true) { // цикл запроса искомых слов
      let word = prompt('Введите искомое слово', ''); // запись искомого слова в переменную

      if (word === null) { // если нажали esc то завершает функцию
        break;
      }
      else if (word === "") { // если пустая строка, то просит ввести еще раз
        continue;
      }
      else if(str.toLowerCase().indexOf(word) === -1) { // если слово найдено
        alert('Искомое слово не найдено');
      }
      else { // если слово не найдено
        alert('Искомое слово найдено');
      }
    }

  }

  function pow() { // функция возведения числа в степень
    let num = prompt('Введите число', ''); // ввод числа
    let deg = prompt('Введите степень', ''); // ввод возводимой степени

    if(!isNaN(+num) && !isNaN(+deg)) { // если значения - числа
      let result = 1;
      for(var i = 0; i < deg; i++) {
        result *= num;
      }
      alert(result); // вывод результата
    }
    else { // если значения - не числа
      alert('неверно введены значения');
    }

  }

  firstTask.addEventListener('click', findWord); // вызов первой функции

  secondTask.addEventListener('click', pow); // вызов второй функции
}
