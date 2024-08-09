// 1. createCounter

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 3. great
function greet(name) {
    return function (timeOfDay) {
        return `Good ${timeOfDay}, ${name}`;
    };
}
const greetJohn = greet("John");
console.log(greetJohn("Morning")); // 'Good Morning, John!'
console.log(greetJohn("Afternonon")); // 'Good Afternoon, John!'

// 4. interestCalculator
function interestCalculator(rate) {
    return function (amount) {
        return (amount * rate) / 100;
    };
}

const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000)); // 50

// 5. multiplier

function multiplier(num) {
    return function (num2) {
        return num * num2;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

// 6. doubleMultiplier

function doubleMultiplier(factor1, factor2) {
    return function (num) {
        return num * factor1 * factor2;
    };
}

const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5)); // 30

// 7. sequentialGreet

function sequentialGreet(name) {
    return {
        morning: function () {
            return `Good Morning, ${name}!`;
        },
        afternoon: function () {
            return `Good Afternoon, ${name}!`;
        },
        evening: function () {
            return `Good Evening, ${name}!`;
        },
        night: function () {
            return `Good Night, ${name}!`;
        }
    };
}

const johnGreeting = sequentialGreet("John");
console.log(johnGreeting.morning()); // Output: 'Good Morning, John!'
console.log(johnGreeting.evening()); // Output: 'Good Evening, John!'
console.log(johnGreeting.afternoon()); // Output: 'Good Afternoon, John!'
console.log(johnGreeting.night()); // Output: 'Good Night, John!

// 8. personalLibrary

// 9. multiplicationTable

function multiplicationTable(base) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(base * i);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree()); // Output: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// 10. favoriteColorReminder
function favoriteColorReminder(name, color) {
    return function () {
        return `${name}'s favorite color is ${color}`;
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
console.log(johnsColor()); // 'John's favorite color is Blue.'
