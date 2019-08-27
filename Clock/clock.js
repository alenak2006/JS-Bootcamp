import { Component } from './ui-framework.js';

export function Clock(element, title) {
    Component.call(this, element);
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
Clock.prototype = Object.create(Component.prototype);
Clock.prototype.constructor = Clock;

//function to start the clock
Clock.prototype.start = function () {
    //if clock is already running then dont start again
    if (this._running) {
        return
    }
    this._timer = setInterval(this._renderTime.bind(this), 1000);
    this._running = true;

}

Clock.prototype.stop = function () {
    //if clock is not running the dont stop
    if (this._running) {
        clearInterval(this._timer);
        this._running = false;
    }
}

Clock.prototype.myalert = function () {
    alert('alert');
}

//function to render clock area
Clock.prototype._render = function () {
    this._element.innerHTML = `
    <h3>${this._title}</h3>
    <div class = "clock-area">
        <span class = 'hour'>00</span>
        <span>:</span>
        <span class = 'min'>00</span>
        <span>:</span>
        <span class = 'sec'>00</span>
    </div>
    <div class = "buttons">
    <input type="button" id = "start" class = "btn btn-success" value="Start">
    <input type="button" id = "stop" class="btn btn-danger" value="Stop">
    <input type="button" id = "myalert" class = "btn btn-info" value="Click here and clock should freeze">
    </div>`
}

//function to render time
Clock.prototype._renderTime = function () {
    let time = new Date();
    this.clockArea.innerHTML = '';
    this.clockArea.innerHTML = ` 
        <span class = 'hour'>
        ${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}
        </span><span>:</span><span class = 'min'>
        ${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
        </span><span>:</span><span class = 'sec'>
        ${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}</span>`
}





