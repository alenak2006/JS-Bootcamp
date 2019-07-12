'use strict';

function highlight(table) {
    console.log(table);

    let tbody = table.getElementsByTagName('tbody')[0];
    let trs = tbody.getElementsByTagName('tr');

    let a = 0;
    for (let item in trs) {
        a++;
        consolelog(a);
        console.log(trs[item].cells[3]);
    }
    /*for (let i = 0; i < trs.length; i++) {
      let statusCell = trs[i].cells[3];
      console.log(statusCell);
      if (statusCell.dataset.available) {
        statusCell.addClass('available');
      }
    }*/

    console.log(trs);
}

highlight(document.querySelector('.js-teachers'));

