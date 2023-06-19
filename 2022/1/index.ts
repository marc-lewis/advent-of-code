
import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8").split("\n");

function setElfCalorieCounts(elfCounts: number[], newCount: number): number[] {
  const newElfCounts = [ ...elfCounts ];
  if(newCount > newElfCounts[newElfCounts.length - 1]) {
    newElfCounts.push(newCount);
    newElfCounts.sort((a, b) => b - a);
    newElfCounts.pop();
  }
  return newElfCounts;
}

function getMaxCals (numElves: number): number  {
  let newCount = 0;
  let elfCounts = new Array(numElves).fill(0);

  input.forEach((calorieCount: string)=> {
    const currentCal = parseInt(calorieCount);
    if(currentCal) {
      newCount += currentCal
    } else {
      elfCounts = setElfCalorieCounts(elfCounts, newCount);
      newCount = 0;
    }
  });

  return elfCounts.reduce((accumulator, current) => accumulator + current, 0);
}

// part 1
console.log(getMaxCals(1));
// part 2
  console.log(getMaxCals(3));

