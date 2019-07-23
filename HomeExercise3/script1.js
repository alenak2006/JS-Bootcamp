'use strict';
let table = document.querySelector('#board tbody');
table.addEventListener("click", play);
let message = document.querySelector('#message');
let button = document.querySelector('button');
button.addEventListener("click", resetBoard);

function play(event) {
    //1. Add X
    const elem = event.target;
    addX(elem);

    //2. Check if X is a winner
    console.log(isWinner());
    if (isWinner()) {
        message.innerHTML = "YOU WIN";
        message.classList.add("win");
        return;
    }

    //3. Check if Board is full
    if (isBoardFull()) {
        message.innerHTML = "IT IS A DRAW";
        message.classList.add("draw");
        return;
    }

    //4. Add O
    addO();

    //5. Check if O is a winner
    console.log(isWinner());
    if (isWinner()) {
        message.innerHTML = "YOU LOSE";
        message.classList.add("lose");
        return;
    }

    //6. Check if Board is full
    if (isBoardFull()) {
        message.innerHTML = "IT IS A DRAW";
        message.classList.add("draw");
        return;
    }
}

function addX(elem) {
    elem.innerHTML = 'X';
}

function isWinner() {
    const rows = [...table.querySelectorAll('tbody tr')];
    if (rows[0].cells[0].innerHTML === rows[0].cells[1].innerHTML && rows[0].cells[1].innerHTML === rows[0].cells[2].innerHTML && rows[0].cells[1].innerHTML != "") { console.log('me1'); return true }
    else if (rows[1].cells[0].innerHTML === rows[1].cells[1].innerHTML && rows[1].cells[1].innerHTML === rows[1].cells[2].innerHTML && rows[1].cells[1].innerHTML != "") { console.log('me2'); return true }
    else if (rows[2].cells[0].innerHTML === rows[2].cells[1].innerHTML && rows[2].cells[1].innerHTML === rows[2].cells[2].innerHTML && rows[2].cells[1].innerHTML != "") { console.log('me3'); return true }
    else if (rows[0].cells[0].innerHTML === rows[1].cells[0].innerHTML && rows[1].cells[0].innerHTML === rows[2].cells[0].innerHTML && rows[1].cells[0].innerHTML != "") { console.log('me4'); return true }
    else if (rows[0].cells[1].innerHTML === rows[1].cells[1].innerHTML && rows[1].cells[1].innerHTML === rows[2].cells[1].innerHTML && rows[1].cells[1].innerHTML != "") { console.log('me5'); return true }
    else if (rows[0].cells[2].innerHTML === rows[1].cells[2].innerHTML && rows[1].cells[2].innerHTML === rows[2].cells[2].innerHTML && rows[1].cells[2].innerHTML != "") { console.log('me6'); return true }
    else if (rows[0].cells[0].innerHTML === rows[1].cells[1].innerHTML && rows[1].cells[1].innerHTML === rows[2].cells[2].innerHTML && rows[1].cells[1].innerHTML != "") { console.log('me7'); return true }
    else if (rows[0].cells[2].innerHTML === rows[1].cells[1].innerHTML && rows[1].cells[1].innerHTML === rows[2].cells[0].innerHTML && rows[1].cells[1].innerHTML != "") { console.log('me8'); return true }
    return false

}

function isBoardFull() {
    const rows = [...table.querySelectorAll('tbody tr')];
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (!rows[i].cells[j].innerHTML) {
                return false;
            }
        }
    }
    return true;
}

function addO() {
    const rows = [...table.querySelectorAll('tbody tr')];
    do {
        let randomX = Math.floor(Math.random() * 3);
        let randomY = Math.floor(Math.random() * 3);
        var cell = rows[randomX].cells[randomY];
        if (!rows[randomX].cells[randomY].innerHTML) {
            cell.innerHTML = 'O';
            break;
        }
    } while (rows)
}

function resetBoard() {
    const rows = [...table.querySelectorAll('tbody tr')];
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 3; j++) {
            rows[i].cells[j].innerHTML = "";
        }
    }
    message.innerHTML = "LET'S PLAY";
    message.removeAttribute("class");
}



