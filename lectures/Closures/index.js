// Closures

// Simple Closure
function greeting() {
    let firstName = "Ali"; // A local constant created by greet()
    function displayName() {
        // displayName() is an inner function
        console.log(firstName); // Accessing constant declared in parent function
    }
    displayName(); // Invoking the inner function
}
greeting(); // Will run the displayName function and log 'Ali'

// Classic Closure

function welcomeMessage() {
    const name = "Ali"; // A local constant created by welcomeMessage()
    function showName() {
        // showName() is an inner function
        console.log(name); // Accessing constant declared in the parent function
    }
    return showName; // Returning the inner function
}
const displayWelcome = welcomeMessage(); // displayWelcome is now a function that
displayWelcome(); // Will run the showName function and log 'Alice'

// Example 1: Counter

function makeCounter() {
    let count = 0; // Local variable created by makeCounter
    return function () {
        count += 1;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Example 2: Adder

function createAdder(x) {
    return function (y) {
        return x + y;
    };
}
const add5 = createAdder(5);
console.log(add5(2)); // 7
console.log(add5(5)); // 10
console.log(add5(10)); // 15

// Intermediate Example

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByThree = createMultiplier(3);

console.log(multiplyByTwo(5)); // Outputs: 10
console.log(multiplyByThree(5)); // Outputs: 15

// Advanced Example: Emulating Private Variables

function counter2() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const myCounter = counter2();
myCounter.increment(); // Outputs: 1
myCounter.decrement(); // Outputs: 0

// Practical Applications of Closures

function createGreeter(greeting) {
    return function (name) {
        console.log(greeting + ", " + name);
    };
}

const greetHello = createGreeter("Hello");
greetHello("Alice"); // Outputs: Hello, Alice
greetHello("Bob"); // Outputs: Hello, Bob
