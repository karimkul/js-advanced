// 1. organizeBooks
function organizeBooks(books) {
    return books.reduce(function (accumulator, char) {
        const { title, genre } = char;
        if (!accumulator[char]) {
            accumulator[genre] = [];
        }
        accumulator[genre].push(title);
        return accumulator;
    });
}

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Science Fiction"
    },
    { title: "Moby Dick", author: "Herman Melville", genre: "Classic" }
];
console.log(organizeBooks(books));
// Output: {
//   'Classic': ['To Kill a Mockingbird', 'The Great Gatsby', 'Moby Dick'],
//   'Science Fiction': ['1984', 'Brave New World']
// }

// 2. vowelFrequency
function vowelFrequency(words) {
    const initialFrequency = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    return words.reduce((accumulator, word) => {
        const lowerCaseWord = word.toLowerCase();

        for (const char of lowerCaseWord) {
            if (accumulator.hasOwnProperty(char)) {
                accumulator[char] += 1;
            }
        }

        return accumulator;
    }, initialFrequency); // Initial value for reduce is the initialFrequency object
}

// Example usage:
const words = ["apple", "orange", "grape", "banana", "kiwi"];
console.log(vowelFrequency(words));
// Output: { 'a': 6, 'e': 3, 'i': 2, 'o': 1, 'u': 0 }

// 3. numericalAnalysis
function numericalAnalysis(numbers) {
    const initialAccumulator = {
        sum: 0,
        product: 1,
        negativeCount: 0
    };

    return numbers.reduce(function (accumulator, num) {
        accumulator.sum += num;

        accumulator.product *= num;

        if (num < 0) {
            accumulator.negativeCount += 1;
        }

        return accumulator;
    }, initialAccumulator);
}

const numbers = [1, -1, 2, -2, 3, -3, 4, -4];
console.log(numericalAnalysis(numbers));
// Output: { sum: 0, product: 576, negativeCount: 4 }
