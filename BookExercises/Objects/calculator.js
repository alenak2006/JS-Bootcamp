
function Calculator() {
    this.read = function () {
        this.a = Number(prompt("Please enter a", 0));
        this.b = Number(prompt("Please enter b", 0));

    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    }
}



/*let calculator = {
    read: function () {
        this.a = Number(prompt("Please enter a", 0));
        this.b = Number(prompt("Please enter b", 0));

    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};
*/

const calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

