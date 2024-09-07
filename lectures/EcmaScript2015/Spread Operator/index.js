// Spread Operator

// Cloning Single-Level Nested Elements
// Arrays
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [];
for (let i = 0; i < originalArray.length; i++) {
    copiedArray.push(originalArray[i]);
}

console.log(copiedArray); // Outputs [1, 2, 3, 4, 5]

// Objects
const originalObject = { a: 1, b: 2, c: 3 };
const copiedObject = {};
for (let key in originalObject) {
    copiedObject[key] = originalObject[key];
}

console.log(copiedObject); // Outputs {a: 1, b: 2, c: 3}

// Using the Spread Operator

// Arrays;
const originalArray2 = [1, 2, 3, 4, 5];
const copiedArray2 = [...originalArray];
console.log(copiedArray2);

// Objects
const originalObject2 = { a: 1, b: 2, c: 3 };
const copiedObject2 = { ...originalObject2 };
console.log(copiedObject2);

// Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// Adding Elements or Properties
// Array
const initialArray = [1, 2, 3];
const newArray = [...initialArray, 4];
console.log(newArray); // Outputs: [1, 2, 3, 4]

// Object
const initialObject = { a: 1, b: 2 };
const newObject = { ...initialObject, c: 3, d: 4 };
console.log(newObject); // Outputs: {a: 1, b: 2, c: 3, d: 4}

// Overriding Properties

// Object;
const initialObject2 = { a: 1, b: 2 };
const updatedObject = { ...initialObject2, b: 3 };
console.log(updatedObject); // Outputs: {a: 1, b: 3}

// Conclusion
// The spread operator in JavaScript is a powerful tool that extends beyond simple cloning. It facilitates merging arrays and objects, adding new elements or properties, and overriding existing ones. By leveraging the spread operator, developers can write more elegant, readable, and efficient code, making it a vital feature in the modern JavaScript ecosystem. Understanding its capabilities and limitations allows for better manipulation of data structures, enhancing overall code quality.
