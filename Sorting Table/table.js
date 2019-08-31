import { Component } from './ui-framework.js';

export function Table(element, title, items) {
    Component.call(this, element);
    this._element = element;
    this._title = title;
    this._items = items;
    this._render();
    this.listArea = this._element.querySelector('ul');
    this._element.querySelector('.table').addEventListener('click', this.sort.bind(this));
}
Table.prototype = Object.create(Component.prototype);
Table.prototype.constructor = Table;

Table.prototype._render = function () {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-hover');
    const thead = createHeader(this._items[0]);
    const tbody = createBody(this._items);

    table.appendChild(thead);
    table.appendChild(tbody);
    this._element.appendChild(table);

    function createHeader(item) {
        const thead = document.createElement('thead');
        const headersKeysArray = Object.keys(item);
        headersKeysArray.forEach((key) => {
            const th = document.createElement('th');
            th.innerHTML = key.toUpperCase();
            th.dataset.type = typeof item[key];
            thead.appendChild(th);
        })
        return thead
    }

    function createBody(items) {
        const tbody = document.createElement('tbody');
        items.forEach((item) => {
            let tr = document.createElement('tr');
            let rowsKeysArr = Object.keys(item);
            rowsKeysArr.forEach((key) => {
                const td = document.createElement('td');
                td.innerHTML = item[key];
                tr.appendChild(td);
            })
            tbody.appendChild(tr);
        })

        return tbody;
    }
}

Table.prototype.sort = function (event) {
    const element = event.target;
    const type = element.dataset.type;
    if (!type) {
        return;
    }

    const table = element.closest('table');
    const tbody = table.querySelector('tbody')
    const rows = [...tbody.querySelectorAll('tr')];
    console.log(rows);
    rows.sort((tr1, tr2) => {
        const [s1el, n1el] = tr1.querySelectorAll('td');
        const [s2el, n2el] = tr2.querySelectorAll('td');
        const a = type === 'string' ? s1el.innerHTML : Number(n1el.innerHTML);
        const b = type === 'string' ? s2el.innerHTML : Number(n2el.innerHTML);
        console.log(a, b);
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0;
    })

    tbody.innerHTML = '';
    tbody.append(...rows);
}


