import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8").trim().split("\n");

function sortInput (input: string[]): number[][][] {
  return input.map((pair: string) => pair
    .split(",")
    .map(slot => {
      return slot
        .split("-")
        .map((section: string) => parseInt(section))

    })
    .sort((a:number[], b: number[]) => {
      const diff = a[0] - b[0];
      // sort by start, then sort by range if start is the same
      // e.g.: [1, 1] [1, 3] sorts to [1, 3] [1, 1]
      if (diff === 0) {
        return b[1] - a[1];
      } else {
        return diff
      }
    }));
}

function countContainments(intervals: number[][][]): number {
  return intervals.reduce((count: number, pair: number[][]) => {
    if(pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}
// [22, 26], [22, 24]
function countOverlaps(intervals: number[][][]): number {
  return intervals.reduce((count: number, pair: number[][]) => {
    if(pair[1][0] <= pair[0][1]) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

// part 1
console.log(countContainments(sortInput(input)));
// part 2
console.log(countOverlaps(sortInput(input)));
