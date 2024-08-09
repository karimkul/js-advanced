// Loop: forEach

// Structure

// array.forEach(function(element, index, array) {
//     code block to be executed
//   });

// Simple Iteration
const numbers = [5, 10, 15];
numbers.forEach(function (number) {
    console.log(number);
});
// Output: 5, 10, 15

// Using Element, Index, and Array
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit, index, array) {
    console.log(`Fruit ${index + 1} of ${array.length} is ${fruit}`);
});
// Output:
// Fruit 1 of 3 is apple
// Fruit 2 of 3 is banana
// Fruit 3 of 3 is cherry

// Conclusion
// The forEach method provides a clean and functional approach to iterating over arrays in JavaScript. Its use of callbacks can lead to more readable and maintainable code compared to traditional loops. However, it comes with limitations such as the inability to break or continue and the lack of a meaningful return value, which should be considered when choosing the appropriate iteration method for your needs.
