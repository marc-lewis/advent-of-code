const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let totalSquareFootage = 0;
let totalRibbonLength = 0;

for(let i = 0; i < input.length; i++) {
  const [l, w, h] = input[i].split("x").map(num => parseInt(num));
  const [lw, wh, hl] = [ l*w, w*h, h*l ];

  const facesOrdered = [ lw, wh, hl ].sort((a, b) => a - b);
  totalSquareFootage += 2 * (lw + wh + hl) + facesOrdered[0];

  const edgesOrdered = [ l, w, h ].sort((a, b) => a - b);
  totalRibbonLength += ((edgesOrdered[0] + edgesOrdered[1]) * 2) + (l * w * h);
}

console.log(`the total square footage is : ${totalSquareFootage}`);
console.log(`the total ribbon length is : ${totalRibbonLength}`);
