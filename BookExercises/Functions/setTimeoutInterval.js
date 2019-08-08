//Task 1 Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to
function printNumbersTimeout(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000)
}


function printNumbersInterval(from, to) {
    let current = from;
    let timerID = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timerID);
        }
        current++;
    }, 1000)


}


printNumbersTimeout(3, 10);
printNumbersInterval(4, 12)

