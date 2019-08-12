function isEven(n) {
    let num = Math.abs(n)
    if (num === 0) return true;
    if (num === 1) return false;
    return isEven(num - 2);

}

console.log(isEven(1));