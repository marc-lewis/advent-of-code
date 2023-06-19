const fs = require("fs");
// const input = fs.readFileSync("./input-example.txt", "utf8").trim();
const input = fs.readFileSync("./input.txt", "utf8").trim();

let cardinal = 0;
let currentPosition = [0, 0];
const cardinals = [
  [1, 0], // N
  [0, 1], // E
  [-1, 0], // S
  [0, -1], // W
]
const visited = {};
let notifiyVisit = true;

function hasVisited(x, y) {
  if (!visited[`${x},${y}`]) {
    visited[`${x},${y}`] = true;
  } else if (notifiyVisit) {
    console.log(`Part 2: ${x + y}`);
    notifiyVisit = false;
  }
}

input.split(", ").forEach(command => {
  const direction = command[0];
  const distance = command.slice(1);
  if (direction === "L") {
    // turning left is like turning right 3 times. We could use regular mod instead
    // of this expression to handle negatives:
    // cardinal = (cardinal + 3) % 4
    cardinal = (((cardinal - 1) % 4) + 4) % 4;
  } else {
    cardinal = (cardinal + 1) % 4;
  }
  const [x, y] = currentPosition;
  const [dx, dy] = cardinals[cardinal];
  for (let i = 0; i < (Math.abs(dx) * distance); i++) {
    currentPosition[0] += dx;
    hasVisited(currentPosition[0], y)
  }
  for (let j = 0; j < (Math.abs(dy) * distance); j++) {
    currentPosition[1] += dy;
    hasVisited(x, currentPosition[1])
  }
});
console.log(`Part 1: ${currentPosition[0] + currentPosition[1]}`);
