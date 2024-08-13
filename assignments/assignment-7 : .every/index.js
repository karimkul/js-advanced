// 1. checkPropertyInAllObjects
function checkPropertyInAllObjects(item1, property1) {
    return item1.every(function (obj) {
        return obj.hasOwnProperty(property1);
    });
}

const items1 = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const property1 = "name";
console.log(checkPropertyInAllObjects(items1, property1));
// Output: true

const items2 = [{ name: "Alice" }, { age: 25 }, { name: "Charlie" }];
const property2 = "name";
console.log(checkPropertyInAllObjects(items2, property2));
// Output: false

// 2. checkAllPositiveInMatrix
function checkAllPositiveInMatrix(matrix1) {
    return matrix1.every(function (arr) {
        return arr.every(function (value) {
            return value > 0;
        });
    });
}

const matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(checkAllPositiveInMatrix(matrix1));
// Output: true

const matrix2 = [
    [-1, 2],
    [3, 4],
    [5, 6]
];
console.log(checkAllPositiveInMatrix(matrix2));
// Output: false

const matrix3 = [
    [0, 2],
    [3, 4],
    [5, 6]
];
console.log(checkAllPositiveInMatrix(matrix3));
// Output: false

// 3. checkLengthInAllSubArrays
function checkLengthInAllSubArrays(arrays1, length1) {
    return arrays1.every(function (num) {
        return num.length === length1;
    });
}

const arrays1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const length1 = 2;
console.log(checkLengthInAllSubArrays(arrays1, length1));
// Output: true

const arrays2 = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
];
const length2 = 2;
console.log(checkLengthInAllSubArrays(arrays2, length2));
// Output: false

const arrays3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const length3 = 3;
console.log(checkLengthInAllSubArrays(arrays3, length3));
// Output: true

// 4. checkPriceGreaterThanValue
function checkPriceGreaterThanValue(products1, price1) {
    return products1.every(function (item) {
        return item.price > price1;
    });
}

const products1 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "Notebook", price: 25 }
];
const price1 = 10;
console.log(checkPriceGreaterThanValue(products1, price1));
// Output: true

const products2 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 5 },
    { name: "Notebook", price: 25 }
];
const price2 = 10;
console.log(checkPriceGreaterThanValue(products2, price2));
// Output: false

const products3 = [
    { name: "Book", price: 30 },
    { name: "Pen", price: 25 },
    { name: "Notebook", price: 40 }
];
const price3 = 20;
console.log(checkPriceGreaterThanValue(products3, price3));
// Output: true

// 5. checkAllNumbersOdd
function checkAllNumbersOdd(numbers1) {
    return numbers1.every(function (num) {
        return num % 2 !== 0;
    });
}

const numbers1 = [77, 45, 79, 47];
console.log(checkAllNumbersOdd(numbers1));
// Output: true

const numbers2 = [1, 2, 3, 4, 10];
console.log(checkAllNumbersOdd(numbers2));
// Output: false

const numbers3 = [11, 13, 15, 17, 21];
console.log(checkAllNumbersOdd(numbers3));
// Output: true
