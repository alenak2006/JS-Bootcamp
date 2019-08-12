function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(23, 2));

function min2(...numbers) {
    let result = +Infinity;
    for (const number of numbers) {
        if (number < result) {
            result = number;
        }
    }
    return result;
}

console.log('min ' + min2(23, 34, -34, -33, 13, 4))
