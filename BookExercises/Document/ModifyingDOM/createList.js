
'use strict'
let ul = document.getElementById('ul3');
let input = prompt('Add more items?', '');

while (input) {
    let li = document.createElement('li');
    li.textContent = input;
    ul.append(li);

    input = prompt('Add more items?', '');

}


