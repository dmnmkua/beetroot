"use strict";

let percFirst,
    percSecond,
    percThird,
    yearFirst,
    yearSecond,
    yearThird,
    year,
    money,
    perc,
    yearWord,
    sum;

exit: while(true) {
  while(true) {
    money = +prompt('Какую сумму вы хотите положить?', '');

    if(money > 0 && money < 5000) {
      percFirst = 3;
      yearFirst = 1;
      percSecond = 5;
      yearSecond = 3;
      percThird = 10;
      yearThird = 5;
      break;
    }
    else if (money >= 5000 && money < 10000) {
      percFirst = 5;
      yearFirst = 3;
      percSecond = 10;
      yearSecond = 7;
      percThird = 15;
      yearThird = 12;
      break;
    }
    else if (money >= 10000) {
      percFirst = 8;
      yearFirst = 5;
      percSecond = 12;
      yearSecond = 8;
      percThird = 20;
      yearThird = 12;
      break;
    }
    else if (money === 0) {
      break exit;
    }
    else {
      alert('Вы ввели неверную сумму');
    }
  }

  while(true) {
    perc = +prompt(`Введите под какой процент вы хотите положить (${percFirst}, ${percSecond}, ${percThird})`, `${percFirst}`);

    if(perc === percFirst) {
      year = yearFirst;
      break;
    }
    else if (perc === percSecond) {
      year = yearSecond;
      break;
    }
    else if (perc === percThird) {
      year = yearThird;
      break;
    }
    else if (perc === 0) {
      break exit;
    }
    else {
      alert('Не верно указан процент');
    }
  }

  sum = money + money * perc / 100 * year;

  if(year === 1) {
    yearWord = 'года';
  }
  else {
    yearWord = 'лет';
  }
  
  alert(`Спасибо за вклад, по истечению ${year} ${yearWord} вы получите ${sum} грн`);
  break;
}

alert('Спасибо что воспользовались услугами нашего банка');
