// Native Constructors

// JavaScript Constructors
// let arr = new Array(1, 2, 3);
// console.log(arr); // [1, 2, 3]
// console.log(arr instanceof Array); // true

// Arrays and Prototypes
let arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__ === Array.prototype); // true
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// String Constructor
let str1 = "Hello, world!";
let str2 = new String("Hello, world!");

console.log(typeof str1); // 'string'
console.log(typeof str2); // 'object'
console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true

// Number Constructor
let num1 = 42;
let num2 = new Number(42);

console.log(typeof num1); // 'number'
console.log(typeof num2); // 'object'
console.log(num1 instanceof Number); // false
console.log(num2 instanceof Number); // true

// Adding Custom Methods to Prototypes
// Adding a Method to String.prototype
String.prototype.toCapitalize = function () {
    return this[0].toUpperCase() + this.slice(1);
};

let myStr1 = "world";
let myStr2 = new String("world");

console.log(myStr1.toCapitalize()); // "World"
console.log(myStr2.toCapitalize()); // "World"

// Adding a Method to Array.prototype

Array.prototype.sum = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
};

console.log([1, 2, 3].sum()); // 6

// Adding a Method to Number.prototype

Number.prototype.isEven = function () {
    return this % 2 === 0;
};

let num = 10;
console.log(num.isEven()); // true

let anotherNum = new Number(7);
console.log(anotherNum.isEven()); // false

// Summary
// In JavaScript:

// Constructors like Array, String, and Number are special functions used to create instances of objects.

// Prototypes are the mechanism by which JavaScript objects inherit properties and methods. Built-in objects like arrays, strings, and numbers rely on prototypes to provide their default methods.

// Custom Methods can be added to prototypes, allowing you to extend the functionality of all instances of that object type.

// Understanding constructors and prototypes gives you the tools to work effectively with JavaScript’s object-oriented features, enabling you to write more powerful and reusable code.
