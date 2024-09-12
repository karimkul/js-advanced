// 1. isPalindromePossible

function isPalindromePossible(s) {
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

console.log(isPalindromePossible("eraccar")); // true
console.log(isPalindromePossible("abcabc")); // true
console.log(isPalindromePossible("abcba")); // true

// 2. myShift

function myShift(arr, value) {
    const length = arr.length;

    for (let i = length; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }

    arr[0] = value;

    return arr;
}

const arr = [1, 2, 3];
myShift(arr, 4);
console.log(arr); // [4, 1, 2, 3]

// 3. myRemove

function myRemove(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--;
        } else {
            i++;
        }
    }
    return arr;
}

const array = [1, 2, 3];
myRemove(array, 2);
console.log(array); // [1, 3]

// 4. generateFibonacci

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];

    while (fib.length < n) {
        const nextValue = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextValue);
    }

    return fib;
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// 5. leastCommonMultiple
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function leastCommonMultiple(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

console.log(leastCommonMultiple(2, 3)); // 6
console.log(leastCommonMultiple(6, 10)); // 30
console.log(leastCommonMultiple(24, 26)); // 312

// 6. generatePrimes
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

console.log(generatePrimes(3)); // [2, 3, 5]
console.log(generatePrimes(5)); // [2, 3, 5, 7, 11]

// 6. canFormTarget

function canFormTarget(string1, string2, target) {
    function countChars(str) {
        const counts = {};
        for (let char of str) {
            counts[char] = (counts[char] || 0) + 1;
        }
        return counts;
    }

    const count1 = countChars(string1);
    const count2 = countChars(string2);
    const targetCount = countChars(target);

    const combinedCount = { ...count1 };
    for (let char in count2) {
        combinedCount[char] = (combinedCount[char] || 0) + count2[char];
    }

    for (let char in targetCount) {
        if (targetCount[char] > (combinedCount[char] || 0)) {
            return false;
        }
    }

    return true;
}

console.log(canFormTarget("ab", "cd", "abcd")); // true
console.log(canFormTarget("cat", "dog", "actdog")); // true
console.log(canFormTarget("a", "b", "aa")); // false
console.log(canFormTarget("a", "b", "abx")); // false
