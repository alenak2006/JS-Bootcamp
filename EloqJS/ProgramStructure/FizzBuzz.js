//print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" 
//For numbers divisible by 3 and 5 print "FizzBuzz"

let fizz = 'Fizz';
let buzz = 'Buzz';

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizz + buzz);
        continue;
    }
    if (i % 3 == 0) {
        console.log(fizz);
    } else if (i % 5 == 0) {
        console.log(buzz);
    } else {
        console.log(i);
    }

}

//book solution
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}