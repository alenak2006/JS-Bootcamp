'use strict';
const BOARD_SIZE = 3;
let table = document.querySelector('#board tbody');
table.addEventListener("click", play);
let board = new Array(BOARD_SIZE);

//create board
function createBoard() {
  for (var i = 0; i < board.length; i++) {
    board[i] = new Array(2);
  }
}
createBoard();

//check ifthe board is full - if all values are truthy then board is full
function isBoardFull() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (!board[i][j]) {
        return false;
      }
    }
  }
  return true;
}

//add values to the board array
function addValue() {
  if (!isBoardFull()) {
    const rows = [...table.querySelectorAll('tbody tr')];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = rows[i].cells[j].dataset.value;
      }
    }
  }
}

function play(event) {
  //add X
  const el = event.target;
  el.innerHTML = 'X';
  el.setAttribute('data-value', 'X');
  //add X to dataset
  addValue();
  let winner = checkWinner();
  if (winner) return winner;

  //add O
  if (!isBoardFull()) {
    const rows = [...table.querySelectorAll('tbody tr')];
    do {
      let randomX = Math.floor(Math.random() * 3);
      let randomY = Math.floor(Math.random() * 3);
      var cell = rows[randomX].cells[randomY];
      if (!cell.dataset.value) {
        cell.innerHTML = 'O';
        cell.setAttribute('data-value', 'O');
        //add O to dataset
        addValue();
        let winner = checkWinner();
        if (winner) return winner;
        break;
      }
    } while (rows)
  }
}

function checkWinner() {

  if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) return board[0][0]
  else if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) return board[1][0]
  else if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) return board[2][0]
  else if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) return board[0][0]
  else if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) return board[0][1]
  else if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) return board[0][2]
  else if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]
  else if (board[2][0] === board[1][1] && board[1][1] === board[2][0]) return board[2][0]
}







let button = document.querySelector('button');
button.addEventListener("click", resetBoard, false);

function resetBoard() {
  let tds = table.querySelectorAll('td');
  //let div = document.querySelector('.win .lose');
  //count = 0;
  for (const td of tds) {
    td.innerHTML = '';
    td.removeAttribute('data-value');
  }
}







// let count = 0;
// function add_O() {
//   let tr = document.querySelectorAll('tr');

//   while (count < 4) {
//     let randomX = Math.floor(Math.random() * 3);
//     let randomY = Math.floor(Math.random() * 3);
//     let selectedCell = tr[randomX].cells[randomY];
//     console.log(selectedCell);
//     if (selectedCell.innerHTML === '') {
//       selectedCell.innerHTML = 'O';
//       count++;
//       console.log(count);
//       return;
//     }
//   }
// }

// function detectWinner() {
//   if (count === 4) {
//     table.insertAdjacentHTML("afterend", "<h1>YOU WIN</h1>");
//     return;
//   }
//   table.insertAdjacentHTML("afterend", "<h1 class = 'lose'>COMPUTER WINS</h1>");

// }


