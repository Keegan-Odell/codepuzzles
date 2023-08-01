"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = exports.duplicateCount = void 0;
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
console.log(duplicateEncode("Success"));
//# sourceMappingURL=codewars-ts-5.js.map