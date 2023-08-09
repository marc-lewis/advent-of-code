import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8").trim().split("\n");

/**
 * each char code for the items in the comparments:
 * a = 1, z = 26
 * A = 27, Z = 52
 * to convert:
 * "a.charCodeAt(0) is 97, subtract 96 to get 1"
 * "A.charCodeAt(0) is 65, subtract 38 to get to 27"
 */
function getCharVal(char: string): number {
  const charCode = char.charCodeAt(0);
  return charCode < 97 ? charCode - 38 : charCode - 96;
}

function getIntersects(...args: string[]): string[] {
  let oldIntersects = new Set(args[0]);
  for (let i = 1; i < args.length; i++) {
    let newIntersects: Set<string> = new Set();
    const inventory = args[i];
    for (let j = 0; j < inventory.length; j++) {
      let item = inventory[j];
      if(oldIntersects.has(item)) {
        newIntersects.add(item);
      }
    }
    oldIntersects = newIntersects;
  }
  return [ ...oldIntersects ];
}


function part1 (): number {
  let allItems: string[] = [];
  input.forEach((itemSet: string) => {
    const midPoint = itemSet.length / 2;
    const compartment1 = itemSet.slice(0, midPoint);
    const compartment2 = itemSet.slice(midPoint);
    const intersects = getIntersects(compartment1, compartment2);
    allItems = [ ...allItems, ...intersects ];
  });
  return allItems.reduce((sum: number, char: string) => sum + getCharVal(char), 0);
}

function part2 (): number {
  let allItems: string[] = [];
  for(let i = 0; i < input.length; i += 3) {
    const intersects = getIntersects(input[i], input[i + 1], input[i + 2]);
    allItems = [ ...allItems, ...intersects ];
  }
  return allItems.reduce((sum: number, char: string) => sum + getCharVal(char), 0);
}

console.log(part1());
console.log(part2());
