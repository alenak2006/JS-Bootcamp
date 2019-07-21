//logical operators
//OR
//Evaluates operands from left to right.
//For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were false), returns the last operand.

console.log(1 || 0); // 1
console.log(true || 'no matter what'); //true
console.log(null || 1); //1
console.log(null || 0 || 1);//1 
console.log(undefined || null || 0);//0 

//AND
//Evaluates operands from left to right.
//For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
//If all operands true, returns the last operand.

//alert(1) || 5 //5, returns undefined, functions which dont return anything will have return value = undefined. Hence the first value is false
//alert(alert(1) && alert(2)); //undefined, returns the first undefined value, call to function, return undefined, return false, return undefined

//Task 1
let age = 10;

if (age >= 14 && age <= 90) {
    //console.log(age);
}

if (age < 14 || age > 90) {
    //console.log(age);
}

if (!(age > 14 && age < 90)) {
    console.log(age);
}

//Task 2
let user = prompt("who is there?", '');

if (user) {
    if (user === "Admin") {
        let password = prompt("Password?", '');
        if (password) {
            if (password === "TheMaster") {
                console.log("Welcome");
            } else {
                console.log("Wrong password");
            }
        } else {
            console.log('Cancelled');
        }
    } else if (user === "Other") {
        console.log("I dont know you");
    } else {
        console.log(" wrong contact");
    }
} else {
    console.log("Cancelled");
}

