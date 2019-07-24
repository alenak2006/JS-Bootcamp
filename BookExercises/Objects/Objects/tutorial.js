//Objects
//"key" in object

let obj1 = {
    name: "Pete",
    age: 12
}

console.log("name" in obj1); //true
//check for existance
let obj = {
    test: undefined
};

console.log(obj.test); // it's undefined, so - no such property?
console.log("test" in obj); // true, the property does exist!

//for in loop
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    console.log(key);  // name, age, isAdmin
    // values for the keys
    console.log(user[key]); // John, 30, true
}
//Cloning an object
let user1 = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user1) {
    clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
console.log(user1.name); // still John in the original object

//Or use object assign
const obj2 = {};
Object.assign(obj2, user1);
// overwrite name, add isAdmin
Object.assign(user1, { name: "Pete", isAdmin: true });
