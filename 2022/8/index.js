const fs = require("fs");
const input = fs.readFileSync("./input-example.txt", "utf8").trim();

function getTreeMatrix(input) {
  return input
    .split("\n")
    .map(line => line.split('')
      .map(height => ({ height, visible: false}))
    );
}

function calculateVisibleTrees(matrix, delta, start) {
  let [ y, x ] = start;
  let tree = matrix[y][x]
  const [ dY, dX ] = delta;
  let maxHeight = tree.height;

  while (tree) {
    console.log(tree.height);
    tree.visible = tree.height > maxHeight ? true : tree.visible;
    maxHeight = tree.visible ? tree.height : maxHeight;

    y += dY;
    x += dX;

    if(matrix[y] && matrix[y][x]) {
      tree = null;
    } else {
      tree = matrix[y][x];
    }
  }
}

function part1(treeMatrix) {
  // stop once we get to a visible tree
  const directions = {
    up: [-1, 0],
    down: [1, 0],
    right:[0, 1],
    left: [0, -1]
  };

  // 0 1 2
  // x x x 0
  // x x x 1
  // x x x 2

  // each row
  for(let y = 0; y < treeMatrix.length; y++) {
    // each col
    console.log(`calculate row ${y}`);
    for(let x = 0; x < treeMatrix[0].length; x++) {
      if(x === 0) {
        calculateVisibleTrees(treeMatrix, directions.right, [ y, x ]) // ltr
      } else if (x === treeMatrix[0].length - 1) {
        calculateVisibleTrees(treeMatrix, directions.left, [ y, x ]) // rtl
      }
      if(y === 0) {
        calculateVisibleTrees(treeMatrix, directions.down, [y, x]) // up down
      } else if (y === treeMatrix.length - 1) {
        calculateVisibleTrees(treeMatrix, directions.up, [y, x]) // down up
      }
      console.log(`calculate col ${x}`);
    }
  }

  console.log(treeMatrix);
}

const treeMatrix = getTreeMatrix(input);
part1(treeMatrix);
