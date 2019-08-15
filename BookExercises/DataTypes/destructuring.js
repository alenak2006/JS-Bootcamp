//Task 1

let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);

//Task 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Gary": 400
};

//let salaries = {};

function topSalary(salaries) {
    if (Object.entries(salaries).length === 0) return null;
    let max = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));


