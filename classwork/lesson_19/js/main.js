window.onload = () => {
  let btn = document.querySelector('#btn');
  let btn2 = document.querySelector('#btn2');
  let input = document.querySelector('#input');
  let input2 = document.querySelector('#input2');
  let message = document.querySelector('#message');
  let text = document.querySelector('#text');

  function result() {
    let inputValue = parseFloat(input.value);
    let inputValue2 = parseFloat(input2.value);
    if(!isNaN(inputValue) && !isNaN(inputValue2)) {
      let sum = (Math.ceil(inputValue + inputValue2)) + '$';
      message.innerHTML = sum;
    }
    else {
      alert('Введены не правильные значения');
    }

  }

  btn.addEventListener('click', () => {
    result()
    // if(isNaN(parseInt(inputValue))) {
    //   alert('вы не ввели данные');
    // }
    // else {
    //   message.innerHTML = parseInt(inputValue);
    // }

    // if(text.value.indexOf(inputValue) >= 1) {
    //   alert('слово найдено');
    // }
    // else {
    //   alert('слово не найдено');
    // }



  })
  let width, height, col;
  function addRec() {
    width = (Math.round() * 100) + 'px';
    height = (Math.round() * 100) + 'px';
    function color() {
      col = Math.random() * 255;
    }
    document.write(`<div style="width:${width}; height:${height}; background-color:rgb(${color()}, ${color()}, ${color()})"></div>`);
  }

  btn2.addEventListener('click', () => {
    addRec();
  })
}
