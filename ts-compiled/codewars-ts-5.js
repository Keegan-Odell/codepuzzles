"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirReduc = exports.pigIt = exports.greet = exports.alphabetPosition = exports.breakCamel = exports.uniqueInOrder = exports.toCamelCase = exports.isPangram = exports.order = exports.arrayDiff = exports.isValidWalk = exports.duplicateEncode = exports.duplicateCount = void 0;
function duplicateCount(text) {
    let textLowerArray = Array.from(text.toLowerCase());
    let numberMap = new Map();
    let counter = 0;
    for (let char of textLowerArray) {
        let numberMapGet = numberMap.get(char) || 0;
        numberMap.set(char, numberMapGet + 1);
    }
    for (let [key, value] of numberMap) {
        if (value > 1) {
            counter++;
        }
    }
    return counter;
}
exports.duplicateCount = duplicateCount;
function duplicateEncode(word) {
    let wordArray = Array.from(word.toLowerCase());
    let encodedArray = [];
    let wordMap = new Map();
    for (let char of wordArray) {
        let wordCount = wordMap.get(char) || 0;
        wordMap.set(char, (wordCount += 1));
    }
    for (let char of wordArray) {
        if (wordMap.get(char) > 1) {
            encodedArray.push(")");
        }
        else {
            encodedArray.push("(");
        }
    }
    return encodedArray.join("");
}
exports.duplicateEncode = duplicateEncode;
function isValidWalk(walk) {
    if (walk.length === 10) {
        return isHome(walk);
    }
    else {
        return false;
    }
}
exports.isValidWalk = isValidWalk;
function isHome(array) {
    let coordinates = {
        x: 0,
        y: 0,
    };
    for (let direction of array) {
        switch (direction) {
            case "n":
                coordinates.y++;
                break;
            case "s":
                coordinates.y--;
                break;
            case "e":
                coordinates.x++;
                break;
            case "w":
                coordinates.x--;
                break;
        }
    }
    return !coordinates.x && !coordinates.y;
}
function arrayDiff(a, b) {
    for (let nums of b) {
        while (a.includes(nums)) {
            let numToErase = a.indexOf(nums);
            a.splice(numToErase, 1);
        }
    }
    return a;
}
exports.arrayDiff = arrayDiff;
function order(words) {
    let wordMap = new Map();
    let wordsArray = words.split(" ");
    for (let word of wordsArray) {
        for (let char of word) {
            if (!isNaN(parseInt(char))) {
                wordMap.set(parseInt(char), word);
            }
        }
    }
    wordMap = new Map([...wordMap.entries()].sort());
    let solution = "";
    for (let [key, value] of wordMap) {
        if (key === 1) {
            solution = value;
        }
        else {
            solution = solution + " " + value;
        }
    }
    return solution;
}
exports.order = order;
const isPangram = (phrase) => {
    phrase = phrase.toLowerCase();
    let uniqueLetters = [];
    for (let chars of phrase) {
        if (isChar(chars)) {
            if (!uniqueLetters.includes(chars)) {
                uniqueLetters.push(chars);
            }
        }
    }
    return uniqueLetters.length === 26;
};
exports.isPangram = isPangram;
function isChar(char) {
    return char.toLowerCase() !== char.toUpperCase();
}
const toCamelCase = (str) => {
    let strArray = Array.from(str);
    let i = 0;
    for (let chars of strArray) {
        if (chars === "-" || chars === "_") {
            strArray.splice(i, 1);
            strArray[i] = strArray[i].toUpperCase();
        }
        i += 1;
    }
    return strArray.join("");
};
exports.toCamelCase = toCamelCase;
const uniqueInOrder = (iterable) => {
    let originalArray = Array.from(iterable);
    let unqiueArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] !== originalArray[i + 1]) {
            unqiueArray.push(originalArray[i]);
            i += 1;
        }
    }
    return unqiueArray;
};
exports.uniqueInOrder = uniqueInOrder;
const breakCamel = (camelCase) => {
    let camelCaseArray = Array.from(camelCase);
    for (let i = 0; i < camelCaseArray.length; i++) {
        if (camelCaseArray[i] === camelCaseArray[i].toUpperCase()) {
            camelCaseArray.splice(i, 0, " ");
            i += 1;
        }
    }
    return camelCaseArray.join("");
};
exports.breakCamel = breakCamel;
const alphabetPosition = (text) => {
    const alphabetArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    let textUpper = text.toUpperCase();
    let textToNumber = [];
    for (let letter of textUpper) {
        if (alphabetArray.includes(letter)) {
            textToNumber.push((alphabetArray.indexOf(letter) + 1).toString());
        }
    }
    return textToNumber.join(" ");
};
exports.alphabetPosition = alphabetPosition;
const greet = (name) => {
    return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}`;
};
exports.greet = greet;
const pigIt = (sentence) => {
    let sentenceArray = sentence.split(" ");
    return sentenceArray.map(pigatize).join(" ");
};
exports.pigIt = pigIt;
function pigatize(word) {
    let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    if (punctuationRegex.test(word) || word === "") {
        return word;
    }
    else {
        let wordArray = word.split("");
        let letterToMove = wordArray[0];
        wordArray.splice(0, 1);
        wordArray.splice(wordArray.length, 0, letterToMove + "ay");
        return wordArray.join("");
    }
}
const dirReduc = (arr) => {
    let solvedDirection = [];
    for (let directions of arr) {
        if (directions === "EAST" &&
            solvedDirection[solvedDirection.length - 1] === "WEST") {
            solvedDirection.pop();
        }
        else if (directions === 'WEST' &&
            solvedDirection[solvedDirection.length - 1] === 'EAST') {
            solvedDirection.pop();
        }
        else if (directions === 'NORTH' &&
            solvedDirection[solvedDirection.length - 1] === 'SOUTH') {
            solvedDirection.pop();
        }
        else if (directions === 'SOUTH' &&
            solvedDirection[solvedDirection.length - 1] === 'NORTH') {
            solvedDirection.pop();
        }
        else {
            solvedDirection.push(directions);
        }
    }
    return solvedDirection;
};
exports.dirReduc = dirReduc;
console.log((0, exports.dirReduc)([
    "WEST",
    "SOUTH",
    "EAST",
    "SOUTH",
    "NORTH",
    "EAST",
    "SOUTH",
    "NORTH",
    "WEST",
    "EAST",
    "SOUTH",
    "SOUTH",
    "NORTH",
    "NORTH",
]));
//# sourceMappingURL=codewars-ts-5.js.map