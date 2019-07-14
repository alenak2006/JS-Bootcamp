//select elements from a table where col and row are the same
let table = document.getElementById('table');

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}
