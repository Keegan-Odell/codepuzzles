export const likes = (a: string[]): string => {
  switch (a.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a[0]} and ${a[1]} like this`;
    case 3:
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    default:
      let otherNumber: number = a.length - 2;
      return `${a[0]}, ${a[1]} and ${otherNumber} others like this`;
  }
};

console.log(likes(["Peter", "Alex", "Mark", "Max"]));

//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

export const towerBuilder = (nFloors: number): string[] => {
  let starTower: string[] = [];
  let stars: number = 1;
  let spaces = nFloors - 1;
  let starString: string = "*";
  let spaceString: string = " ";
  if (nFloors === 1) {
    starTower = ["*"];
    return starTower;
  } else {
    for (let i: number = 0; i <= nFloors - 1; i++) {
      let floor =
        spaceString.repeat(spaces) +
        starString.repeat(stars) +
        spaceString.repeat(spaces);
      starTower.push(floor);
      stars += 2;
      spaces -= 1;
    }
    return starTower;
  }
};

console.log(towerBuilder(3));
