// 1. Create the Initial Functions

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return `The result of adding is ${result}`;
}
function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    return `The result of subtracting is ${result}.`;
}
function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    return `The result of multiplying is ${result}.`;
}
function divideTwoNumbers(num1, num2) {
    let result = num1 / num2;
    return `The result of dividing is ${result}.`;
}

// 2. Recognize the Repetition

// Examine the four functions you've created. Notice that they contain similar code structures but perform different arithmetic operations. This similarity indicates that the code can be optimized.

// 3. Refactor Using Callbacks

// Arithmetic operation functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Generic function that uses a callback
function calculate(num1, num2, callback) {
    const result = callback(num1, num2);
    return `The result is ${result}.`;
}
console.log(calculate(5, 4, add));
console.log(calculate(5, 4, subtract));
console.log(calculate(5, 4, divide));
console.log(calculate(5, 4, multiply));
