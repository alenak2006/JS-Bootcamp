//Searching examples
//1. document.getElementById()
// this is if element with ID elem exists: alert(elem); or alert([elem])

//2. elem.querySelectorAll(css) static collection 
//   elem.querySelector(css) which returns only the first result from the query
let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
    console.log(elem.innerHTML); // "test", "passed"
}

//3. elem.matches(css) returns bool

for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
        console.log("The archive reference: " + elem.href);
    }
}

//4. elem.closest(css) - nearest ancestor 
let chapter = document.querySelector('.chapter'); // LI

console.log(chapter.closest('.book')); // UL
console.log(chapter.closest('.contents')); // DIV
console.log(chapter.closest('ul')); // null (because h1 is not an ancestor)

//5. Other methods:
// elem.getElementsByTagName(tag) live collection by tag, tag can be "*" for “any tags”.
// elem.getElementsByClassName(className) live collection by CSS class.
// document.getElementsByName(name) live collection by the given name attribute
let table = document.getElementById("table");
let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
    console.log(input.value + ': ' + input.checked);
}

//6 elemA.contains(elemB)

//Exercise
//1 - element by ID
let agetable = document.getElementById('age-table');
console.log(agetable);

//2 - All label elements
let labels = agetable.getElementsByTagName('label');
// or document.querySelectorAll('#age-table label')
console.log(labels);

//3 - the first <td>
let firsttd = agetable.querySelector('td');
// or table.rows[0].cells[0]
// or table.getElementsByTagName('td')[0]
console.log(firsttd);

//4 - form by name
let formSearch = document.querySelectorAll('form[name="search"]');
console.log(formSearch);

//5 - first input
let firstinput = document.querySelector('form[name="search"] input:first-child');
console.log(firstinput);

//6 - last child
let lastinput = document.querySelector('form[name="search"] input:last-child');
console.log(lastinput);