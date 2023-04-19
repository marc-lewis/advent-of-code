const input = "bgvyzdsv";
const md5 = require("blueimp-md5");

function part1(input) {
  let i = 0;
  while (true) {
    const result = md5(`${input}${i}`);
    // console.log(`${i} ${result}`)
    if (result.slice(0, 5) === "00000") {
      return i;
    }
    i++;
  }
}

function part2(input) {
  let i = 0;
  while (true) {
    const result = md5(`${input}${i}`);
    // console.log(`${i} ${result}`)
    if (result.slice(0, 6) === "000000") {
      return i
    }
    i++;
  }
}

console.log(`part1: ${part1(input)}`);
console.log(`part2: ${part2(input)}`);
