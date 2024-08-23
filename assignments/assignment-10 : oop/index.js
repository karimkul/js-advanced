// _________________String.prototype___________________

// 1. reverse()
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

String.prototype.reverse = function () {
    let reversed = "";
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i];
    }
    return reversed;
};
console.log("Hello".reverse()); // Natija: "olleH"
console.log("world".reverse()); // Natija: "dlrow"

// 2. removeVowels()
String.prototype.removeVowels = function () {
    let vowels = "aeiouAEIOU";
    let result = "";
    for (char of this) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    return result;
};

console.log("Hello".removeVowels()); // Outputs: "Hll"
console.log("world".removeVowels()); // Outputs: "wrld"

// 3. countWords()
String.prototype.countWords = function () {
    let result = 1;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === " ") {
            result += 1;
        }
    }
    return result;
};
console.log("Hello World".countWords()); // Outputs: 2
console.log("Oneword".countWords()); // Outputs: 1

// 4. wrapInTags(tag)
String.prototype.wrapInTags = function (tag) {
    return `<${tag}> ${this} </${tag}>`;
};
console.log("Hello".wrapInTags("b")); // Outputs: "<b>Hello</b>"
console.log("world".wrapInTags("i")); // Outputs: "<i>world</i>"

// 5. isPalindrome()
String.prototype.isPalindrome = function () {
    let lowerStr = this.toLowerCase();
    let reversedStr = lowerStr.split("").reverse().join("");
    return lowerStr === reversedStr;
};
console.log("racecar".isPalindrome()); // Outputs: true
console.log("Hello".isPalindrome()); // Outputs: false
console.log("12321".isPalindrome()); // Outputs: true
console.log("12345".isPalindrome()); // Outputs: false

//_________________Number.prototype___________________

// 1. isPrime()
Number.prototype.isPrime = function () {
    const num = this;

    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

console.log((7).isPrime()); // Outputs: true
console.log((4).isPrime()); // Outputs: false
console.log((29).isPrime()); // Outputs: true
console.log((1).isPrime()); // Outputs: false
console.log((50).isPrime()); // Outputs: false

// 2. toFactorial()
Number.prototype.toFactorial = function () {
    let num = this;
    let factorial = 1;

    if (num < 0) return "undefined";

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log((5).toFactorial()); // Output: 120
console.log((3).toFactorial()); // Output: 6

// 3. findFactors()
Number.prototype.findFactors = function () {
    const num = this;
    if (num <= 0) return "Undefined";

    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

console.log((18).findFactors()); // Output: [1, 2, 3, 6, 9, 18]
console.log((7).findFactors()); // Output: [1, 7]

// 4. isPerfectSquare()
Number.prototype.isPerfectSquare = function () {
    if (this < 0) return false;

    const sqrt = Math.sqrt(this);
    return Number.isInteger(sqrt);
};

console.log((9).isPerfectSquare()); // Output: true
console.log((8).isPerfectSquare()); // Output: false
console.log((16).isPerfectSquare()); // Output: true
console.log((25).isPerfectSquare()); // Output: true
console.log((26).isPerfectSquare()); // Output: false

// 5. isOdd()
Number.prototype.isOdd = function () {
    if (this <= 0) return "Undefined";
    return this % 2 !== 0;
};
console.log((9).isPerfectSquare());
console.log((8).isPerfectSquare());

//_________________Array.prototype___________________

// 1. findMax()
Array.prototype.findMax = function () {
    if (this.length === 0) return "Array is empty";

    let max = this[0];

    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }

    return max;
};
console.log([1, 2, 3].findMax());
console.log([-1, -2, -3].findMax());

// 2. findMin()
Array.prototype.findMin = function () {
    if (this.length === 0) return "Array is empty";

    let min = this[0];

    for (let i = 1; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }

    return min;
};
console.log([1, 2, 3].findMin());
console.log([-1, -2, -3].findMin());

// 3. average()
