//1.Perform lexing to break down into tokens
//2. Look up values

//Hoisting only declarations not assingments
//Closure is when the function is able to remember and access its lexical scope even when the function
//is executing outside of its lexical scope

for (var x = 1; x <= 5; x++) {
    (function () {
        var j = x;
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })();
}

for (var i = 1; i <= 5; i++) {

    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}

//Module
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.
//Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.
