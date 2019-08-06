//there are 6 primitive types: number string boolean null undefined symbol
//object wrappers are created for each for they can be wrapped into an object and object props and methods could be used
//then the wrapper is destroyed
//Number String Boolean Symbol
//null and undefined dont have wrapper object hence when calling any property or method on either you'll get an error

//Task 1
let str = "Hello";
str.test = 5; // gives error in strict mode, undefined in non strict, wrapper is created when property is accessed but destroyed straight after

//Numbers stpred in 64bit
//Math.floor .ceil .round .trunc

//Task 2
// let a = prompt("whats the 1number");
// let b = prompt("whats the 2number");
// alert(parseInt(a) + parseInt(b));
Math.round(6.35 * 10) / 10; //6.35 is not 6.35 it is 6.349999.. hence toFixed is 6.3

//Task 3
// function readNumber() {
//     let answer = '';
//     do {
//         answer = prompt("Whats your number");
//     } while (!isFinite(answer))

//     //if (answer === null || answer === '') return null;
//     return +answer || null;
// }

// console.log(readNumber());

//Task 4
// function random(min, max) {
//     return Math.floor(min + Math.random() * (max + 1 - min));
// }
// alert(random(6, 10));

// //Task 5
// let user = {
//     name: "John",
//     years: 30
// };

// //let [name, age, isAdmin] = [user.name, user.years, true];
// let { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

//Task6
function filterRange(arr, min, max) {
    let arr2 = arr.filter((item) => (item >= min && item <= max));
    return arr2;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
