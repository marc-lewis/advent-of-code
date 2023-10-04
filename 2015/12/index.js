const fs = require('fs');
const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });

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
console.log(sum);
