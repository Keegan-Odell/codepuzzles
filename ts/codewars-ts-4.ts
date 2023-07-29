export const likes = (a: string[]): string => {
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
      let otherNumber: number = a.length - 2;
      return `${a[0]}, ${a[1]} and ${otherNumber} others like this`;
  }
};

// console.log(likes(["Peter", "Alex", "Mark", "Max"]));

//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

export const towerBuilder = (nFloors: number): string[] => {
  let starTower: string[] = [];
  let stars: number = 1;
  let spaces = nFloors - 1;
  let starString: string = "*";
  let spaceString: string = " ";
  if (nFloors === 1) {
    starTower = ["*"];
    return starTower;
  } else {
    for (let i: number = 0; i <= nFloors - 1; i++) {
      let floor =
        spaceString.repeat(spaces) +
        starString.repeat(stars) +
        spaceString.repeat(spaces);
      starTower.push(floor);
      stars += 2;
      spaces -= 1;
    }
    return starTower;
  }
};

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!

export function createPhoneNumber(numbers: number[]): string {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

export function findOutlier(integers: number[]): number {
  let evenNums: number[] = [];
  let oddNums: number[] = [];
  for (let nums of integers) {
    if (nums % 2 === 0) {
      evenNums.push(nums);
    } else {
      oddNums.push(nums);
    }
  }
  if (evenNums.length === 1) {
    return evenNums[0];
  } else {
    return oddNums[0];
  }
}

// console.log(findOutlier([1, 2, 3]));

export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number,
): number[] {
  let loopCounter: number = n;
  let numsArray: number[] = [a, b, c];
  while (loopCounter > 3) {
    let number: number =
      numsArray[numsArray.length - 3] +
      numsArray[numsArray.length - 2] +
      numsArray[numsArray.length - 1];
    numsArray.push(number);
    loopCounter--;
  }
  return numsArray.splice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
