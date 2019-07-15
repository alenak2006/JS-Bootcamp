'use strict';

function highlight(table) {
  let tbody = table.getElementsByTagName('tbody')[0];
  let trs = tbody.getElementsByTagName('tr');

  for (let i = 0; i < trs.length; i++) {
    let row = trs[i];
    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let statusCell = row.cells[3];

    //add available/unavailable class to the row based on a value in Status column and data attribute and apply attribute hidden if unavailable
    if (statusCell.dataset.available) {
      row.classList.add('available');
    } else {
      row.classList.add('unavailable');
      row.hidden = true;
    }

    //add male/female class to the row based on a value in Gender column
    (genderCell.innerText === 'm') ? row.classList.add('male') : row.classList.add('female');

    //add style based on on a value in Age column
    if (+ageCell.innerText < 18) {
      row.style.textDecoration = "line-through"
    }
  }
}

highlight(document.querySelector('.js-teachers'));

