// Problems

// Callback Function with Loop
const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
};

// Closure with Increment Function
const counter = () => {
    let count = 0;
    const increment = () => {
        count++;
        return count;
    };
    return increment;
};

// Function Using a Helper Function with Loop

const sumOfSquares = (numbers) => {
    const square = (x) => x * x;
    let sum = 0;
    for (const number of numbers) {
        sum += square(number);
    }
    return sum;
};
console.log(sumOfSquares([2]));

// Function with Multiple Helper Functions

const mathOperations = (a, b) => {
    const add = () => a + b;
    const multiply = () => a * b;
    return { add, multiply };
};
const ops = mathOperations(5, 3);

console.log(ops.add()); // Output: 8
console.log(ops.multiply()); // Output: 15

// Function with Closure and Callback

const createMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Function with Multiple Callbacks

const stringManipulation = (str, operation1, operation2) =>
    operation2(operation1(str));

// Function with Callback and Loop

const computeAverage = (nums, callback) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return callback(sum / nums.length);
};
