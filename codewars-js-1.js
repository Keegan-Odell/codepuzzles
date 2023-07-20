// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
function squareDigits(int) {
	let squaredNumArray = [];
	let numArray = Array.from(int.toString());
	for (meow of numArray) {
		let num = Math.pow(Number(meow), 2);
		squaredNumArray.push(num);
	}
	return Number(squaredNumArray.join(''));
}

squareDigits(123);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(num) {
	let arrayof3_5 = [];
	for (let i = 1; i < num; i++) {
		if (i % 3 === 0) {
			arrayof3_5.push(i);
		} else if (i % 5 === 0) {
			arrayof3_5.push(i);
		}
	}
	return arrayof3_5.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
}

solution(123)
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
	let valueString = value.toString();
	let lengthOfBase = valueString.length;
	let poweredStuff = 
    Array.from(value.toString())
		.map((num) => Math.pow(Number(num), lengthOfBase))
		.reduce((acc, cur) => acc + cur, 0);

    return poweredStuff === value
}

narcissistic(123)

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter(array) {
  return array.filter((ele) => typeof(ele) !== 'string')
}

console.log(filter([1,2,'a','b']))



