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

//all objects are true when converted to primitives(boolean)
//numeric conversion happens with Date()
//string converted when we use log or alert functions

//object to primitive used by many built in functions
//string - alert, other to string methods
//number - for maths
//default - operators

//when new keyword is used 
//1. empty object is created and 'this' assigned to this object
//2. function body executes, modifies 'this' adds properties to this
//3. value of 'this' is returned

function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}

let user3 = new User("Jack");
console.log(user3);

function User2(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User2("John"); // redirects call to new User
console.log(john.name); // John




