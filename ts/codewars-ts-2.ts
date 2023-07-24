// Complete the method which returns the number which is most frequent in the
// given input array. If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.
//
//   Examples
//   [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//   [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//   [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr: number[]): number {
  let numberMap: Map<number, number> = new Map();

  for (let num of arr) {
    numberMap.set(num, (numberMap.get(num) || 0) + 1);
  }

  let keyToValue: number = -1;
  let highestValue: number = -1;

  for (let [key, value] of numberMap) {
    if (value > highestValue || (value === highestValue && key > keyToValue)) {
      keyToValue = key;
      highestValue = value;
    }
  }
  return keyToValue;
}

console.log(highestRank([-3, -3, -2, -2, 0, -1]));
