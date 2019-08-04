'use strict'
//Tasks 1
function sum(a) {
    return function (b) {
        return a + b;
    }
}

sum(2)(4);
sum(5)(-1);

//Tasks 2
function makeBuffer() {
    let str = '';
    return function (value) {
        if (value) {
            str += ' ' + value;
            return str.trim();
        }
        console.log(str);
    }
}

var buffer = makeBuffer();
buffer('test');
buffer('another');
buffer('rule');
buffer();

//Task 3
function makeBuffer2() {
    let str = '';
    function buffer(value) {
        if (value) {
            str += ' ' + value;
            return str.trim();
        }
        console.log(str);
    }
    buffer.clear = function () {
        str = '';
    }
    return buffer;
}

var buffer2 = makeBuffer2();
buffer2('test');
buffer2('another');
buffer2('rule');
buffer2();

//Task 4
//filter thorugh function
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x > a && x < b;
    };
}

console.log(arr.filter(inBetween(1, 5)));

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    }
}

console.log(arr.filter(inArray([1, 5, 44])));

//Task 5
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

/*function byField(prop) {
    return function (a, b) {
        return a[prop] > b[prop] ? 1 : -1;
    }
}
*/

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
users.sort(byField('name'));

//Task 6
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // shooter function

            alert(j); // should show its number
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
  // ... all shooters show 10 instead of their 0, 1, 2, 3...
