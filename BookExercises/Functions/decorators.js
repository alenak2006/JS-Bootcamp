/* eslint-disable no-func-assign */
function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // if there's such key in cache
            return cache.get(x); // read the result from it
        }

        let result = func(x);  // otherwise call func

        cache.set(x, result);  // and cache (remember) the result
        return result;
    };
}
slow = cachingDecorator(slow);
const slow1 = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

console.log(slow1(10));
console.log(slow1(9));

//Task 1 Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
function work(a, b) {
    console.log(a + b); // work is an arbitrary function or method
}

function spy(fn) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        let result = fn.apply(this, arguments);
        return result;
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5, 34); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

//Task 2 Delaying decorator
//Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
function f(x) {
    console.log(x);
}

function delay(func, ms) {

    return function wrapper(x) {
        let that = this;
        setTimeout(function () { func.call(that, x) }, ms);
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

//Task 3 Debounce decorator
//The result of debounce(f, ms) decorator should be a wrapper that passes the call to f at maximum once per ms milliseconds.
function debounce(func, ms) {
    let prevTime = 0, currTime = 0, timeDiff = 0;
    let time = new Date();
    currTime = time.getTime();
    return function (x) {
        timeDiff = currTime - prevTime;
        if (timeDiff < ms) {
            let time2 = new Date();
            prevTime = time2.getTime();
            func(x);
        } else return false;
    }
}
let check = debounce(alert, 1000);

check(1); // runs immediately
check(2); // ignored

setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)






























