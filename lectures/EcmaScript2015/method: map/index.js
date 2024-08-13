// Structure
const array = [1, 2, 3];
const newArray = array.map(function (element, index, array) {
    // return a new value for the element
});

// Examples

const numbers = [1, 2, 3];
const doubled = numbers.map(function (element) {
    return element * 2;
});
console.log(doubled);

// Using Element, Index, and Array

const fruits = ["apple", "banana", "cherry"];
const mappedFruits = fruits.map(function (fruit, index, array) {
    return `${fruit} (${index + 1} of ${array.length})`;
});
console.log(mappedFruits);

// Refactoring from a Traditional Loop

const grades = [60, 70, 80];
const increasedGrades = [];
for (let i = 0; i < grades.length; i++) {
    increasedGrades[i] = grades[i] * 1.1;
}
console.log(increasedGrades); // Output: [66, 77, 88]

// Refactoring with .map

const grades2 = [60, 70, 80];
const increasedGrades2 = grades2.map(function (grade) {
    return grade * 1.1;
});
console.log(increasedGrades2); // Output: [66, 77, 88]

// Conclusion
// The .map method is a powerful and expressive tool in JavaScript, offering a clean and efficient way to create a new array by applying a transformation to each element of an existing array. By abstracting away the iteration process, .map allows developers to concentrate on the transformation logic, leading to more readable and maintainable code.

// Moreover, by understanding the callback function and its parameters—element, index, and array—developers can leverage .map for a wide range of applications, from simple data transformations to more complex data manipulations. The method’s ability to replace traditional loops with a more declarative approach makes it an essential part of modern JavaScript programming.
