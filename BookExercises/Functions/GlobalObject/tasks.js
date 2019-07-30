//Tasks 1
function sum(a) {
    return function (b) {
        return a + b;
    }
}

sum(2)(4);
sum(5)(-1);

//Tasks 2
function makeBuffer() {
    let str = '';
    return function (value) {
        if (arguments.length > 0) {
            str += ' ' + value;
            return;
        }
        console.log(str);
    }
}

var buffer = makeBuffer();
buffer('test');
buffer('another');
buffer('rule');
buffer();