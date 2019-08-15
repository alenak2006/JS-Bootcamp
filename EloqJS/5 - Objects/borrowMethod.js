let arrays = [[1, 2, 3], [4, 5], [6]];
let newArr = [];

for (let i = 0; i < arrays.length; i++) {
    newArr = newArr.concat(arrays[i]);

}

console.log(newArr);

for (let array of arrays) {
    console.log(array);
}


let arrays2 = [[3, 4, 5, 2], [43, 5, 4, 123], [5, 45, 6, 65, 654], [4]];
console.log(arrays2.reduce((prev, curr) => prev.concat(curr), []));

let arrays3 = [[1, 2], [1, 1], [0, 1, 1], [5]];
console.log(arrays3.reduce((prev, curr) => prev.concat(curr), []).reduce((prev, curr) => prev + curr, 0));
