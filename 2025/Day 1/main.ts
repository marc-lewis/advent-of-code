import { readFileSync } from 'fs';

// const file = readFileSync('example.txt', 'utf8').trim();
const file = readFileSync('input.txt', 'utf8').trim();

const fileArray = file.split('\n');

function partOne() {
    let position = 50
    let zeroCount = 0


    for (let i = 0; i < fileArray.length; i++) {
        const instruction = fileArray[i];
        const direction = instruction[0]
        const initialDistance = parseInt(instruction.slice(1))

        const distance = initialDistance % 100;

        if (direction === 'L'){
            position -= distance;
            if (position < 0) {
                position = 100 + position;
            }

        } else {
            position += distance;
            if (position > 99) {
                position = position - 100;
            }
        }

        if (position === 0) {
            zeroCount++;
        }
    }

    return zeroCount;
}

function partTwo() {
    let position = 50
    let zeroCount = 0

    for (let i = 0; i < fileArray.length; i++) {
        const instruction = fileArray[i];
        const direction = instruction[0]
        let distance = parseInt(instruction.slice(1))

        while(distance > 0) {
            if (direction === 'L') {
                position--;
            } else {
                position++;
            }
            if(position === -1) {
                position = 99;
            } else if(position === 100) {
                position = 0;
            }
            if (position === 0) {
                zeroCount++;
            }
            distance--;
        }
    }

    return zeroCount;
}

const start1 = performance.now();
const result1 = partOne();
const elapsed1 = performance.now() - start1;
console.log(`Part 1: zero count is ${result1} (took ${elapsed1.toFixed(3)}ms)`);

const start2 = performance.now();
const result2 = partTwo();
const elapsed2 = performance.now() - start2;
console.log(`Part 2: zero passes is ${result2} (took ${elapsed2.toFixed(3)}ms)`);

console.log(result1 + result2);
