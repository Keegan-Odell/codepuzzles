export function duplicateCount(text: string): number {
  let textLowerArray: string[] = Array.from(text.toLowerCase());
  let numberMap: Map<string, number> = new Map();
  let counter: number = 0;

  for (let char of textLowerArray) {
    let numberMapGet: number = numberMap.get(char) || 0;
    numberMap.set(char, numberMapGet + 1);
  }

  for (let [key, value] of numberMap) {
    if (value > 1) {
      counter++;
    }
  }

  return counter;
}

// console.log(duplicateCount("TEST"))

//DESCRIPTION:
//
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Example:
//
// solution(1000); // should return 'M'

export function romanNumber(number: number): string {

}

console.log(romanNumber(4));
