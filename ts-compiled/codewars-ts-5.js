"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = exports.scramble = exports.firstNonRepeatingLetter = exports.cakes = exports.generateHashtag = exports.maxSequence = exports.moveZeros = exports.orderWeight = exports.HW2 = exports.formatDuration = exports.rot13 = exports.productFib = exports.dirReduc = exports.pigIt = exports.greet = exports.alphabetPosition = exports.breakCamel = exports.uniqueInOrder = exports.toCamelCase = exports.isPangram = exports.order = exports.arrayDiff = exports.isValidWalk = exports.duplicateEncode = exports.duplicateCount = void 0;
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
        else if (directions === "WEST" &&
            solvedDirection[solvedDirection.length - 1] === "EAST") {
            solvedDirection.pop();
        }
        else if (directions === "NORTH" &&
            solvedDirection[solvedDirection.length - 1] === "SOUTH") {
            solvedDirection.pop();
        }
        else if (directions === "SOUTH" &&
            solvedDirection[solvedDirection.length - 1] === "NORTH") {
            solvedDirection.pop();
        }
        else {
            solvedDirection.push(directions);
        }
    }
    return solvedDirection;
};
exports.dirReduc = dirReduc;
const productFib = (prod) => {
    let prevFib = 0;
    let currentFib = 1;
    let prodFib = 0;
    while (prod > prodFib) {
        currentFib = currentFib + prevFib;
        prevFib = currentFib - prevFib;
        prodFib = currentFib * prevFib;
    }
    if (prod - prodFib === 0) {
        return [prevFib, currentFib, true];
    }
    else {
        return [prevFib, currentFib, false];
    }
};
exports.productFib = productFib;
const rot13 = (message) => {
    let solvedMessage = [];
    for (let letter of message) {
        if (letter.toUpperCase() === letter.toLowerCase()) {
            solvedMessage.push(letter);
        }
        else if (letter === letter.toUpperCase()) {
            solvedMessage.push(letterShifter(letter).toUpperCase());
        }
        else {
            solvedMessage.push(letterShifter(letter));
        }
    }
    return solvedMessage.join("");
};
exports.rot13 = rot13;
function letterShifter(letter) {
    const alphabetArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    letter = letter.toLowerCase();
    let position = alphabetArray.indexOf(letter) + 13;
    if (position <= 25) {
        return alphabetArray[position];
    }
    else {
        return alphabetArray[position - 26];
    }
}
const formatDuration = (time) => {
    const timeArray = time.split("");
    let solvedArray = [];
    let hourArray = [];
    let minuteArray = [];
    let secondArray = [];
    for (let char of timeArray) {
        if (char === "H") {
            let index = timeArray.indexOf("H") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                hourArray.push(timeArray[index]);
                index -= 1;
            }
            hourArray.reverse();
            hourArray.push(":");
        }
        else if (char === "M") {
            let index = timeArray.indexOf("M") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                minuteArray.push(timeArray[index]);
                index -= 1;
            }
            if (minuteArray.length < 2) {
                minuteArray.push("0");
            }
            minuteArray.reverse();
            minuteArray.push(":");
        }
        else if (char === "S") {
            let index = timeArray.indexOf("S") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                secondArray.push(timeArray[index]);
                index -= 1;
            }
            if (secondArray.length < 2) {
                secondArray.push("0");
            }
            secondArray.reverse();
        }
    }
    if (timeArray.includes("H") && minuteArray.length < 1) {
        minuteArray.push("0", "0", ":");
    }
    if (!timeArray.includes("H") && !timeArray.includes("M")) {
        secondArray.unshift("0", ":");
    }
    console.log(hourArray);
    console.log(minuteArray);
    console.log(secondArray);
    return solvedArray.concat(hourArray, minuteArray, secondArray).join("");
};
exports.formatDuration = formatDuration;
const HW2 = (array) => {
    let stack = [];
    let counter = 0;
    for (let nums of array) {
        if (nums >= 0 && counter < 10) {
            stack.push(nums);
            counter++;
        }
    }
    while (stack.length != 0) {
        let i = stack.pop();
        console.log(i);
    }
};
exports.HW2 = HW2;
const orderWeight = (string) => {
    let numberArray = string.split(" ").map((nums) => parseInt(nums));
    if (numberArray.length === 1) {
        return "";
    }
    let solvedArray = [];
    for (let i = 0; i <= numberArray.length;) {
        if (numberArray.length === 0) {
            return solvedArray.join(" ");
        }
        else {
            let lowestNumberWeight = weightFinder(numberArray[numberArray.length - 1]);
            let numberToPush = numberArray[numberArray.length - 1];
            let counter = 2;
            while (true) {
                if (numberArray.length - counter === -1) {
                    break;
                }
                else if (lowestNumberWeight >
                    weightFinder(numberArray[numberArray.length - counter])) {
                    lowestNumberWeight = weightFinder(numberArray[numberArray.length - counter]);
                    numberToPush = numberArray[numberArray.length - counter];
                    counter++;
                }
                else if (lowestNumberWeight ===
                    weightFinder(numberArray[numberArray.length - counter]) &&
                    numberToPush
                        .toString()
                        .localeCompare(numberArray[numberArray.length - counter].toString()) === 1) {
                    lowestNumberWeight = weightFinder(numberArray[numberArray.length - counter]);
                    numberToPush = numberArray[numberArray.length - counter];
                    counter++;
                }
                else {
                    counter++;
                }
            }
            solvedArray.push(numberToPush);
            numberArray.splice(numberArray.indexOf(numberToPush), 1);
        }
    }
    return "error";
};
exports.orderWeight = orderWeight;
function weightFinder(num) {
    let numArray = num.toString().split("").map(Number);
    let weight = 0;
    for (let nums of numArray) {
        weight += nums;
    }
    return weight;
}
const moveZeros = (arr) => {
    let otherStorage = [];
    let zeroStorage = [];
    for (let thing of arr) {
        if (thing === 0) {
            zeroStorage.push(0);
        }
        else {
            otherStorage.push(thing);
        }
    }
    return otherStorage.concat(zeroStorage);
};
exports.moveZeros = moveZeros;
const maxSequence = (arr) => {
    let sumToBeat = 0;
    let tempArray = [...arr];
    if (arr.length === 0) {
        return 0;
    }
    else if (findNeg(arr)) {
        return arr.reduce((acc, curValue) => acc + curValue, 0);
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            tempArray.splice(0, i);
            while (tempArray.length != 0) {
                let sum = tempArray.reduce((acc, curValue) => acc + curValue, 0);
                if (sum > sumToBeat) {
                    sumToBeat = sum;
                }
                tempArray.pop();
            }
            tempArray = [...arr];
        }
    }
    return sumToBeat;
};
exports.maxSequence = maxSequence;
function findNeg(arr) {
    for (let nums of arr) {
        if (nums < 0) {
            return false;
        }
    }
    return true;
}
const generateHashtag = (str) => {
    let stringLength = 0;
    let spaceBoolean = true;
    let strArray = str.split("");
    for (let chars of str) {
        if (chars !== " ") {
            stringLength++;
        }
    }
    if (stringLength > 139 || stringLength < 1) {
        return false;
    }
    else {
        for (let i = 0; i < strArray.length; i++) {
            if (spaceBoolean) {
                strArray[i] = strArray[i].toUpperCase();
                spaceBoolean = false;
            }
            if (strArray[i] === " ") {
                spaceBoolean = true;
            }
        }
        strArray.unshift("#");
        return strArray
            .filter((item) => {
            return item !== " ";
        })
            .join("");
    }
};
exports.generateHashtag = generateHashtag;
const cakes = (recipe, available) => {
    let lowestAmount = Number.MAX_VALUE;
    const recipeItems = Object.keys(recipe);
    const availableItems = Object.keys(available);
    for (let items of recipeItems) {
        if (!availableItems.includes(items)) {
            return 0;
        }
        let value = recipe[items];
        for (let aItems of availableItems) {
            let aValue = available[aItems];
            if (items === aItems) {
                let amount = aValue / value;
                if (amount < lowestAmount) {
                    lowestAmount = amount;
                }
            }
        }
    }
    return Math.floor(lowestAmount);
};
exports.cakes = cakes;
const firstNonRepeatingLetter = (s) => {
    let stringArray = s.split("");
    let counter = 0;
    for (let letter of stringArray) {
        for (let comparisonLetter of stringArray) {
            if (letter.toUpperCase() === comparisonLetter.toUpperCase()) {
                counter++;
            }
        }
        if (counter === 1) {
            return letter;
        }
        counter = 0;
    }
    return "";
};
exports.firstNonRepeatingLetter = firstNonRepeatingLetter;
const scramble = (str1, str2) => {
    let str1Map = new Map();
    for (let letter of str1) {
        str1Map.set(letter, (str1Map.get(letter) || 0) + 1);
    }
    console.log(str1Map);
    for (const char of str2) {
        if (!str1Map.has(char) || str1Map.get(char) === 0) {
            return false;
        }
        str1Map.set(char, str1Map.get(char) - 1);
    }
    return true;
};
exports.scramble = scramble;
const score = (dice) => {
    let roll = new Map();
    let score = 0;
    for (let rolls of dice) {
        roll.set(rolls, (roll.get(rolls) || 0) + 1);
    }
    console.log(roll.get(3));
    for (let [key, value] of roll) {
        if (roll.get(key) >= 3 && key !== 1) {
            score += key * 100;
            roll.set(key, roll.get(key) - 3);
        }
        else if (roll.get(key) >= 3 && key === 1) {
            score += key * 1000;
            roll.set(key, roll.get(key) - 3);
        }
    }
    score += (roll.get(1) || 0) * 100;
    score += (roll.get(5) || 0) * 50;
    return score;
};
exports.score = score;
console.log((0, exports.score)([1, 1, 1, 1, 3]));
//# sourceMappingURL=codewars-ts-5.js.map