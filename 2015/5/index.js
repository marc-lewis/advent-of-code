const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

function part1() {
  const matchThreeVowels = /[aeiou].*[aeiou].*[aeiou]/;
  const twoCharRepeat = /(.)\1/;
  const dontMatchThese = /^(?:(?!ab|cd|pq|xy).)*$/;

  let countNiceStrings = 0;
  for (let i = 0; i < input.length; i++) {
    if (matchThreeVowels.test(input[i]) &&
      twoCharRepeat.test(input[i]) &&
      dontMatchThese.test(input[i])
    ) {
      countNiceStrings++;
    }
  }
  return countNiceStrings;
}

function part2() {
  const repeatedTwoStrings = /([a-zA-Z]{2}).*\1/;
  const repeatedCharWithCharbetween = /([a-zA-Z]).{1}\1/;
  let countNiceStrings = 0;
  for (let i = 0; i < input.length; i++) {
    if (repeatedTwoStrings.test(input[i]) &&
      repeatedCharWithCharbetween.test(input[i])
    ) {
      countNiceStrings++;
    }
  }
  return countNiceStrings;
}

console.log(part1());
console.log(part2());
