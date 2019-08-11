//1.Perform lexing to break down into tokens
//2. Look up values

//Hoisting only declarations not assingments
//Closure is when the function is able to remember and access its lexical scope even when the function
//is executing outside of its lexical scope

// for (var x = 1; x <= 5; x++) {
//     (function () {
//         var j = x;
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })();
// }

// for (var i = 1; i <= 5; i++) {

//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }

// //Module
// function CoolModule() {
//     var something = "cool";
//     var another = [1, 2, 3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }

//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     };
// }

// var foo = CoolModule();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

//Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.
//Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.

//This
const users = [
    {
        name: "user1",
        lastName: "users1"
    },
    {
        name: "user2",
        lastName: "users2"
    }

]

function getNames(user, index, arr) {
    console.log(` THIS: ${this}, NAME: ${this.name} ${this.lastName} ARGS args0 ${user}, agr1 ${index}, agr2 ${arr}`);
}

users.forEach(function (user) {
    getNames.call(user);
});

//call first our context then our parameters

let string = "adfbdskfh";
const result = Array.prototype.filter.call(string, function (elem) {
    return elem > 'd';
})

console.log(result);

//function filter
function cb(elem) {
    return elem !== 'a';
}
function filter(cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        let done = cb(this[i]);
        if (done) {
            arr.push(this[i]);
        }

    }

    return arr;
}

console.log(filter.call('afdafa', cb));

function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

alert(pow(2, 3)); // 8



