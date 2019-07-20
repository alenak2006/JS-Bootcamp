'use strict';

function highlight(table) {
  let tbody = table.querySelector('tbody');
  let trs = tbody.querySelectorAll('tr');

  for (let i = 0; i < trs.length; i++) {
    let row = trs[i];
    let [ageCell, genderCell, statusCell, rowClass] = [Number(row.cells[1].innerText), row.cells[2].innerText, row.cells[3].dataset.available, row.classList];

    //add available/unavailable class to the row based on a value in Status column and data attribute
    //apply attribute hidden if data is unavailable
    if (statusCell) {
      if (statusCell.toLowerCase() === "true") {
        rowClass.add('available');
      } else if (statusCell.toLowerCase() === "false") {
        rowClass.add('unavailable');
      }
    } else {
      row.hidden = true;
    }

    //add male/female class to the row based on a value in Gender column
    if (genderCell) {
      if (genderCell.toLowerCase() === 'm') {
        rowClass.add('male');
      } else if (genderCell.toLowerCase() === 'f') {
        rowClass.add('female');
      }
    }

    //add style based on on a value in Age column
    if (!isNaN(ageCell)) {
      if (ageCell < 18) {
        row.style.textDecoration = "line-through";
      }
    }
  }
}

highlight(document.querySelector('.js-teachers'));

