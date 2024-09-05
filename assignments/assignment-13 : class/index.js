// Problem 1: Magic Cipher
function magicCipher(sentence, cipher) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (cipher.hasOwnProperty(char)) {
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

// Problem 2: Hipsterfy ??????????????????
function hipsterfy(str) {
    let result = "";
}

hipsterfy("proper"); // "propr"
hipsterfy("proper tonic panther"); // "propr tonc panthr"
hipsterfy("towel flicker banana"); // "towl flickr banan"
hipsterfy("runner anaconda"); // "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // "turtl cheeseburgr fris"

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
function longestLetterStreak(str, searchLetters) {}

longestLetterStreak("ACCA", ["C"]); // 2
longestLetterStreak("YACCADCA", ["C", "A"]); // 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // 5

// Problem 5: In Pig Latin
function inPigLatin(sentence) {}

inPigLatin("Shmanthony is the best teacher"); // "Anthonyshmay isyay ethay estbay eachertay"
inPigLatin("let us Dance"); // "etlay usyay Anceday"
inPigLatin("this is the time of my life"); // "isthay isyay ethay imetay ofyay myay ifelay"
