function clear(elem) {
    //or elem.innerHTML = '';
    while (elem.firstChild) {
        elem.firstChild.remove();
    }

}

let elem = document.getElementById('elem');
clear(elem); // clears the list



