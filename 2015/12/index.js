const fs = require('fs');
const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });

function part1() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i])) || input[i] === "-") {
      let j = i + 1;
      while (!isNaN(parseInt(input[j]))) {
        j++;
      }
      sum += parseInt(input.substring(i, j));
      i += (j - i);
    }
  }
  return sum;
}

// [{
//   "c": {
//     "e":"violet",
//     "a":-44,
//     "d":115,
//     "c":117,
//     "h":194,
//     "b":{
//       "e":-17,"a":172,"d":"green","c":197,"h":53,"b":106,"g":"violet","f":-10
//     },
//     "g":"red",
//     "f":"orange"
//   },
//   "a":-49,
//   "b":["violet","orange","blue"]
// }]
function part2() {
  let sum = 0;
  let sums = [];
  let stackBrackets = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{" || input[i] === "[") {
      stackBrackets.push(input[i]);
    } else if (input[i] === "}" || input[i] === "]") {
      stackBrackets.pop();
    } else if (input[i] + input[i + 1] + input[i + 2] === "red") {
      sum += 1;
      console.log(stackBrackets);
    }
  }
  return sum;
}

// console.log(`part 1: ${part1()}`);
console.log(`part 2: ${part2()}`);
