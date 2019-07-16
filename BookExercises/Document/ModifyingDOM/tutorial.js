//Methods to  new Nodes
//1. document.createElement(tag)
//2. document.createTextNode(value)
//3. elem.cloneNode(deep) 
// let div1 = document.createElement('div');
// div1.className = "alert alert-success";
// div1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.className = 'alert alert-success';
div2.innerHTML = '<b>Hi there</b>This is an important message.'
document.body.appendChild(div2);



//let textNode = document.createTextNode('here ii is');

//Methods to insert/delete from parent
//old ways
//1. parentElem.appendChild(node) - appends as last child
//2. parentElem.insertBefore(node, nextSibling) - insersts before nextSibling into parent
//3. parentElem.replaceChild(node, oldChild)
//4. parentElem.removeChild(node)


//new ways
//1. node.append(...nodes or strings) – append nodes or strings at the end of node,
//2. node.prepend(...nodes or strings) – insert nodes or strings into the beginning of node,
//3. node.before(...nodes or strings) –- insert nodes or strings before the node,
//4. node.after(...nodes or strings) –- insert nodes or strings after the node,
//5. node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.


//ol.before('before');
//ol.after('after');

let ol = document.querySelector('ol');
ol.before('before');
ol.after('after');

let prepend = document.createElement('li');
prepend.innerHTML = 'prepend';
ol.prepend(prepend);

let append = document.createElement('li');
append.innerHTML = 'append';
ol.append(append);

//6. elem.insertAdjacentHTML/Text/Element (where, html) - it is similar to the one above but HTML inserted instead of element
//document.body.insertAdjacentHTML("afterbegin", `<div class="alert alert-success"> <strong>Hi there!</strong> You've read an important message. </div>`);

//Cloning Nodes
//elem.cloneNode(true) clone with children
//elem.cloneNode(false) clone without children
/*let div = document.querySelector('div');
let div2 = div.cloneNode(true); // clone the message
div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone
div.after(div2); // show the clone after the existing div
*/
//Also can use document fragment - it is a wrapper to hold a list of nodes
function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 1; i <= 3; i++) {
        let li = document.createElement('li');
        li.append(i);
        fragment.append(li);
    }

    return fragment;
}
let ul1 = document.getElementById('ul1');
ul1.append(getListContent());

function getListContent2() {
    let result = [];

    for (let i = 1; i <= 3; i++) {
        let li = document.createElement('li');
        li.append(i + 5);
        result.push(li);
    }

    return result;
}
let ul2 = document.getElementById('ul2')
ul2.append(...getListContent2());

//removal methods
//parentElem.removeChild(node)
//node.remove()
//all insertion methods automatically remove old nodes from its place so no need to remove them after the move




