import { Component } from './ui-framework es+.js';

export class Clock extends Component {
    constructor(element, title) {
        super(Component);
        this._element = element;
        this._title = title;
        this._timer = false;
        this._running = false;
        this._render();
        this.clockArea = this._element.querySelector('.clock-area');
        this._element.querySelector('#start').addEventListener('click', this.start.bind(this));
        this._element.querySelector('#stop').addEventListener('click', this.stop.bind(this));
        this._element.querySelector('#myalert').addEventListener('click', this.myalert.bind(this));
    }

    //function to start the clock
    start() {
        //if clock is already running then dont start again
        if (!this._running) {
            this._timer = setInterval(() => { this._renderTime() }, 1000);
            this._running = true;
        }
    }
    //function to stop the clock
    stop() {
        //if clock is not running the dont stop
        if (this._running) {
            clearInterval(this._timer);
            this._running = false;
        }
    }
    myalert() {
        alert('alert');
    }

    //function to render clock area
    _render() {
        this._element.innerHTML = `
        <h3>${this._title}</h3>
        <div class = "clock-area">
            <span class = 'hour' style="color: green">00</span>
            <span>:</span>
            <span class = 'min' style="color: blue">00</span>
            <span>:</span>
            <span class = 'sec' style="color: red">00</span>
        </div>
        <div class = "buttons">
        <input type="button" id = "start" class = "btn btn-success" value="Start">
        <input type="button" id = "stop" class="btn btn-danger" value="Stop">
        <input type="button" id = "myalert" class = "btn btn-info" value="Click here and clock should freeze">
        </div>`
    }

    //function to render time only
    _renderTime() {
        let time = new Date();
        this.clockArea.innerHTML = '';
        this.clockArea.innerHTML = ` 
            <span class = 'hour' style="color: green">
            ${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}
            </span><span>:</span><span class = 'min' style="color: blue">
            ${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
            </span><span>:</span><span class = 'sec' style="color: red">
            ${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}</span>`
    }

}






