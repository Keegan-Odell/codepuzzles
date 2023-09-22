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

// console.log(toCamelCase("the_stealth_warrior"));

export const uniqueInOrder = <T>(iterable: T[]): T[] => {
  let originalArray: T[] = Array.from(iterable);
  let unqiueArray: T[] = [];
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== originalArray[i + 1]) {
      unqiueArray.push(originalArray[i]);
      i += 1;
    }
  }
  return unqiueArray;
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

export const breakCamel = (camelCase: string): string => {
  let camelCaseArray: string[] = Array.from(camelCase);
  for (let i = 0; i < camelCaseArray.length; i++) {
    if (camelCaseArray[i] === camelCaseArray[i].toUpperCase()) {
      camelCaseArray.splice(i, 0, " ");
      i += 1;
    }
  }
  return camelCaseArray.join("");
};

// console.log(breakCamel("meowMeowMeow"));

// https://www.codewars.com/kata/546f922b54af40e1e90001da

export const alphabetPosition = (text: string): string => {
  const alphabetArray: string[] = Array.from(
    { length: 26 },
    (_, index: number) => String.fromCharCode(65 + index),
  );
  let textUpper: string = text.toUpperCase();
  let textToNumber: string[] = [];

  for (let letter of textUpper) {
    if (alphabetArray.includes(letter)) {
      textToNumber.push((alphabetArray.indexOf(letter) + 1).toString());
    }
  }
  return textToNumber.join(" ");
};

// console.log(alphabetPosition("meow"));

