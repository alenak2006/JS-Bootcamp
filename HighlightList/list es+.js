import { Component } from './ui-framework es+.js';

export class List extends Component {
    constructor(element, title, items) {
        super(Component);
        this._element = element;
        this._title = title;
        this._items = items;
        this._prev = null;
        this._render();
        this.listArea = this._element.querySelector('ul');
        this.listArea.addEventListener('click', this.highlight.bind(this));
        this._element.querySelector('#myalert').addEventListener('click', this.getSelected.bind(this));

    }
    _render() {
        this._element.innerHTML = `
        <h3>${this._title}</h3>
        <div class = "list-area"><ul class = "list-group">
        ${this._items.map((item, index) => `<li class = "list-group-item" data-id = "${index}">${item}</li>`).join('')}
        </ul>
        </br>   
        <button id = "myalert" class = "btn btn-info">Click to get selected items</button>
        </div>`
    }

    highlight(event) {
        let lis = this.listArea.querySelectorAll('li');
        let li = event.target.closest('li');
        let currentID = li.dataset.id;
        //if element is not <li> then ignore click
        if (!li) {
            return;
        }

        //if this is the first click then add 'selected' class and save as previous element
        if (!this._prev) {
            li.classList.add('active');
            this._prev = currentID;
            return;
        }

        //if CTRL key pressed then toggle every clicked element
        if (event.metaKey || event.ctrlKey) {
            li.classList.toggle('active');
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
                lis[li].classList.add('active');
            }
        }

        //if any other key pressed  
        if (!event.metaKey && !event.ctrlKey && !event.shiftKey) {
            //if clicked element is already selected then unselect all
            if (li.matches('li.active')) {
                lis.forEach(element => {
                    element.classList.remove('active');
                });
                //if clicked element is not selected then select it and clear all other selections 
            } else {
                lis.forEach(element => {
                    element.classList.remove('active');
                });
                li.classList.add('active');
            }
        }

        //save ID of the processed element
        this._prev = currentID;
    }

    getSelected() {
        let lis = [...this.listArea.querySelectorAll('li')];
        alert(lis.filter((element) => {
            return element.matches('.active')
        }).map((element) => { return element.innerHTML }).join(', '));
    }
}







