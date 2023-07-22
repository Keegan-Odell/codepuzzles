// Create a function that takes an integer as an argument and returns "Even" or even numbers or "Odd" or odd numbers.
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

evenOrOdd(1);

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be
// included only when more than one word is present.

function spinWords(string) {
  let stringArray = string.split(" ");
  let spunArray = [];
  for (let words of stringArray) {
    if (words.length > 4) {
      let characters = words.split("");
      let reversedCharacters = characters.reverse();
      let reversedWord = reversedCharacters.join("");
      spunArray.push(reversedWord);
    } else {
      spunArray.push(words);
    }
  }
  return spunArray.join(" ");
}

spinWords("finished");

//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty, and you do not need to account for different data types.

function findShort(string) {
  let stringArray = string.split(" ");
  let shortestWord = stringArray[0];
  stringArray.forEach((word) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  });
  return shortestWord.length;
}

findShort("testng test testing");
