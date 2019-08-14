function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = [1, 2, 3, 4];
console.log(reverseArray(arr));

function reverseArrayInPlace(arr) {
    let arrTemp = reverseArray(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arrTemp[i];

    }
    return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(reverseArrayInPlace(arr1));

function reverseArrayInPlace2(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}