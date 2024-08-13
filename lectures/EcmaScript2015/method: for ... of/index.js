// Loop: for...of

// Classic loop
// for (initialization; condition; increment) {
// code block to be executed
// }

const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output: 10, 20, 30, 40, 50

// For...of Loop

// Structure
// for (const element of iterable) {
//     code block to be executed
// }

//   Example with Array
const numbers2 = [10, 20, 30, 40, 50];
for (const number of numbers2) {
    console.log(number);
}
// Output: 10, 20, 30, 40, 50

// Example with String
const string = "Hello";
for (const character of string) {
    console.log(character);
}
// Output: H, e, l, l, o

// Conclusion
// When deciding between using a classic for loop and a for...of loop in JavaScript, the primary consideration is whether you need to access the index of the elements you are iterating over. The classic for loop is the preferred choice when index access is necessary, such as when you need to perform operations based on the current position in the array or require both the index and the element value within the loop body. In contrast, if you do not need to access the index and simply want to iterate over the elements of an array, string, or other iterable objects, the for...of loop offers a more concise and readable syntax. The for...of loop simplifies the iteration process by abstracting away the manual handling of indices and conditions, making your code cleaner and reducing the likelihood of errors associated with index management.
