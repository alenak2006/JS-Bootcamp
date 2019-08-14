function every(array, test) {
    let filteredArray = [];
    filteredArray = array.filter(test);
    return (filteredArray.length === array.length) ? true : false;
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function every2(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every3(array, predicate) {
    return !array.some(element => !predicate(element));
}