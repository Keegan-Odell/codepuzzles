// Digital root is the recursive sum of all the digits in a number.
//
// 	Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
// 	Examples
//
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

export const digitalRoot = (n: number): number => {
  //stop point logic for recursive function
  //if the number is 1 digit we stop
  if (n < 10) {
    return n;
  } else {
    // if our stop point logic did not work we return the
    // digitalRoot function that turns n into an array
    //then uses .reduce to add them up
    // because it is a function it will keep looping
    //keep doing this till stop point logic succeeds
    return digitalRoot(
      Number(
        Array.from(n.toString()).reduce(
          (acc, val) => Number(acc) + Number(val),
          0,
        ),
      ),
    );
  }
};

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
//
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

export const persistence = (num: number): number => {
  let loopCounter: number = 0;
  while (num >= 10) {
    num = Number(
      Array.from(num.toString()).reduce(
        (acc, val) => Number(acc) * Number(val),
        1,
      ),
    );
    loopCounter += 1;
  }
  return loopCounter;
};
