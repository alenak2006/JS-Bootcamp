//0.0.0 Object
//1.0.0 EventTarget - support for events
//1.1.0 Node - provides common DOM node properties, tree fucntionality(getters): nextSibling
//1.1.1 Text
//1.1.2 Element - provides generic element methods, getters for Element: nextElementSibling, searching methods
//1.1.3 Comment
//1.1.2.1 - HMTLElement -base for HTML elements
//1.1.2.2 - XMLElement
//1.1.2.3 - SVGElement

//Object HTMLElement => HTMLInputElement, HTMLBodyElement, HTMLAnchorElement etc  Each of them have their own properties
//use this to read properties
console.dir(document.body);
console.log(document.body);

//elem.nodeType => 1 Element, 2 Text, 9 Document Object
let elem = document.body;

// let's examine what it is?
console.log(elem.nodeType); // 1 => element

// and the first child is...
console.log(elem.firstChild.nodeType); // 3 => text
console.log(elem.firstElementChild.nodeType); // 1 => element
// for the document object, the type is 9
console.log(document.nodeType); // 9

//Propeties nodeName and tagName(for Elements only)

//innerHTML if changed will return changed HTML
let chatDiv = document.querySelector('div');
console.log(chatDiv.innerHTML);
chatDiv.innerHTML += "<div>Hello</div>";
chatDiv.innerHTML += "How goes?";
console.log(chatDiv.innerHTML);

//outerHMTL if changed still will return original HTML
let outerElem = document.querySelector('div');
console.log(outerElem.outerHTML);
outerElem.outerHTML = '<p>This is new</p>';
console.log(outerElem.outerHTML);

//nodeValue and data properties for non-Element nodes
let text = document.body.firstChild;
console.log(text.data);
let comment = text.nextSibling;
console.log(comment.data);

//textContent - text inside the element without tags
let heading = document.querySelector('h1');
console.log(heading.textContent);
heading.textContent = '<b>New</b>';
console.log(heading.textContent);
heading.innerHTML = '<b>New</b>';
console.log(heading.textContent);

//hidden property - visibilty of the element
let hiddenEl = document.querySelector('#hide');
hiddenEl.hidden = false;





