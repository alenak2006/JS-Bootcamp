'use strict'

function abc(arg) {
    console.log(this + ' ' + arg);
}

abc('test');

var person = {
    name: "Brendan Eich",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
}

var boundHello = function (thing) { return person.hello.call(person, thing); }

boundHello.call(window, "test");
boundHello("world");
person.hello.call(person, 'test2');
var bind = function (func, thisValue) {
    return function () {
        return func.apply(thisValue, arguments);
    }
}

var boundHello2 = bind(person.hello, person);
boundHello2("world2")

var boundHello3 = person.hello.bind(person);
boundHello3("world") // "Brendan Eich says hello world"

let panes = document.querySelectorAll('.pane');
function removePane(e) {
    e.target.closest('div').remove();
}

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    // button becomes the first child of pane
    //pane.firstChild.onclick = () => pane.remove();
}

let div = document.querySelector('#container');
div.addEventListener('click', removePane);