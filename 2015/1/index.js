console.time("Day 1");
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim();

let floor = 0;
let basementPosition = null;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    floor++;
  } else if (input[i] === ")") {
    floor--;
  }

  if (floor === -1 && basementPosition === null) {
    basementPosition = i + 1;
  }
}

console.log(`Santa ends up on floor ${floor} and enters the basement at position ${basementPosition}`);
console.timeEnd("Day 1");
