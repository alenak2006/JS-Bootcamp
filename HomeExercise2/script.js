'use strict';

function highlight(table) {
  let tbody = table.querySelector('tbody');
  let trs = tbody.querySelectorAll('tr');

  for (let i = 0; i < trs.length; i++) {
    let row = trs[i];
    let ageCell = Number(row.cells[1].innerText);
    let genderCell = row.cells[2].innerText;
    let statusCell = row.cells[3].dataset.available;

    //add available/unavailable class to the row based on a value in Status column and data attribute and apply attribute hidden if unavailable
    if (statusCell) {
      if (statusCell.toLowerCase() === "true") {
        row.classList.add('available');
      } else if (statusCell.toLowerCase() === "false") {
        row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }

    //add male/female class to the row based on a value in Gender column
    if (genderCell) {
      if (genderCell.toLowerCase() === 'm') {
        row.classList.add('male')
      } else if (genderCell.toLowerCase() === 'f') {
        row.classList.add('female');
      }
    }

    //add style based on on a value in Age column
    if (!isNaN(ageCell)) {
      if (ageCell < 18) {
        row.style.textDecoration = "line-through"
      }
    }
  }
}

highlight(document.querySelector('.js-teachers'));

