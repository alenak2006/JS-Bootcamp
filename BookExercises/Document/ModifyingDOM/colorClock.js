function createClock(elem) {
    elem.innerHTML = '';
    let time = new Date();
    elem.insertAdjacentHTML("beforeend", "<span id = 'hour'></span><span>:</span><span id = 'min'></span><span>:</span><span id = 'sec'></span>");

    let [hours, min, sec] = [time.getHours(), time.getMinutes(), time.getSeconds()];
    document.querySelector('#hour').innerHTML = (hours < 10) ? '0' + hours : hours;
    document.querySelector('#min').innerHTML = (min < 10) ? '0' + min : min;
    document.querySelector('#sec').innerHTML = (sec < 10) ? '0' + sec : sec;
}

let elem = document.querySelector('#clock');
let clock = setInterval(createClock, 1000, elem);

let start = document.querySelector('#start');
start.onclick = function () {
    clock = setInterval(createClock, 1000, elem);
}

let stop = document.querySelector('#stop');
stop.onclick = function () {
    clearInterval(clock);
}