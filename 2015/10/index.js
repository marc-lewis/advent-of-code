const input = 1113222113;

function lookAndSay(input) {
  let left = 0;
  let right = 1;
  let result = "";
  while (input[left]) {
    while (input[left + right] === input[left]) {
      right++;
    }
    result += `${right}${input[left]}`;
    left += right;
    right = 1;
  }
  return result;
}

function iterate(generations, input) {
  let result = input.toString();
  for (let i = 0; i < generations; i++) {
    console.log(i);
    let temp = lookAndSay(result);
    result = temp;
  }
  return result;
}

const part1 = iterate(40, input.toString());
console.log(`part1: ${part1.length}`);
const part2 = iterate(50, input.toString());
console.log(`part2: ${part2.length}`);
