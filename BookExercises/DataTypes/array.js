//Task 1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); //4

//Task 2
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles);
styles.push('Pop');

let middle = Math.floor(styles.length / 2);
styles[middle] = 'Classics';
console.log(styles);

console.log(styles.shift());
console.log(styles);
styles.unshift('Rap ', 'Reggae ');
console.log(styles);

//Task 3
let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
})

arr[2](); //output the array itself

//Task 4
function sumInput() {
    let answers = [];

    while (true) {
        let value = +prompt('whats the value', 0);
        if (isNaN(value) || !value || value === '') break;
        answers.push(value);
    }
    return answers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sumInput());

//Task 5

arr = [1, -2, 3, 4, -9, 6]

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

console.log(getMaxSubSum([100, -9, 2, -3, 5]))