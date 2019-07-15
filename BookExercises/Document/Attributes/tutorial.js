//DOM properties
//elem.hasAttribute(name) – checks for existence.
//elem.getAttribute(name) – gets the value.
//elem.setAttribute(name, value) – sets the value.
//elem.removeAttribute(name) – removes the attribute.

//elem.attributes - this will read all attributes into a collection
//Attributes is what's written in HTML - contains strings, not case sensitive
//Properties are set in the DOM objects - contains any type, case sensitive

let user = {
    name: "Pete",
    age: 25
};

for (let div of document.querySelectorAll('[show-info]')) {
    // insert the corresponding info into the field
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // Pete, then age
}