export const greet = (name: string): string => {
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}`;
};

export const pigIt = (sentence: string): string | string[] => {
  let sentenceArray: string[] = sentence.split(" ");
  return sentenceArray.map(pigatize).join(" ");
};

function pigatize(word: string): string {
  let punctuationRegex: RegExp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  if (punctuationRegex.test(word) || word === "") {
    return word;
  } else {
    let wordArray: string[] = word.split("");
    let letterToMove: string = wordArray[0];
    wordArray.splice(0, 1);
    wordArray.splice(wordArray.length, 0, letterToMove + "ay");
    return wordArray.join("");
  }
}

// console.log(pigIt("KCcnOIfhGsw "));

export const dirReduc = (arr: string[]): string[] | string => {
  //this is where we store our solved directions
  let solvedDirection: string[] = [];

  //loop through the OG directions
  for (let directions of arr) {
    if (
      directions === "EAST" &&
      solvedDirection[solvedDirection.length - 1] === "WEST"
    ) {
      solvedDirection.pop();
    } else if (
      directions === "WEST" &&
      solvedDirection[solvedDirection.length - 1] === "EAST"
    ) {
      solvedDirection.pop();
    } else if (
      directions === "NORTH" &&
      solvedDirection[solvedDirection.length - 1] === "SOUTH"
    ) {
      solvedDirection.pop();
    } else if (
      directions === "SOUTH" &&
      solvedDirection[solvedDirection.length - 1] === "NORTH"
    ) {
      solvedDirection.pop();
    } else {
      solvedDirection.push(directions);
    }
  }

  return solvedDirection;
};

// console.log(
//   dirReduc([
//     "WEST",
//     "SOUTH",
//     "EAST",
//     "SOUTH",
//     "NORTH",
//     "EAST",
//     "SOUTH",
//     "NORTH",
//     "WEST",
//     "EAST",
//     "SOUTH",
//     "SOUTH",
//     "NORTH",
//     "NORTH",
//   ]),
// );

export const productFib = (prod: number): [number, number, boolean] => {
  let prevFib: number = 0;
  let currentFib: number = 1;
  let prodFib: number = 0;

  while (prod > prodFib) {
    currentFib = currentFib + prevFib;
    prevFib = currentFib - prevFib;
    prodFib = currentFib * prevFib;
  }

  if (prod - prodFib === 0) {
    return [prevFib, currentFib, true];
  } else {
    return [prevFib, currentFib, false];
  }
};

// console.log(productFib(4895));

export const rot13 = (message: string): string => {
  let solvedMessage: string[] = [];

  for (let letter of message) {
    if (letter.toUpperCase() === letter.toLowerCase()) {
      solvedMessage.push(letter);
    } else if (letter === letter.toUpperCase()) {
      solvedMessage.push(letterShifter(letter).toUpperCase());
    } else {
      solvedMessage.push(letterShifter(letter));
    }
  }

  return solvedMessage.join("");
};

function letterShifter(letter: string): string {
  const alphabetArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  letter = letter.toLowerCase();
  let position: number = alphabetArray.indexOf(letter) + 13;
  if (position <= 25) {
    return alphabetArray[position];
  } else {
    return alphabetArray[position - 26];
  }
}

// console.log(rot13("m"));

export const formatDuration = (time: string): string => {
  const timeArray: string[] = time.split("");
  let solvedArray: string[] = [];
  let hourArray: string[] = [];
  let minuteArray: string[] = [];
  let secondArray: string[] = [];

  for (let char of timeArray) {
    if (char === "H") {
      let index: number = timeArray.indexOf("H") - 1;
      while (!isNaN(Number(timeArray[index]))) {
        hourArray.push(timeArray[index]);
        index -= 1;
      }
      hourArray.reverse();
      hourArray.push(":");
    } else if (char === "M") {
      let index: number = timeArray.indexOf("M") - 1;
      while (!isNaN(Number(timeArray[index]))) {
        minuteArray.push(timeArray[index]);
        index -= 1;
      }
      if (minuteArray.length < 2) {
        minuteArray.push("0");
      }
      minuteArray.reverse();
      minuteArray.push(":");
    } else if (char === "S") {
      let index: number = timeArray.indexOf("S") - 1;
      while (!isNaN(Number(timeArray[index]))) {
        secondArray.push(timeArray[index]);
        index -= 1;
      }
      if (secondArray.length < 2) {
        secondArray.push("0");
      }
      secondArray.reverse();
    }
  }

  if (timeArray.includes("H") && minuteArray.length < 1) {
    minuteArray.push("0", "0", ":");
  }
  if (!timeArray.includes("H") && !timeArray.includes("M")) {
    secondArray.unshift("0", ":");
  }
  console.log(hourArray);
  console.log(minuteArray);
  console.log(secondArray);
  return solvedArray.concat(hourArray, minuteArray, secondArray).join("");
};

// console.log(formatDuration("PT45S"));

export const HW2 = (array: number[]): void => {
  let stack: number[] = [];
  let counter: number = 0;
  for (let nums of array) {
    if (nums >= 0 && counter < 10) {
      stack.push(nums);
      counter++;
    }
  }
  while (stack.length != 0) {
    let i: number | undefined = stack.pop();
    console.log(i);
  }
};

// HW2([1, 2, -3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

export const orderWeight = (string: string): string => {
  let numberArray: any = string.split(" ").map((nums) => parseInt(nums));
  if (numberArray.length === 1) {
    return "";
  }
  let solvedArray: number[] = [];
  for (let i = 0; i <= numberArray.length; ) {
    if (numberArray.length === 0) {
      return solvedArray.join(" ");
    } else {
      let lowestNumberWeight: number = weightFinder(
        numberArray[numberArray.length - 1],
      );
      let numberToPush: number = numberArray[numberArray.length - 1];
      let counter: number = 2;
      while (true) {
        if (numberArray.length - counter === -1) {
          break;
        } else if (
          lowestNumberWeight >
          weightFinder(numberArray[numberArray.length - counter])
        ) {
          lowestNumberWeight = weightFinder(
            numberArray[numberArray.length - counter],
          );
          numberToPush = numberArray[numberArray.length - counter];
          counter++;
        } else if (
          lowestNumberWeight ===
            weightFinder(numberArray[numberArray.length - counter]) &&
          numberToPush
            .toString()
            .localeCompare(
              numberArray[numberArray.length - counter].toString(),
            ) === 1
        ) {
          lowestNumberWeight = weightFinder(
            numberArray[numberArray.length - counter],
          );
          numberToPush = numberArray[numberArray.length - counter];
          counter++;
        } else {
          counter++;
        }
      }
      solvedArray.push(numberToPush);
      numberArray.splice(numberArray.indexOf(numberToPush), 1);
    }
  }
  return "error";
};

function weightFinder(num: number): number {
  let numArray: number[] = num.toString().split("").map(Number);
  let weight: number = 0;
  for (let nums of numArray) {
    weight += nums;
  }
  return weight;
}

// console.log(orderWeight(""));

export const moveZeros = (arr: any[]): any[] => {
  let otherStorage: any[] = [];
  let zeroStorage: number[] = [];
  for (let thing of arr) {
    if (thing === 0) {
      zeroStorage.push(0);
    } else {
      otherStorage.push(thing);
    }
  }
  return otherStorage.concat(zeroStorage);
};

// console.log(
//   moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]),
// );

export const maxSequence = (arr: number[]): number => {
  let sumToBeat: number = 0;
  let tempArray: number[] = [...arr];
  if (arr.length === 0) {
    return 0;
  } else if (findNeg(arr)) {
    return arr.reduce((acc, curValue) => acc + curValue, 0);
  } else {
    for (let i = 0; i < arr.length; i++) {
      tempArray.splice(0, i);
      while (tempArray.length != 0) {
        let sum: number = tempArray.reduce(
          (acc, curValue) => acc + curValue,
          0,
        );
        if (sum > sumToBeat) {
          sumToBeat = sum;
        }
        tempArray.pop();
      }
      tempArray = [...arr];
    }
  }
  return sumToBeat;
};

function findNeg(arr: number[]): boolean {
  for (let nums of arr) {
    if (nums < 0) {
      return false;
    }
  }
  return true;
}

// console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));

export const generateHashtag = (str: string): string | boolean => {
  let stringLength: number = 0;
  let spaceBoolean: boolean = true;
  let strArray: string[] = str.split("");
  for (let chars of str) {
    if (chars !== " ") {
      stringLength++;
    }
  }
  if (stringLength > 139 || stringLength < 1) {
    return false;
  } else {
    for (let i = 0; i < strArray.length; i++) {
      if (spaceBoolean) {
        strArray[i] = strArray[i].toUpperCase();
        spaceBoolean = false;
      }
      if (strArray[i] === " ") {
        spaceBoolean = true;
      }
    }
    strArray.unshift("#");
    return strArray
      .filter((item: string): boolean => {
        return item !== " ";
      })
      .join("");
  }
};

// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

export const cakes = (
  recipe: Record<string, number>,
  available: Record<string, number>,
): number => {
  let lowestAmount: number = Number.MAX_VALUE;
  const recipeItems: string[] = Object.keys(recipe);
  const availableItems: string[] = Object.keys(available);
  for (let items of recipeItems) {
    if (!availableItems.includes(items)) {
      return 0;
    }
    let value = recipe[items];
    for (let aItems of availableItems) {
      let aValue = available[aItems];
      if (items === aItems) {
        let amount: number = aValue / value;
        if (amount < lowestAmount) {
          lowestAmount = amount;
        }
      }
    }
  }
  return Math.floor(lowestAmount);
};

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 },
//   ),
// );

export const firstNonRepeatingLetter = (s: string): string => {
  //1. break word into array - gonna use split method then check with console log to see if it works
  let stringArray: string[] = s.split("");
  //2. counter to count how many times it appears
  let counter: number = 0;
  //3. double loop first grabs letter to compare second compares that letter -  gonna check each loop with console.log
  for (let letter of stringArray) {
    for (let comparisonLetter of stringArray) {
      if (letter.toUpperCase() === comparisonLetter.toUpperCase()) {
        counter++;
      }
    }
    //this means its a unique letter return
    if (counter === 1) {
      return letter;
    }
    //turn counter back to 0
    counter = 0;
  }
  //return logic for no unique letters
  return "";
};

// console.log(firstNonRepeatingLetter("sTreSS"));

export const scramble = (str1: string, str2: string): boolean => {
  let str1Map: Map<string, number> = new Map();
  for (let letter of str1) {
    str1Map.set(letter, (str1Map.get(letter) || 0) + 1);
  }
  console.log(str1Map);
  for (const char of str2) {
    if (!str1Map.has(char) || str1Map.get(char) === 0) {
      return false;
    }
    str1Map.set(char, str1Map.get(char)! - 1);
  }

  return true;
};

// scramble("aabcccd", "fdsa");

export const score = (dice: number[]): number => {
  let roll: Map<number, number> = new Map();
  let score: number = 0;
  for (let rolls of dice) {
    roll.set(rolls, (roll.get(rolls) || 0) + 1);
  }
  console.log(roll.get(3));
  for (let [key, value] of roll) {
    if (roll.get(key)! >= 3 && key !== 1) {
      score += key * 100;
      roll.set(key, roll.get(key)! - 3);
    } else if (roll.get(key)! >= 3 && key === 1) {
      score += key * 1000;
      roll.set(key, roll.get(key)! - 3);
    }
  }
  score += (roll.get(1) || 0) * 100;
  score += (roll.get(5) || 0) * 50;
  return score;
};

console.log(score([1, 1, 1, 1, 3]));
