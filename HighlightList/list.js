import { Component } from './ui-framework.js';

export function List(element, title, items) {
    Component.call(this, element);
    this._element = element;
    this._title = title;
    this._items = items;
    this._render();
    this.listArea = this._element.querySelector('ul');
    this.listArea.addEventListener('click', this.highlight.bind(this));

}
List.prototype = Object.create(Component.prototype);
List.prototype.constructor = List;


//function to render clock area
List.prototype._render = function () {
    this._element.innerHTML = `
    <h3>${this._title}</h3>
    <div class = "list-area"><ul>
    ${this._items.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    </div>`
}

List.prototype.highlight = function (event) {
    let li = event.target.closest('li')
    if (event.metaKey || event.ctrlKey) {
        li.classList.add('selected');
    } else if (e.shiftKey) {

    } else {
        this.listArea.querySelectorAll('li').forEach(element => {
            element.classList.remove('selected');
        });
        li.classList.add('selected');
    }
}





