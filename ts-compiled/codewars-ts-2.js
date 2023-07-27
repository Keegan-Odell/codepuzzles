"use strict";
function highestRank(arr) {
    let numberMap = new Map();
    for (let num of arr) {
        numberMap.set(num, (numberMap.get(num) || 0) + 1);
    }
    let keyToValue = -1;
    let highestValue = -1;
    for (let [key, value] of numberMap) {
        if (value > highestValue || (value === highestValue && key > keyToValue)) {
            keyToValue = key;
            highestValue = value;
        }
    }
    return keyToValue;
}
console.log(highestRank([-3, -3, -2, -2, 0, -1]));
//# sourceMappingURL=codewars-ts-2.js.map