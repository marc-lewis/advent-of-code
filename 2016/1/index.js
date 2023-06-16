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

function hasVisited(x, y) {
  if (!visited[`${x},${y}`]) {
    visited[`${x},${y}`] = true;
  } else {
    console.log(`visited ${x},${y} twice`);
  }
}

input.split(", ").forEach(command => {
  const direction = command[0];
  const distance = command.slice(1);
  if (direction === "L") {
    cardinal = (((cardinal - 1) % 4) + 4) % 4;
  } else {
    cardinal = (((cardinal + 1) % 4) + 4) % 4;
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
console.log(currentPosition);
