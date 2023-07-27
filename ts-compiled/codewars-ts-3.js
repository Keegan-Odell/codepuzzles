"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    }
    else {
        return (0, exports.digitalRoot)(Number(Array.from(n.toString()).reduce((acc, val) => Number(acc) + Number(val), 0)));
    }
};
exports.digitalRoot = digitalRoot;
const persistence = (num) => {
    let loopCounter = 0;
    while (num >= 10) {
        num = Number(Array.from(num.toString()).reduce((acc, val) => Number(acc) * Number(val), 1));
        loopCounter += 1;
    }
    return loopCounter;
};
exports.persistence = persistence;
//# sourceMappingURL=codewars-ts-3.js.map