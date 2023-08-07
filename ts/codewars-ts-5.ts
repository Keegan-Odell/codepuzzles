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

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
//
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
//
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

export function duplicateEncode(word: string): string {
  let wordArray: string[] = Array.from(word.toLowerCase());
  let encodedArray: string[] = [];
  let wordMap: Map<string, number> = new Map();

  for (let char of wordArray) {
    let wordCount: number = wordMap.get(char) || 0;
    wordMap.set(char, (wordCount += 1));
  }

  for (let char of wordArray) {
    if (wordMap.get(char)! > 1) {
      encodedArray.push(")");
    } else {
      encodedArray.push("(");
    }
  }

  return encodedArray.join("");
}

// console.log(duplicateEncode("Success"));

console.log("test");

//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/typescript
export function isValidWalk(walk: string[]): boolean {
  if (walk.length === 10) {
    return isHome(walk);
  } else {
    return false;
  }
}

function isHome(array: string[]): boolean {
  let coordinates: { x: number; y: number } = {
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

// console.log(isValidWalk(["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"]));

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/python
export function arrayDiff(a: number[], b: number[]): number[] {
  for (let nums of b) {
    while (a.includes(nums)) {
      let numToErase: number = a.indexOf(nums);
      a.splice(numToErase, 1);
    }
  }
  return a;
}

// console.log(arrayDiff([1, 2, 3], [1, 2]));

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples
//
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

export function order(words: string): string {
  let wordMap: Map<number, string> = new Map();
  let wordsArray: string[] = words.split(" ");
  for (let word of wordsArray) {
    for (let char of word) {
      if (!isNaN(parseInt(char))) {
        wordMap.set(parseInt(char), word);
      }
    }
  }
  wordMap = new Map([...wordMap.entries()].sort());
  let solution: string = "";
  for (let [key, value] of wordMap) {
    if (key === 1) {
      solution = value;
    } else {
      solution = solution + " " + value;
    }
  }
  return solution;
}

// console.log(order("is2 Thi1s T4est 3a"));

//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

export const isPangram = (phrase: string): boolean => {
  phrase = phrase.toLowerCase();
  let uniqueLetters: string[] = [];
  for (let chars of phrase) {
    if (isChar(chars)) {
      if (!uniqueLetters.includes(chars)) {
        uniqueLetters.push(chars);
      }
    }
  }
  return uniqueLetters.length === 26;
};

function isChar(char: string): boolean {
  return char.toLowerCase() !== char.toUpperCase();
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
export const toCamelCase = (str: string): string => {
  let strArray: string[] = Array.from(str);
  let i: number = 0;
  for (let chars of strArray) {
    if (chars === "-" || chars === "_") {
      strArray.splice(i, 1);
      strArray[i] = strArray[i].toUpperCase();
    }
    i += 1;
  }
  return strArray.join("");
};

console.log(toCamelCase("the_stealth_warrior"));
