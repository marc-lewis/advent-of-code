const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

function part1() {
  let totalChars = 0;
  let totalLiterals = 0;
  input.forEach(line => {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "\"") {
        totalChars += 1;
      } else if (`${line[i]}${line[i + 1]}` === "\\x") {
        i += 3;
        totalChars += 4;
        totalLiterals += 1;
      } else if (line[i] === "\\") {
        i += 1;
        totalChars += 2;
        totalLiterals += 1;
      } else {
        totalChars += 1;
        totalLiterals += 1;
      }
    }
  });
  return totalChars - totalLiterals;
}

console.log(part1());
