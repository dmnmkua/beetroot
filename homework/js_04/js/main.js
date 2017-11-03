window.onload = () => {
  function ShowTable() {
    let num = document.querySelector('#num').value;
    let crTable = document.createElement('table');
    let crTableRow = document.createElement('tr');
    let crTableData = document.createElement('td');

    if(document.getElementById('table')) {
      let tab = document.getElementById('table');
      tab.parentNode.removeChild(tab);
    }

    crTable.setAttribute('id', 'table');
    crTable.classList.add('table');
    crTableRow.classList.add('table__row');
    crTableData.classList.add('table__data');
    let table = document.body.appendChild(crTable);



    for(let i = 0; i < +num; i++) {
      table.appendChild(crTableRow.cloneNode(true));
      let tableRow = document.querySelectorAll('.table__row');

      for(let j = 0; j < +num; j++) {
        tableRow[i].appendChild(crTableData.cloneNode(true));
        let tableData = document.querySelectorAll('.table__data');
      }
    }

    for(let i = 1; i < +num + 1; i++) {
      for(let j = 1; j < +num + 1; j++) {
        let tableDataNth = document.querySelector(`.table__row:nth-child(${i}) .table__data:nth-child(${j})`);
        tableDataNth.innerHTML = `${i} * ${j} = ${i * j}`;
      }
    }
  }

  let btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    ShowTable();
  })
}
