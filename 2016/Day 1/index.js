const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim();

let cardinal = 0;
let currentPosition = [0 , 0];
const cardinals = [
  [1, 0], // N
  [0, 1], // E
  [-1, 0], // S
  [0, -1], // W
]

input.split(", ").forEach(command => {
  const pattern = /(\w)(\d)+/g;
  const [ _, direction, distance ] = pattern.exec(command);
  if(direction = "L") {
    cardinal == -- cardinal % 4;
  } else {
    cardinal == ++ cardinal % 4;
  }

});
