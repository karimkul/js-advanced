// Structure
const array2 = [1, 2, 3, 4, 5, 6];
const result = array2.filter(function (element, index, array) {
    // return a condition
});

// Examples

// Filtering Even Numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

// Filtering Elements at Even Indices
const array = [10, 15, 20, 25, 30];
const evenIndexedNumbers = array.filter(function (element, index) {
    return index % 2 === 0;
});
console.log(evenIndexedNumbers); // Output: [10, 20, 30]
