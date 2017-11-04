window.addEventListener('DOMContentLoaded', () => {

  function sendAjax(url) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        resolve(xhr.response)
      })
      xhr.addEventListener('error', () => {
        reject('ajax.json');
      })
      xhr.send();
    })
  }

  function renderList(obj, color) {
    for(let key in obj) {
      let listItem = document.createElement('li');
      if(color) listItem.style.color = 'red';
      listItem.textContent += `${key}:${obj[key]}`;
      container.appendChild(listItem);
    }
  }

  btn.addEventListener('click', function() {
    fetch('js/ajax.json').then( resolve => {
      return resolve.json()
    }).then(data => renderList(data, 'green'))
  })

  // btn.addEventListener('click', () => {
  //   sendAjax('js/ajax.json').then(resolve => {
  //     renderList(resolve);
  //     return resolve;
  //   }).then( resolve => {
  //     renderList(resolve, 'red');
  //   })
  // })



})
