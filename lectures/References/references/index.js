// References

// Initialize original array and object
let originalArray = [1, 2, 3];
let originalObject = { key: "value" };

// Reassign them to new variables
let newArray = originalArray;
let newObject = originalObject;

// Make changes to the new variables
newArray.push(4);
newObject.newKey = "newValue";

// Print the original and new variables
console.log("originalArray:", originalArray);
// Output: originalArray: [1, 2, 3, 4]

console.log("newArray:", newArray);
// Output: newArray: [1, 2, 3, 4]

console.log("originalObject:", originalObject);
// Output: originalObject: { key: 'value', newKey: 'newValue' }

console.log("newObject:", newObject);
// Output: newObject: { key: 'value', newKey: 'newValue' }
