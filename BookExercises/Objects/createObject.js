//Task 1

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

//Task 2
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

const schedule = {};
console.log(isEmpty(schedule));
schedule["8:20"] = "get up";
console.log(isEmpty(schedule));

//Task 3
let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
}

function sumSalaries(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}
console.log(sumSalaries(salaries));

//Task 4
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] == "number") {
            obj[prop] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
