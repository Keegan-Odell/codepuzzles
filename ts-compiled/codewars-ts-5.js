"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = exports.isValidWalk = exports.duplicateEncode = exports.duplicateCount = void 0;
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
console.log(arrayDiff([1, 2, 3], [1, 2]));
//# sourceMappingURL=codewars-ts-5.js.map