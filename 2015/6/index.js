const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

function createGrid() {
  const NUM_ROWS = 1000;
  const NUM_COLUMNS = 1000;
  const lights = [];
  for (let i = 0; i < NUM_COLUMNS; i++) {
    lights[i] = new Array(NUM_ROWS);
    for (let j = 0; j < NUM_ROWS; j++) {
      lights[i][j] = 0;
    }
  }
  return lights;
}

function updateGrid(instructions, grid) {
  let count = 0;
  instructions.forEach(instruction => {
    const instructionParts = instruction.split(" through ");
    const end = instructionParts[1].split(",").map(coord => parseInt(coord, 10));
    if (instructionParts[0].startsWith("turn")) {
      instructionParts[0] = instructionParts[0].slice(5);
    }
    const verb = instructionParts[0].split(" ")[0];
    const start = instructionParts[0].split(" ")[1].split(",").map(coord => parseInt(coord, 10));
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        switch (verb) {
          case "on":
            if (grid[i][j] === 0) {
              grid[i][j] = 1;
              count++;
            }
            break;
          case "off":
            if (grid[i][j] === 1) {
              grid[i][j] = 0;
              count--;
            }
            break;
          case "toggle":
            if (grid[i][j] === 1) {
              grid[i][j] = 0;
              count--;
            } else {
              grid[i][j] = 1;
              count++;
            }
            break;
          default:
            console.log(`verb "${verb}" not found`)
        }
      }
    }
  });
  return count;
}

function part1() {
  const grid = createGrid();
  return updateGrid(input, grid);
}

console.log(part1());
