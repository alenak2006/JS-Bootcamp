
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        return true;
    }
}
console.log(isPrime(10));

//Show all prime numbers is the range
function showPrime(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

showPrime(25);