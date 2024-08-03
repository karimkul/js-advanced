// Basic Example of a Callback

function printMessage(message, callback) {
    console.log(message);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

console.log(printMessage("Hello!", sayGoodbye));
// Output:
// Hello!
// Goodbye!

// Real-World Application of Callbacks

// Step 1: Identifying Redundant Code

function introduceCasual(name) {
    console.log(`Hey, this is ${name}`);
    console.log("I am studying Software Engineering");
}

function introduceOk(name) {
    console.log(`Hello, my name is ${name}`);
    console.log("I am studying Software Engineering");
}

function introduceFormal(name) {
    console.log(`Hi there, let me introduce myself. My name is ${name}`);
    console.log("I am studying Software Engineering");
}
// Each function repeats the line console.log("I am studying Software Engineering");. This redundancy indicates that we can optimize our code.

// Step 2: Refactoring Using Callbacks

function introduce(name, callback) {
    callback(name);
    console.log("I am studying Software Engineering");
}
console.log(introduce("Jamshid"));

// Step 3: Defining Specific Greeting Functions

function greetCasual(name) {
    console.log(`Hey, this is ${name}`);
}

function greetOk(name) {
    console.log(`Hello, my name is ${name}`);
}

function greetFormal(name) {
    console.log(`Hi there, let me introduce myself. My name is ${name}`);
}

// Step 4: Invoking the Callbacks

console.log(introduce("Ali", greetCasual));
console.log(introduce("Ali", greetOk));
console.log(introduce("Ali", greetFormal));

// More Examples

// Example 1: Mathematical Operations
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2

// Example 2: Array Manipulation
function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterArray(numbers, isEven)); // Output: [2, 4, 6]
