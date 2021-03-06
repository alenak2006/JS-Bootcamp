import { Component } from './ui-framework.js';

export function Menu(element, title, items) {
    Component.call(this, element);
    this._element = element;
    this._title = title;
    this._items = items;
    this._render();
    this.dropdownArea = this._element.querySelector('.dropdown-menu');
    this._element.querySelector('button').addEventListener('click', this.toggle.bind(this));
}
Menu.prototype = Object.create(Component.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.close = function () {
    this.dropdownArea.classList.remove('show');
}

Menu.prototype.open = function () {
    this.dropdownArea.classList.add('show');
}
Menu.prototype.toggle = function () {

    this.dropdownArea.classList.toggle('show');
}

Menu.prototype._render = function () {
    this._element.innerHTML = `
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button">
        ${this._title}
    </button>
    <div class="dropdown-menu">
        ${this._items.map((item) => `<a class="dropdown-item" href="#">${item}</a>`).join('')}
    </div></div>`
}




