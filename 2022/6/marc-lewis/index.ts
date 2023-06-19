import { readFileSync } from "node:fs";
const input = readFileSync("./input.txt", "utf8");

// classic sliding window
function getMarker (windowSize: number, buffer: string): number|undefined {
  let head = 0;
  const chars: string[] = [];

  for(let i = 0; i < buffer.length; i++) {
    const currentChar = buffer[i];
    while(chars.includes(currentChar)) {
      chars.shift();
    }
    chars.push(currentChar);
    head++;
    if (chars.length === windowSize) {
      return head;
    }
  }
}

function main (input: string) {
  input.trim().split("\n").forEach((buffer: string) => {
    console.log(getMarker(4, buffer));
    console.log(getMarker(14, buffer));
  });
}

main(input);
