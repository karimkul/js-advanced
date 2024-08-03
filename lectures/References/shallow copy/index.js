// Shallow Copy for Arrays

let originalArray = [1, 2, 3];
let copiedArray = [];

for (let i = 0; i < originalArray.length; i++) {
    copiedArray[i] = originalArray[i];
}

// Now, copiedArray is a separate entity
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3]
console.log(copiedArray); // Output: [1, 2, 3, 4]

// Array.from
let originalArray2 = [1, 2, 3];
let copiedArray2 = Array.from(originalArray2);

copiedArray2.push(4);

console.log(originalArray2); // Output: [1, 2, 3]
console.log(copiedArray2); // Output: [1, 2, 3, 4]

// Shallow Copy for Objects

let originalObject = { key: "value" };
let copiedObject = {};

for (let prop in originalObject) {
    copiedObject[prop] = originalObject[prop];
}
copiedObject.newKey = "newValue";

console.log(originalObject);
console.log(copiedObject);

// Object.assign
let originalObject2 = { key: "value" };
let copiedObject2 = {};

copiedArray2 = Object.assign(originalObject2);

copiedObject2.newKey2 = "newValue2";

console.log(originalObject2);
console.log(copiedObject2);
