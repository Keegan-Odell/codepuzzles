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

console.log(digitalRoot(456));
