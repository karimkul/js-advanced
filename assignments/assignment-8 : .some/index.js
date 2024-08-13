// 1. checkForNullValue
function checkForNullValue(items1) {
    return items1.some(function (obj) {
        return obj.value === null;
    });
}

const items1 = [{ value: 3 }, { value: null }, { value: 5 }];
console.log(checkForNullValue(items1));
// Output: true

const items2 = [{ value: 3 }, { value: 4 }, { value: 5 }];
console.log(checkForNullValue(items2));
// Output: false

// 2. checkForSpecificValueInMatrix
function checkForSpecificValueInMatrix(matrix1, value1) {
    return matrix1.some(function (arr) {
        return arr.some(function (num) {
            return num === value1;
        });
    });
}
const matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const value1 = 4;
console.log(checkForSpecificValueInMatrix(matrix1, value1));
// Output: true

const matrix2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const value2 = 7;
console.log(checkForSpecificValueInMatrix(matrix2, value2));
// Output: false

// 3. checkPropertyLengthInObjects
function checkPropertyLengthInObjects(words1, length1) {
    return words1.some(function (wordObj) {
        return wordObj.word.length === length1;
    });
}

const words1 = [{ word: "cat" }, { word: "elephant" }, { word: "dog" }];
const length1 = 8;
console.log(checkPropertyLengthInObjects(words1, length1));
// Output: true

const words2 = [{ word: "cat" }, { word: "dog" }, { word: "fox" }];
const length2 = 8;
console.log(checkPropertyLengthInObjects(words2, length2));
// Output: false

// 4. checkNumberInSubArrays
function checkNumberInSubArrays(arrays1, number1) {
    return arrays1.some(function (arr) {
        return arr.some(function (num) {
            return num === number1;
        });
    });
}

const arrays1 = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
];
const number1 = 5;
console.log(checkNumberInSubArrays(arrays1, number1));
// Output: true

const arrays2 = [
    [1, 2],
    [3, 4],
    [6, 7]
];
const number2 = 8;
console.log(checkNumberInSubArrays(arrays2, number2));
// Output: false

// 5. checkDateAfterSpecificDate
function checkDateAfterSpecificDate(dates1, specificDate1) {
    return dates1.some(function (obj) {
        return obj.date > specificDate1;
    });
}

const dates1 = [
    { date: "2023-01-01" },
    { date: "2023-01-04" },
    { date: "2023-01-02" }
];
const specificDate1 = "2023-01-02";
console.log(checkDateAfterSpecificDate(dates1, specificDate1));
// Output: true

const dates2 = [
    { date: "2023-01-01" },
    { date: "2023-01-02" },
    { date: "2023-01-02" }
];
const specificDate2 = "2023-01-02";
console.log(checkDateAfterSpecificDate(dates2, specificDate2));
// Output: false
