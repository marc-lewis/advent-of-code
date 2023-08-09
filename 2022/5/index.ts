import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8");

interface Stack extends Array<string> {}
interface Stacks extends Array<Stack> {}

function getStacks(stackDiagram: string): Stacks {
  let stackRows = stackDiagram.split("\n");
  // The stacks are just a matrix we can rotate 90˚.
  // Would two loops have been easier here for readability? Absolutely!
  // The bottom row has a full complement of items, so we can use that to loop through
  // as the top stack isn't string padded enough to complete the initial map call
  return stackRows[stackRows.length - 2]
    .split('')
    .map((_, colIndex) => stackRows
      .map(row => row[colIndex])
      // filter out items
      .filter(item => /[A-Z]/.test(item))
      .reverse()
    )
    // take every 4th row starting at index 1 to get items
    .filter((_, i) => (i - 1) % 4 === 0);
}

function moveItems(stacks: Stacks, instructions: string, reverse: boolean): Stacks {
  const newStack = [ ...stacks ];
  instructions.trim().split("\n").forEach(instruction => {
    const parts = instruction.match(/^move (\d+) from (\d+) to (\d+)$/)!;
    const count = parseInt(parts[1]);
    const start = parseInt(parts[2]) - 1;
    const end = parseInt(parts[3]) - 1;
    const items = newStack[start].splice(-count);
    if(reverse) {
      newStack[end] = [ ...newStack[end], ...items.reverse() ]
    } else {
      newStack[end] = [ ...newStack[end], ...items ]
    }
  });
  return newStack;
}

function getTopItems (input: string, reverse: boolean) {
  const [ stackDiagram, instructions ] = input.split("\n\n");
  const stacks = getStacks(stackDiagram);
  const organisedStacks = moveItems(stacks, instructions.trim(), reverse);
  return organisedStacks.reduce((items: Stack, stack: Stack) => {
    return [ ...items, stack[stack.length -1]];
  }, []).join("");
}

console.log(getTopItems(input, true));
console.log(getTopItems(input, false));
