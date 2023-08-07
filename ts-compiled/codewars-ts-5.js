"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = exports.isPangram = exports.order = exports.arrayDiff = exports.isValidWalk = exports.duplicateEncode = exports.duplicateCount = void 0;
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
console.log("test");
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
console.log((0, exports.toCamelCase)("the_stealth_warrior"));
//# sourceMappingURL=codewars-ts-5.js.map