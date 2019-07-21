function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
showPrimes(10);

//Task 1
function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

/*function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?');
}
*/
checkAge(20);

//Task 2
function findMin(a, b) {
    return (a < b) ? a : b;
}

console.log(findMin(3, -2));

//Task 3
function findPow(a, b) {
    let pow = a;
    for (let i = 1; i < b; i++) {
        pow *= a;
    }
    return pow;
}
console.log(findPow(1, 100));

//Task 3
/*
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);
*/
