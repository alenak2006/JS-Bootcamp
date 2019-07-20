'use strict'

const main = document.querySelector('main');
const button = document.querySelector('#first');
//document.body.addEventListener('click', (e) => { console.log(e.target.tagName, e.currentTarget.tagName) });
//main.addEventListener('click', (e) => { console.log(e.target.tagName, e.currentTarget.tagName) });
//button.addEventListener('click', (e) => { console.log(e.target.tagName, e.currentTarget.tagName) });

function bubbling(e) {

    e.myProp = 'here';
    console.log('Bubbling ' + e.currentTarget.tagName + e.myProp);
}

function capture(e) {
    console.log('Capture ' + e.currentTarget.tagName);
}
document.body.addEventListener('click', bubbling);
document.body.addEventListener('click', capture, true);
main.addEventListener('click', bubbling);
main.addEventListener('click', capture), true;
button.addEventListener('click', bubbling);
button.addEventListener('click', capture, true);