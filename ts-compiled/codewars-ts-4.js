"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = exports.findOutlier = exports.createPhoneNumber = exports.towerBuilder = exports.likes = void 0;
const likes = (a) => {
    switch (a.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${a[0]} likes this`;
        case 2:
            return `${a[0]} and ${a[1]} like this`;
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            let otherNumber = a.length - 2;
            return `${a[0]}, ${a[1]} and ${otherNumber} others like this`;
    }
};
exports.likes = likes;
const towerBuilder = (nFloors) => {
    let starTower = [];
    let stars = 1;
    let spaces = nFloors - 1;
    let starString = "*";
    let spaceString = " ";
    if (nFloors === 1) {
        starTower = ["*"];
        return starTower;
    }
    else {
        for (let i = 0; i <= nFloors - 1; i++) {
            let floor = spaceString.repeat(spaces) +
                starString.repeat(stars) +
                spaceString.repeat(spaces);
            starTower.push(floor);
            stars += 2;
            spaces -= 1;
        }
        return starTower;
    }
};
exports.towerBuilder = towerBuilder;
function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
exports.createPhoneNumber = createPhoneNumber;
function findOutlier(integers) {
    let evenNums = [];
    let oddNums = [];
    for (let nums of integers) {
        if (nums % 2 === 0) {
            evenNums.push(nums);
        }
        else {
            oddNums.push(nums);
        }
    }
    if (evenNums.length === 1) {
        return evenNums[0];
    }
    else {
        return oddNums[0];
    }
}
exports.findOutlier = findOutlier;
function tribonacci([a, b, c], n) {
    let loopCounter = n;
    let numsArray = [a, b, c];
    while (loopCounter > 3) {
        let number = numsArray[numsArray.length - 3] +
            numsArray[numsArray.length - 2] +
            numsArray[numsArray.length - 1];
        numsArray.push(number);
        loopCounter--;
    }
    return numsArray.splice(1, n);
}
exports.tribonacci = tribonacci;
console.log(tribonacci([1, 1, 1], 10));
//# sourceMappingURL=codewars-ts-4.js.map