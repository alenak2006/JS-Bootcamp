let menuElem = document.querySelector('#sweeties');
let titleElem = menuElem.querySelector('.title');
titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};

let tree = document.querySelector('#tree');
// move all text into <span>
// they occupy exactly the place necessary for the text,
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // move the text node into span
}

// catch clicks on whole tree
tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; // no children

    childrenContainer.hidden = !childrenContainer.hidden;
}

let carousel = document.querySelector('#carousel');
/* configuration */
let width = 130; // image width
let count = 3; // visible images count

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function () {
    // shift left
    position += width * count;
    // can't move to the left too much, end of images
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    // shift right
    position -= width * count;
    // can only shift the ribbbon for (total ribbon length - visible count) images
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

let form = document.querySelector('form');
form.onclick = function (event) {
    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);
};