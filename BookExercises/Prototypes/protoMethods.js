'use strict'

// function User(firstName, lastName, age) {
//     const _salary = Symbol('_salary');
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     User.instanceCount++;
//     Object.defineProperty(this, 'salary', {
//         get() {
//             return `£${this[_salary] || 0}`;
//         },
//         set(salary) {
//             this[_salary] = salary;
//         },
//         enumerable: true
//     })
// }

// User.prototype.getName = function () {
//     return this.firstName + ' ' + this.lastName;
// }
// User.instanceCount = 0;
// User.prototype.getCount = function () {
//     return User.instanceCount;
// }




// let u1 = new User('alena', 'kaleda', 38);
// let u2 = new User('tom', 'farris', 40);

// console.log(u1);
// console.log(u2);

// // fully identical shallow clone of obj
// let obj = {
//     type: 'test',
//     map: {
//         a: 'string', b: 23, c: {
//             aa: 'aa',
//             bb: 23,
//             cc: function () { }
//         }
//     },
//     age: 23,
//     log: function () { }
// }
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// console.log(JSON.stringify(clone));

//Task 1
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
})

//add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

//Task 2
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

console.log(rabbit.sayHi()); // Rabbit - only here this is set to rabbit
console.log(Rabbit.prototype.sayHi()); // undefined this Object  - Rabbit.prototype
console.log(Object.getPrototypeOf(rabbit).sayHi()); // undefined this Object  - Object.getPrototypeOf(rabbit)
console.log(rabbit.__proto__.sayHi()); // undefined this Object  - rabbit.__proto__



