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
