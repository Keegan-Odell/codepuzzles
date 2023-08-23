// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
//
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

export const findOdd = (numArray: number[]): number => {
  let oddNumber: number = 0;
  let counter: number = 0;
  let checkedNumArray: number[] = [];

  for (let index: number = 0; index < numArray.length; index++) {
    const number: number = numArray[index];
    if (!checkedNumArray.includes(number)) {
      for (let i: number = 0; i < numArray.length; i++) {
        if (number === numArray[i]) {
          counter += 1;
        }
      }
      if (counter % 2 === 1) {
        oddNumber = number;
        break;
      } else {
        checkedNumArray.push(number);
        counter = 0;
      }
    }
  }
  return oddNumber;
};

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

//This is solving the same problem with a new concept called map
//Map allows us to make double arrays in the same data structure
export const findOddMap = (array: number[]): number => {
  const numberCountMap: Map<number, number> = new Map();

  for (let nums of array) {
    let currentCount: number = numberCountMap.get(nums) || 0;
    numberCountMap.set(nums, (currentCount += 1));
  }

  for (let [key, value] of numberCountMap) {
    if (value % 2 === 1) {
      return key;
    }
  }
  return 0;
};

// findOddMap([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
