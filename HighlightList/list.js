import { Component } from './ui-framework.js';

export function List(element, title, items) {
    Component.call(this, element);
    this._element = element;
    this._title = title;
    this._items = items;
    this._prev = null;
    this._render();
    this.listArea = this._element.querySelector('ul');
    this.listArea.addEventListener('click', this.highlight.bind(this));
}
List.prototype = Object.create(Component.prototype);
List.prototype.constructor = List;

List.prototype._render = function () {
    this._element.innerHTML = `
    <h3>${this._title}</h3>
    <div class = "list-area"><ul>
    ${this._items.map((item, index) => `<li data-id = "${index}">${item}</li>`).join('')}
    </ul>
    </div>`
}

List.prototype.highlight = function (event) {
    let lis = [...this.listArea.querySelectorAll('li')];
    let li = event.target.closest('li');
    let currentID = li.dataset.id;
    //if element is not <li> then ignore click
    if (!li) {
        return;
    }

    //if this is the first click then add 'selected' class and save as previous element
    if (!this._prev) {
        li.classList.add('selected');
        this._prev = currentID;
        return;
    }

    //if CTRL key pressed then toggle every clicked element
    if (event.metaKey || event.ctrlKey) {
        li.classList.toggle('selected');
    }

    //if SHIFT key pressed then select all elements between 'previous' clicked and 'current' clicked
    if (event.shiftKey) {
        //if previous element higher than current then swap for the iteration
        if (this._prev > currentID) {
            let temp = this._prev;
            this._prev = currentID;
            currentID = temp;
        }
        //add class to the selected range
        for (let li = this._prev; li <= currentID; li++) {
            lis[li].classList.add('selected');
        }
    }

    //if any other key pressed  
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey) {
        //if clicked element is already selected then unselect all
        if (li.matches('li.selected')) {
            lis.forEach(element => {
                element.classList.remove('selected');
            });
            //if clicked element is not selected then select it but clear all other selections 
        } else {
            lis.forEach(element => {
                element.classList.remove('selected');
            });
            li.classList.add('selected');
        }
    }

    //save ID of the processed element
    this._prev = currentID;
}





