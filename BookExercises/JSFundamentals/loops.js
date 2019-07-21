//task 1
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0)
        console.log(i);
}

let i = 1;
while (i < 11) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

//task 2
for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}

i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

//task 3
/*let input;

do {
    input = prompt("enter number > 100", 0);
} while (input && input < 100)
*/

//Task 4
let n = 3;

if (n > 1) {
    next:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next;
            }
        }
        console.log(i);
    }
}

//Task 5
let browser = 'chr';
if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

//Task 6
let val = +prompt('a?', '');
switch (val) {
    case 0: console.log(0); break
    case 1: console.log(1); break
    case 2:
    case 3: console.log(2, 3); break
}
