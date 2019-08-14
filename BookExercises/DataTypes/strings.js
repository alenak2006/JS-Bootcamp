//indexOf - substr to search for and pos
"this is is a atring".indexOf('is', 7);
"this is is a atring".indexOf('ix', 7); //-1 not found

//implement map

// function triple(value) {
//     return value * 5;
// }

// Array.prototype.map = function (func) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(func(this[i]));

//     }
//     return newArr;
// }

// let arr = [12, 4, 34, 2, 4, 6, 2, 100];
// console.log(arr.map(triple));

//filter

// var arr = ['hello', 42, true, function () { }, "123", 3.14, 0, [1], {}, 322, 12];

// var isInteger = function (value) {
//     return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value);
// };

// Array.prototype.filter = function (func) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (func(this[i])) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };

// var newArr = arr.filter(isInteger);
// console.log(newArr);

// var arr = [0, 1, 2, 3, 4];

// var sum = function (total, value) {
//     return total + value;
// };

// Array.prototype.reduce = function (func, initValue) {
//     let acc = initValue;
//     for (let i = 0; i < this.length; i++) {
//         acc = func(acc, this[i]);
//     }
//     return acc;
// };

// var total = arr.reduce(sum, 0);
// console.log(total);

// function hasFalsyValue(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             return hasFalsyValue(obj[key]);
//         } else {
//             if (!obj[key]) return true;
//         }
//     }
//     return false;
// }

// const obj1 = { name: 'test', func: function () { console.log('testing..') }, surname: 'pete', addr: { street: 'test', number: 23, post: 'test', type: { a: 'test', b: 'test' } } }
// hasFalsyValue(obj1);

//call
// var notArr;

// function populateNotArr() {
//     notArr = arguments;
//     let str = ''
//     for (var i = 0; i < arguments.length; i++) {
//         str += notArr[i];
//     }
//     return str;
// }
// let newArr = ['JS', ' ', 'is', ' ', 'awesome!'];
// console.log(populateNotArr('Hello', ',', ' ', 'world', '!', 'ads'))

// console.log(notArr);
// var acc = Array.prototype.reduce.call(notArr, (x, y) => x + y, '');
// console.log(acc);


// var acc1 = newArr.reduce((x, y) => x + y, '');
// console.log(acc1);


// Write a function below that takes two arguments and console.logs their concatenation.
// Then use bind() and the function that you wrote to create a greeting function
// that takes a name as input and greets the name

// function concats(greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}`);
//     }
// }

// let greeting = concats('Hello');
// greeting('Alena');
// greeting('Tommy');

// let goodbye = concats('Goodbye');
// goodbye('Troy');
function concat(x, y) { return console.log(x + y); }
var greet = concat.bind(null, 'Hello, ');
greet('Pete');


//callback
function coinToss(guess, callback) {
    var result = Math.round(Math.random());
    var didWin = (guess === result);
    callback(didWin);
}

function getUser(callback) {
    var user = {
        firstName: 'John',
        lastName: 'Doe',
        guess: Math.round(Math.random())
    };
    callback(user);
    console.log(user.name);
}

// getUser(function(user) {
//     coinToss(user.guess, function(didWin) {
//         if (didWin) {
//             console.log('Congrats, you won!');
//         } else {
//             console.log('Sorry, you lost');
//         }
//     });
// });

getUser(cb1);
function cb1(user) {
    coinToss(user.guess, cb2);
}

function cb2(didWin) {
    if (didWin) {
        console.log('Congrats, you won!');
    } else {
        console.log('Sorry, you lost');
    }
}

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 0);
}

for (var i = 0; i < 5; i++) {
    setTimeout((function () { console.log(i); })(i), 0);
}

//Task 1
function upperCase(str) {

    if (str && typeof str === 'string') {
        //return str[0].toUpperCase() + str.substr(1);
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
}

let str = 'hello this is me';
console.log(upperCase(str));

//Task 2
function checkSpam(str) {
    let temp = str.toUpperCase();
    if (temp.includes('VIAGRA') || temp.includes('XXX'))
        return true;
    return false;

}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//Task 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

//Task 4
function extractCurrencyValue(str) {
    return Number(str.replace(/[^0-9]/g, ''));
}

console.log(extractCurrencyValue('$120'));





