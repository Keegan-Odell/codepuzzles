"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOddMap = exports.findOdd = void 0;
const findOdd = (numArray) => {
    let oddNumber = 0;
    let counter = 0;
    let checkedNumArray = [];
    for (let index = 0; index < numArray.length; index++) {
        const number = numArray[index];
        if (!checkedNumArray.includes(number)) {
            for (let i = 0; i < numArray.length; i++) {
                if (number === numArray[i]) {
                    counter += 1;
                }
            }
            if (counter % 2 === 1) {
                oddNumber = number;
                break;
            }
            else {
                checkedNumArray.push(number);
                counter = 0;
            }
        }
    }
    return oddNumber;
};
exports.findOdd = findOdd;
const findOddMap = (array) => {
    const numberCountMap = new Map();
    for (let nums of array) {
        let currentCount = numberCountMap.get(nums) || 0;
        numberCountMap.set(nums, (currentCount += 1));
    }
    for (let [key, value] of numberCountMap) {
        if (value % 2 === 1) {
            return key;
        }
    }
    return 0;
};
exports.findOddMap = findOddMap;
(0, exports.findOddMap)([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
//# sourceMappingURL=codewars-ts-1.js.map