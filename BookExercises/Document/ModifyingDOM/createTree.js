var data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};


function createTree(container, data) {
    container.append(getData(data));
}

function getData(data) {
    //if there are no children then return
    if (!Object.keys(data).length) return;

    let ul = document.createElement('ul');

    for (let item in data) {
        let li = document.createElement('li');
        li.innerHTML = item;

        let childrenUl = getData(data[item])
        if (childrenUl) {
            li.append(childrenUl);
        }
        ul.append(li);
    }
    return ul;
}

function createTree2(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // standalone recursive function
    let li = '';
    let ul;
    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

let container = document.getElementById('container');
createTree(container, data);

let container2 = document.getElementById('container2');
createTree2(container2, data);