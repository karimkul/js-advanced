// Shallow Copy for Nested Arrays

let originalNestedArray = [1, 2, [3, 4]];
let copiedNestedArray = [];

for (let i = 0; i < originalNestedArray.length; i++) {
    copiedNestedArray[i] = originalNestedArray[i];
}

copiedNestedArray[2].push(5);

console.log(originalNestedArray); // Output: [1, 2, [3, 4, 5]]
console.log(copiedNestedArray); // Output: [1, 2, [3, 4, 5]]

// Shallow Copy for Nested Objects

let originalNestedObject = {
    key1: "value1",
    key2: { subKey: "subValue" }
};
let copiedNestedObject = {};

for (let prop in originalNestedObject) {
    copiedNestedObject[prop] = originalNestedObject[prop];
}

copiedNestedObject.key2.newSubKey = "newSubValue";

console.log(originalNestedObject); // Output: { key1: 'value1', key2: { subKey: 'subValue', newSubKey: 'newSubValue' } }
console.log(copiedNestedObject); // Output: { key1: 'value1', key2: { subKey: 'subValue', newSubKey: 'newSubValue' } }

// Discussion of the Problem
// As demonstrated, even though we made a shallow copy of the original nested array and object, changes to the nested elements in the copies also affected the nested elements in the original variables. This limitation arises because the inner arrays and objects are still linked between the original and copied variables. In simpler terms, while we managed to create a new, separate "outer basket" (shallow copy), the "smaller baskets inside it" (nested elements) remain shared between the original and new one.

// Conclusion
// Understanding the limitations of shallow copies is crucial when working with nested data structures in JavaScript. While shallow copies create new references for the outermost layer, they do not duplicate nested arrays or objects, leading to shared references for these inner elements. This can result in unintended side effects, as modifications to nested elements in the copy will affect the original data structure.

// In future lectures, we will explore methods to work around this issue, known as "deep copying," which ensures that all nested elements are fully copied, creating entirely separate data structures.
