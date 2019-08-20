import { Component } from './ui-framework.js';

export class Menu extends Component {
    constructor(element, title, items) {
        super(element);
        this._element = element;
        this._title = title;
        this._items = items;
        this._render();
        this.dropdownArea = this._element.querySelector('.dropdown-menu');
        this._element.querySelector('button').addEventListener('click', this.toggle.bind(this));
    }
    close() {
        this.dropdownArea.classList.remove('show');
    }
    open() {
        this.dropdownArea.classList.add('show');
    }
    toggle() {

        this.dropdownArea.classList.toggle('show');
    }

    _render() {
        this._element.innerHTML = `
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button">
            ${this._title}
        </button>
        <div class="dropdown-menu">
            ${this._items.map((item) => `<a class="dropdown-item" href="#">${item}</a>`).join('')}
        </div></div>`
    }
}




