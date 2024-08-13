// Structure

const result = array.every(function (element, index, array) {
    // return a condition
});

// Examples
const numbers = [1, 5, 8, 9];
const allPositive = numbers.every(function (number) {
    return number > 0;
});
console.log(allPositive); // Output: true

// Checking for Even Numbers
const array = [2, 4, 6, 8];
const isArrayEven = array.every(function (element) {
    return element % 2 === 0;
});
console.log(isArrayEven); // Output: true

// Edge Cases
// Short-Circuiting
const numbers2 = [2, 4, 6, 8, 9, 10];

const allEven = numbers2.every(function (number) {
    console.log(`Checking: ${number}`);
    return number % 2 === 0;
});

// Output:
// Checking: 2
// Checking: 4
// Checking: 6
// Checking: 8
// Checking: 9
// allEven is false

// Empty Arrays
const emptyArray = [];

const allPositive = emptyArray.every(function (number) {
    return number > 0;
});

console.log(allPositive); // Output: true

// The every method is an efficient and expressive tool for validating whether all elements in an array meet a specific criterion. By abstracting loop logic and seamlessly integrating with various data types, it empowers developers to write cleaner and more maintainable code.

// Whether you need to ensure that all elements of an array satisfy a particular condition or handle edge cases like short-circuiting and empty arrays, understanding the every method is crucial. Its simplicity, combined with its powerful applicability, makes it an indispensable part of a JavaScript developer’s toolkit for array processing tasks.
