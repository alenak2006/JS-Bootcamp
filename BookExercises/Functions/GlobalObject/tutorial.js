//closure
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
btn1.addEventListener('click', counter(btn1.id));
btn2.addEventListener('click', counter(btn2.id));

function counter(elem) {
    let count = 0;
    return () => {

        count++;
        console.log(elem + ' ' + count);
    }
}

function makeCounter() {
    function counter2() {

        return counter2.count;
    }
    counter2.count = 1;
    return counter2;
}

makeCounter();

//[[scope]] when function is called lexical scope object created with refence to the enviroment which created it
//this how function is able to find lexically variables it needs, by chaining [[scope]]
// new Function - always has refernce on window

var next = 12;

function getNext() {
    var next = 5;
    let func = new Function('', 'console.log(next)');
    return func;
}
console.log(getNext()());

//return object
function ladder() {
    let steps = 0;
    function countSteps() {
        return steps++;
    }

    countSteps.set = function (value) {
        steps = value;
    }

    countSteps.reset = function () {
        steps = 0;
    }

    return countSteps;
}



