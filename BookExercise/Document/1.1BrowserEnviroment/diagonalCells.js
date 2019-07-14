//select elements from a table where col and row are the same
let table = document.getElementById('table');

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            console.log(table.rows[i].cells[j]);
            table.rows[i].cells[j].style.backgroundColor = 'red';
        }
    }
}
