// Prototypes and Prototype Chain

// Objects in JavaScript
// let student = {
//     name: "John",
//     age: 20
// };

// // Introduction to Prototypes
// let animal = {
//     eats: true,
//     walk: function () {
//         console.log("Animal walks");
//     }
// };
// // console.log(animal.walk());

// // Setting Up Inheritance with __proto__

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true
// rabbit.walk(); // "Animal walks"

// 1. We created a new object rabbit that has its own property jumps.
// 2. By setting rabbit.__proto__ = animal, we're saying that rabbit should also inherit properties and methods from animal.
// 3. This is why rabbit can access eats and walk, even though they are not directly defined on rabbit.

// The Prototype Chain
let creature = {
    alive: true
};

let animal = {
    eats: true,
    __proto__: creature
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(rabbit.alive); // true
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

// Safer Methods to Work with Prototypes

// Instead of using __proto__, which is not recommended in modern JavaScript, you should use Object.getPrototypeOf() and Object.setPrototypeOf() to get and set prototypes safely.

// Getting the Prototype:
let proto = Object.getPrototypeOf(rabbit);
console.log(proto === animal); // true

// Setting the Prototype:
let rabbit2 = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats); // true
