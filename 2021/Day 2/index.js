const fs = require("fs");

function getPosition(commands, useAim = false) {
  let xPos = 0;
  let yPos = 0;
  let aim = 0;

  for (let i = 0; i < commands.length; i++) {
    const commandParts = commands[i].split(" ");
    const direction = commandParts[0].trim();
    const unit = parseInt(commandParts[1]);

    switch(direction) {
      case "forward":
        xPos += unit
        if(useAim) {
          yPos += aim * unit
        }
        break;
      case "down":
        useAim ? aim += unit : yPos += unit;
        break;
      case "up":
        useAim? aim -= unit : yPos -= unit;
        break;
    }
  }
  return xPos * yPos;
}

const input = fs.readFileSync(process.argv[2], {encoding:'utf8', flag:'r'})
  .trim()
  .split("\n");

console.log(getPosition(input, process.argv[3]));
