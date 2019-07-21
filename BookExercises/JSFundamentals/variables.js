//variables
//task 1
let admin;
let name;

name = 'John';
admin = name;

console.log(admin);

//task 2
let ourPlanet = 'earth';
let currentUser = 'John';

console.log(ourPlanet, currentUser);

//data types
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

//7 data types
//number for numbers of any kind: integer or floating-point.
//string for strings. A string may have one or more characters, there’s no separate single-character type.
//boolean for true/false.
//null for unknown values – a standalone type that has a single value null.
//undefined for unassigned values – a standalone type that has a single value undefined.
//object for more complex data structures.
//symbol for unique identifiers.
//task 1
let name1 = "Alena";

console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name1"}`); // hello name
console.log(`hello ${name1}`); // hello alena

//conversions
//1. String(value)
// null "null"
// true "true"      false "false"
//2. Number(value) - numeric rules
//undefined	        NaN
//null	            0
//true and false	1 and 0
//string	        Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. 
//Otherwise, the number is “read” from the string. An error gives NaN.
//3. Boolean(value)
//Values that are intuitively “empty”: 0, an empty string, null, undefined, and NaN - false.
//The rest is true.
//Boolean("0") Boolean(" ") - true

//Task 1
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) //1
console.log(6 / "3") // 2
console.log("2" * "3") //6
console.log(4 + 5 + "px") //9px
console.log("$" + 4 + 5) //$45
console.log("4" - 2) //2
console.log("4px" - 2) //NaN
console.log(7 / 0) //Infinity
console.log("  -9  " + 5) //-9   5
console.log("  -9  " - 5) //-14 
console.log(null + 1) //1
console.log(undefined + 1) //NaN 

//Operator precedence
let a = 1, b = 1;

let c = ++a; // 2  increment first then return
let d = b++; // 1 return then increment

console.log(c, d);
let y = 2;

let x = 1 + (y *= 2); // y = 4, 5
console.log(y, x);

//Comparison operators
//null === undefined // false
//null == undefined  // true

console.log(5 > 4) //true
console.log("apple" > "pineapple") //false
console.log("2" > "12") //true no converions into numbers
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(null == "\n0\n") //false
console.log(null === +"\n0\n") //false

//Task 1
let val = "0";
if (val) { console.log("hi"); } //string is not empty

//Task 2
/*
let answer = prompt("Name for JS?", "");
if (answer.toUpperCase() === 'ECMASCRIPT') {
    console.log('right');
} else if (answer.toUpperCase() === "OTHER") {
    console.log("You dont know?");
} else {
    console.log('Try again');
}
*/

//Task 3
/*
let answer = prompt("enter number", 0);
if (Number(answer) > 0) {
    console.log(1);
} else if (Number(answer) === 0) {
    console.log(0);
} else if (Number(answer) < 0) {
    console.log(-1);
} else {
    console.log("this is not a number");
}
*/

//Task 4
let answer, val1, val2;
val1 = 1;
val2 = 2;

answer = (val1 + val2 < 4) ? "below" : "over";
console.log(answer);

//Task 5
let message, login;
login = 'Director';

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : ''

console.log(message);


