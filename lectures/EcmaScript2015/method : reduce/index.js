// Examples
// Summing Array Elements
// Using Classic Loops

let numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // Outputs 60

// Using reduce;
let numbers2 = [10, 20, 30];
let sum2 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

console.log(sum); // Outputs 60

// Counting Characters in a String
// Using Classic Loops

let str = "aabcc";
let charCount = {};

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount); // Outputs {a: 2, b: 1, c: 2}

// Using reduce;
let str2 = "aabcc";
let charCount2 = str.split("").reduce((acc, char) => {
    if (acc[char]) {
        acc[char]++;
    } else {
        acc[char] = 1;
    }
    return acc;
}, {});

console.log(charCount); // Outputs {a: 2, b: 1, c: 2}

// Summing Sold Items Over Three Months
// Consider an array of objects, where each object represents items sold in a month.
// Using Classic Loops

let sales = [
    { books: 5, pens: 10 },
    { books: 3, pens: 15 },
    { books: 7, pens: 20 }
];

let totalSales = { books: 0, pens: 0 };

for (let i = 0; i < sales.length; i++) {
    totalSales.books += sales[i].books;
    totalSales.pens += sales[i].pens;
}

console.log(totalSales); // Outputs {books: 15, pens: 45}

// Using reduce;
let sales2 = [
    { books: 5, pens: 10 },
    { books: 3, pens: 15 },
    { books: 7, pens: 20 }
];

let totalSales2 = sales.reduce(
    (accumulator, currentValue) => {
        accumulator.books += currentValue.books;
        accumulator.pens += currentValue.pens;
        return accumulator;
    },
    { books: 0, pens: 0 }
);

console.log(totalSales); // Outputs {books: 15, pens: 45}

// The reduce method is a versatile and powerful feature in JavaScript, enabling complex operations on arrays while avoiding multiple loops or temporary variables. By understanding its mechanics, developers can write more concise, functional, and readable code. As demonstrated, moving from traditional loops to using reduce not only simplifies code but also aligns with modern functional programming practices, offering a more elegant approach to array manipulation.
