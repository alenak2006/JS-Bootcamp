
alert('Add more items?');
let input = prompt('Add more items?', '');
let ul = document.getElementById('ul3');

while (input) {
    let li = document.createElement('li');
    li.innerHTML(input);
    li.append(li);
    ul.appendChild(li);

}


