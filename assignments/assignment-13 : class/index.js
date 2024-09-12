// Problem 1: Magic Cipher
function magicCipher(sentence, cipher) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (cipher[char]) {
            result += cipher[char];
        } else {
            result += char;
        }
    }
    return result;
}
console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); //  "dance"

// Problem 2: Hipsterfy
function hipsterfy(sentence) {
    function removeLastVowel(word) {
        const vowels = "aeiou";
        let lastIndex = -1;

        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                lastIndex = i;
            }
        }

        if (lastIndex !== -1) {
            return word.slice(0, lastIndex) + word.slice(lastIndex + 1);
        }

        return word;
    }

    const words = sentence.split(" ");

    const processedWords = words.map(removeLastVowel);

    return processedWords.join(" ");
}

console.log(hipsterfy("proper")); // Output: "propr"
console.log(hipsterfy("proper tonic panther")); // Output: "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // Output: "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // Output: "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // Output: "turtl cheeseburgr fris"

// Problem 3: Count Adjacent Sums

function countAdjacentSums(arr, num) {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === num) {
            result++;
        }
    }
    return result;
}

console.log(countAdjacentSums([1, 5, 1], 6)); // 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // 3

// Problem 4: Longest Letter Streak ????????????????
function longestLetterStreak(str, searchLetters) {
    let maxStreak = 0;
    let currentStreak = 0;

    const searchArray = searchLetters;

    for (let char of str) {
        if (searchArray.includes(char)) {
            currentStreak++;
        } else {
            maxStreak = Math.max(maxStreak, currentStreak);
            currentStreak = 0;
        }
    }

    maxStreak = Math.max(maxStreak, currentStreak);

    return maxStreak;
}

console.log(longestLetterStreak("ACCA", ["C"])); // Output: 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // Output: 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // Output: 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // Output: 5

// Problem 5: In Pig Latin
function inPigLatin(sentence) {
    const vowels = "aeiou";

    function convertWord(word) {
        const isCapitalized = word[0] === word[0].toUpperCase();
        let lowerWord = word.toLowerCase();

        if (vowels.includes(lowerWord[0])) {
            return isCapitalized ? lowerWord + "yay" : lowerWord + "yay";
        } else {
            const firstVowelIndex = lowerWord
                .split("")
                .findIndex((char) => vowels.includes(char));
            if (firstVowelIndex === -1) {
                return isCapitalized ? lowerWord + "ay" : lowerWord + "ay";
            } else {
                const prefix = lowerWord.slice(0, firstVowelIndex);
                const root = lowerWord.slice(firstVowelIndex);
                return isCapitalized
                    ? root + prefix + "ay"
                    : root + prefix + "ay";
            }
        }
    }

    const words = sentence.split(" ");
    const pigLatinWords = words.map((word) => convertWord(word));

    return pigLatinWords.join(" ");
}

console.log(inPigLatin("Shmanthony is the best teacher")); // "Anthonyshmay isyay ethay estbay eachertay"
console.log(inPigLatin("let us Dance")); // "etlay usyay Anceday"
console.log(inPigLatin("this is the time of my life")); // "isthay isyay ethay imetay ofyay myay ifelay"
