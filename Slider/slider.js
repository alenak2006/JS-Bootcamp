import { Component } from './ui-framework.js';

export function Slider(element) {
    Component.call(this, element);
    this._element = element;
    this._thumb = this._element.querySelector('.thumb')
    this._element.addEventListener('mousedown', this.onMousedown.bind(this));
}

Slider.prototype = Object.create(Component.prototype);
Slider.prototype.constructor = Slider;

let sliderCoords = 0;
let thumbCoords = 0;
let shiftX = 0;

Slider.prototype.onMousedown = function () {
    if (this._thumb) {
        thumbCoords = this._thumb.getBoundingClientRect();
        shiftX = event.clientX - thumbCoords.left;
        sliderCoords = this._element.getBoundingClientRect();
        this._element.addEventListener('mousemove', this.onMousemove.bind(this));
        this._element.addEventListener('mouseup', this.onMouseup.bind(this));

        return false;
    }
}

Slider.prototype.onMousemove = function (event) {
    let newLeft = 0;
    newLeft = event.clientX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
        newLeft = 0;
    }
    var rightEdge = this._element.offsetWidth - this._thumb.offsetWidth;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }

    this._thumb.style.left = newLeft + 'px';
}

Slider.prototype.onMouseup = function () {
    this._element.removeEventListener('mousemove', this.onMousemove.bind(this));
    //this._element.removeEventListener('mousedown', this.onMousedown.bind(this));
}









