//Task 1

let obj = {};
function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log(a == b); // true

//Task 2
function Calculator() {
    this.read = function () {
        this.a = +prompt('enter number', 0);
        this.b = +prompt('enter number', 0);
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }

}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//Task 3
function Accumulator(startValue) {
    this.value = startValue;
    this.read = function () {
        this.value += +prompt('add value', 0);

    }

}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

