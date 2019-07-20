let elem = document.querySelector('ul :first-child');
elem.insertAdjacentHTML("afterend", '<li>2</li><li>3</li>');


let table = document.querySelector('#tables');
console.log(table);
console.log(table.rows);

let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);
