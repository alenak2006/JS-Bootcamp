function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += Number(prompt("Enter value ", 0));
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values