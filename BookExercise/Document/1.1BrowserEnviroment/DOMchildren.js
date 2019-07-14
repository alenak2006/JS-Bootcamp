'use strict'

//access first element in body
let div1 = document.body.children[0];
let div2 = document.body.firstElementChild;
let div3 = document.body.childNodes[1];
console.log('first option: ' + div1 + ', second option: ' + div2 + ', third option: ' + div3);

//access sibling
let ul1 = div2.nextElementSibling;
//let ul2 = document.body.lastElementChild;
console.log('first option: ' + ul1);

//access second sibling
let li1 = ul1.children[1];
let li2 = ul1.firstElementChild.nextElementSibling;

console.log('first option: ' + li1 + ', second option: ' + li2);

