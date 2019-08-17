//

function getData(id) {
    return Math.random();
}

function makeCache(fn) {
    let cache = {};
    return function (arg) {
        //check if argument passed is a propery of an array
        if (arg in cache) {
            //if it already exsists then do not compute, used cached
            return cache[arg];
        }

        //if argument is not cached it needs to be computed and stored in cached[]
        cache[arg] = fn(arg);
        return cache[arg];
    }
}

let cachedGetData = makeCache(getData);

console.log(cachedGetData(1));
console.log(cachedGetData(1));
console.log(cachedGetData(2));
console.log(cachedGetData(1));
console.log(cachedGetData(3));
console.log(cachedGetData(4));
console.log(cachedGetData(4));

function makeCache2(fn) {
    let cache = new Map();
    return function (...args) {
        //check if argument passed is a propery of an array
        label: for (let [cachedArgs] of cache.entries()) {
            for (let i = 0; i < cachedArgs.length; i++) {
                if (!deepEqual(cachedArgs[i], args[i])) {
                    continue label;
                }

            }
            console.log(cache);
            return cache.get(cachedArgs);
        }

        //if argument is not cached it needs to be computed and stored in cached[]
        const result = fn.call(this, ...args);
        cache.set(args, result);
        return result;
    }
}

let cachedGetData2 = makeCache2(getData);
console.log('\n' + cachedGetData2({ a: 2 }));
console.log(cachedGetData2({ a: 1, b: 2, c: 3 }, { a: 1 }, { b: 2, c: 3 }));
console.log(cachedGetData2(4, 5, 6));
console.log(cachedGetData2(4, 5, 6));
console.log(cachedGetData2(1, 1, 2));
console.log(cachedGetData2(4, 5, 6));
console.log(cachedGetData2(1, 1, 2));


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null) {
        return false;
    }

    if (typeof obj1 !== 'object' || obj2 !== 'object') {
        return false;
    }

    let keyObj1 = Object.keys(obj1);
    let keyObj2 = Object.keys(obj2);

    if (keyObj1.length !== keyObj2.length) {
        return false;
    }

    return keyObj1.every((key) => deepEqual(obj1[key], obj2[key]));
}