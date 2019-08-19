//Task 1 
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log(rabbit.jumps); //true
delete rabbit.jumps;
console.log(rabbit.jumps); //null
delete animal.jumps;
console.log(rabbit.jumps); //undefined

//Task 2
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

console.log(pockets.pen); //3
console.log(bed.glasses); //1
console.log(pockets.glasses);
console.log(head.glasses);

//Task 3
let animals = {
  eat() {
    this.full = true;
  }
};

let rabbits = {
  __proto__: animals
};

rabbits.eat(); //rabbits.full = true

//Task 4
// let hamster = {
//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // This one also has it, why? fix please.
// console.log(lazy.stomach); // apple

//Task 5

let hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [...this.stomach, food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// Lazy one's stomach is empty
alert(lazy.stomach); // <nothing>





