"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumber = exports.duplicateCount = void 0;
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
function romanNumber(number) {
    let romanNumberArray = [];
    while (number >= 1000) {
        number -= 1000;
        romanNumberArray.push("M");
    }
    while (number >= 500) {
        number -= 500;
        romanNumberArray.push("D");
    }
    while (number >= 100) {
        number -= 100;
        romanNumberArray.push("C");
    }
    while (number >= 50) {
        number -= 50;
        romanNumberArray.push("L");
    }
    while (number >= 10) {
        number -= 10;
        romanNumberArray.push("X");
    }
    while (number >= 5) {
        number -= 5;
        romanNumberArray.push("V");
    }
    while (number >= 1) {
        number -= 1;
        romanNumberArray.push("I");
    }
    return romanNumberArray.join("");
}
exports.romanNumber = romanNumber;
console.log(romanNumber(4));
//# sourceMappingURL=codewars-ts-5.js.map