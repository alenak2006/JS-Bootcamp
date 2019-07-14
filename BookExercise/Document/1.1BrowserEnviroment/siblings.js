let elem = document.body.lastChild;

//this always returns null regardless of element selected
//elem lastChild is always the last one and it has no next siblings
//console.log(elem.lastChild.nextSibling);

//this doesnt always return null because of extra non-element nodes(line feeds, tabs)
//console.log(elem.children[0].previousSibling);

