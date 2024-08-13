// 1. doubleAges
function doubleAges(people) {
    return people.map(function (person) {
        return {
            name: person.name,
            age: person.age * 2
        };
    });
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
console.log(doubleAges(people));
// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

// 2. capitalizeFirstLetters
function capitalizeFirstLetters(strings) {
    return strings.map(function (str) {
        if (str === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
}
// const fruits = ["apple", "banana"];
// console.log(capitalizeFirstLetters(fruits));
// Output: ['Apple', 'Banana']
const fruits = ["apple", "banana"];
console.log(capitalizeFirstLetters(fruits));

// 3. squareFirstElements
function squareFirstElements(numbers) {
    return numbers.map(function (nums) {
        return nums[0] * nums[0];
    });
}
const arrays = [
    [2, 3],
    [4, 5],
    [6, 7]
];
console.log(squareFirstElements(arrays));
// Output: [4, 16, 36]

// 4. appendStringToWords
function appendStringToWords(words, appendString) {
    return words.map(function (item) {
        return {
            word: item.word + appendString
        };
    });
}

const words = [{ word: "cat" }, { word: "dog" }];
const appendString = "s";

console.log(appendStringToWords(words, appendString));
// Output: [{ word: 'cats' }, { word: 'dogs' }]

// 5. calculatePriceWithTax

function calculatePriceWithTax(products, taxRate) {
    return products.map(function (item) {
        return {
            name: item.name,
            price: item.price * (taxRate + 1)
        };
    });
}

const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
const tax = 0.1;
console.log(calculatePriceWithTax(products, tax));
// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]
