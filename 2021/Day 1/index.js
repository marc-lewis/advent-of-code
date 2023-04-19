var fs = require("fs");

function sum(previous, current) {
    return previous + current
};

function getRollingWindowIncrements(items, windowSize) {
  let increments = 0;
  const end = items.length - windowSize;
  for(let i = 0; i < end; i++) {
    const window1 = items.slice(i, i + windowSize).reduce(sum);
    const window2 = items.slice(i + 1, i + 1 + windowSize).reduce(sum);
    if(window2 > window1) {
      increments++;
    }
  }
  return increments;
}

const input = fs.readFileSync(process.argv[2], {encoding:'utf8', flag:'r'})
  .trim()
  .split("\n")
  .map(item => parseInt(item));

console.log(getRollingWindowIncrements(input, parseInt(process.argv[3])));
