import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8").trim().split("\n");

/**
 * Points per object:
 * A X Rock: 1
 * B Y Paper: 2
 * C Z Scissors: 3
 *
 * Points per outcome:
 * Win: 6
 * Draw: 3
 * Lose: 0
 */
const part1Map = {
  A: {
    X: 4, // r r draw
    Y: 8, // r p win
    Z: 3  // r s lose
  },
  B: {
    X: 1,  // p r lose
    Y: 5, // p p draw
    Z: 9, // p s win
  },
  C: {
    X: 7, // s r win
    Y: 2,  // s p lose
    Z: 6  // s s draw
  }
}

/**
 * Points per object:
 * A Rock: 1
 * B Paper: 2
 * C Scissors: 3
 *
 * Points per outcome:
 * Z Win: 6
 * Y Draw: 3
 * X Lose: 0
 */
const part2Map = {
  A: {
    X: 3, // r s lose
    Y: 4, // r r draw
    Z: 8  // r p win
  },
  B: {
    X: 1, // p r lose
    Y: 5, // p p draw
    Z: 9, // p s win
  },
  C: {
    X: 2, // s p lose
    Y: 6, // s s draw
    Z: 7  // s r win
  }
}

function sumMatch (outcomeMap: object): number {
  return input.reduce((sum: number, match: string) => {
    const signs = match.split(" ");
    return sum + outcomeMap[signs[0]][signs[1]]
  }, 0);
}

console.log(sumMatch(part1Map));
console.log(sumMatch(part2Map));
