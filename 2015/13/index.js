const fs = require("fs");
const { serialize } = require("v8");
const input = fs.readFileSync("./example.txt", {
  encoding: "utf8"
}).trim().split("\n");

const happinessMap = {};

input.forEach((direction) => {
  const result = direction.split(" ");
  const person1 = result[0];
  const person2 = result[10].replace(".", "");
  let unit = parseInt(result[3], 10);
  if ("lose" === result[2]) {
    unit = 0 - unit;
  }
  if (!happinessMap[person1]) {
    happinessMap[person1] = {};
  }
  happinessMap[person1][person2] = unit;
});

const people = Object.keys(happinessMap);
people.forEach(person => {
  happinessMap[person]["npc"] = 0;
  if (!happinessMap["npc"]) {
    happinessMap["npc"] = {};
  }
  happinessMap["npc"][person] = 0;
});


// Heap's Algorithm
function permuteSeating(people) {
  var length = people.length,
    result = [people.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = people[i];
      people[i] = people[k];
      people[k] = p;
      ++c[i];
      i = 1;
      result.push(people.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const seatingPlans = permuteSeating(Object.keys(happinessMap));
let happinessMax = 0;

for (let i = 0; i < seatingPlans.length; i++) {
  let happiness = 0;
  const seatingPlan = seatingPlans[i];
  for (let k = 0; k < seatingPlan.length; k++) {
    const person1 = seatingPlan[k];
    let nextPerson = k + 1;
    if (nextPerson >= seatingPlan.length) {
      nextPerson = 0;
    }
    const person2 = seatingPlan[nextPerson];
    happiness += happinessMap[person1][person2] + happinessMap[person2][person1];
  }
  if (happiness > happinessMax) {
    happinessMax = happiness;
  }
}
console.log(happinessMax);
