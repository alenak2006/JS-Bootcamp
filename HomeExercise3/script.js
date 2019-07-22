'use strict';
let table = document.querySelector('#board tbody');
table.addEventListener("click", add_X, false);

let button = document.querySelector('button');
button.addEventListener("click", resetBoard, false);

function resetBoard() {
  let tds = table.querySelectorAll('td');
  //let div = document.querySelector('.win .lose');
  count = 0;
  for (const td of tds) {
    td.innerHTML = '';
  }
}

function add_X(e) {
  e.target.innerHTML = 'X';
  add_O();
  detectWinner();
}

let count = 0;
function add_O() {
  let tr = document.querySelectorAll('tr');

  while (count < 4) {
    let randomX = Math.floor(Math.random() * 3);
    let randomY = Math.floor(Math.random() * 3);
    let selectedCell = tr[randomX].cells[randomY];
    console.log(selectedCell);
    if (selectedCell.innerHTML === '') {
      selectedCell.innerHTML = 'O';
      count++;
      console.log(count);
      return;
    }
  }
}

function detectWinner() {
  if (count === 4) {
    table.insertAdjacentHTML("afterend", "<h1>YOU WIN</h1>");
    return;
  }
  table.insertAdjacentHTML("afterend", "<h1 class = 'lose'>COMPUTER WINS</h1>");

}


