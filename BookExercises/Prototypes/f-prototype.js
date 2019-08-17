//Task 1
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};


let rabbit = new Rabbit();
//delete Rabbit.prototype.eats; //undefined
//delete rabbit.eats; //true

//Rabbit.prototype.eats = false;

Rabbit.prototype = {};



//if this was before we created an instatnce then it would be undefined
console.log('r1 ' + rabbit.eats); // true

let rabbit2 = new Rabbit();
console.log('r2 ' + rabbit2.eats); // undefined

//Task 2
//let obj2 = new obj.constructor();
function User(name) {
    this.name = name;
}
User.prototype = {};
let user = new User('John');

let user2 = new user.constructor('Pete');

console.log(user2.name); // Pete (worked!)





