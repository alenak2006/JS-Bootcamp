function loop(initValue, test, update, body) {
    let value = initValue;
    if (!test(value)) {
        return false;
    }
    while (test(value)) {
        body(value);
        value = update(value);
    }



}

loop(60, n => n > 0, n => n - 22, console.log);

function loop2(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop2(20, n => n > 0, n => n - 2, console.log);