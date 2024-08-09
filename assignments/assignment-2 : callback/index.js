// Part 1
// Odd Numbers Filter

function filterOddNumbers(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isOdd(num) {
    return num % 2 !== 0;
}
const numbers = [1, 2, 3, 4, 5];
console.log(filterOddNumbers(numbers, isOdd)); // Output: [1, 3, 5])

// Numbers Divisible by Three

function filterDivisibleByThree(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isDivisibleByThree(num) {
    return num % 3 === 0 && num % 5 !== 0;
}
const divisibleNums = [3, 6, 7, 9, 12];
console.log(filterDivisibleByThree(divisibleNums, isDivisibleByThree)); // Output: [3, 6, 9, 12]

// Prime Numbers Filter

// Part 2
// Palindrome Strings??????
// Lowercase Strings Only

function isLowercase(str) {
    return str === str.toLowerCase();
}

function filterStrings(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function filterLowercase(words) {
    return filterStrings(words, isLowercase);
}

// Example usage
const words = ["apple", "Banana", "cherry"];
const lowercaseWords = filterLowercase(words);

console.log(lowercaseWords); // Output: ["apple", "cherry"]

// Words with Only One Vowel
