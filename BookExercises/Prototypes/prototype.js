//Task 1
// function f() {
//     alert("Hello!");
// }

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// }

// f.defer(1000); // shows "Hello!" after 1 second

//Task 2
function f(a, b) {
    alert(a + b);
}

Function.prototype.defer = function (ms) {
    var that = this;
    return function (a, b) {
        setTimeout(function () { that.call(this, a, b) }, ms);
    }
}

f.defer(3000)(1, 2); // shows 3 after 1 second


function test(a) {
    return function (b) {
        console.log(a + b);
    }
}


