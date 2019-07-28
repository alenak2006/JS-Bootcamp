//1. mouse events: click, contextmenu, mouseover
//2. form events: submit, focus
//3. keyboard events: keyup, keydown
//4. document events: DOMContentLoaded
//5. css events: transitioned

//element.addEventListener(event, handler[, options]);
//options
//once: if true, then the listener is automatically removed after it triggers.
//capture: the phase where to handle the event
//passive: if true, then the handler will not preventDefault()

//Event object
//event.type
//event.currentTarget == this(element itself, exeption arrow function, bind to something else
//event.clientX / event.clientY)  - window coordinates

//Task1
let button = document.querySelector('#b1');
button.addEventListener('click', handleClick);

function handleClick() {
    let div = document.querySelector('#text');
    //div.remove();
    div.hidden = true;
}

//Task2
let button2 = document.querySelector('#b2');
button2.addEventListener('click', handleClick2);

function handleClick2(e) {
    //e.currentTarget.remove();
    e.currentTarget.hidden = true;
}

