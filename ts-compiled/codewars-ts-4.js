"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.towerBuilder = exports.likes = void 0;
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
console.log((0, exports.likes)(["Peter", "Alex", "Mark", "Max"]));
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
console.log((0, exports.towerBuilder)(3));
//# sourceMappingURL=codewars-ts-4.js.map