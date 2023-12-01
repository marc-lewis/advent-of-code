const fs = require("fs");
const input = fs.readFileSync("./example.txt", { encoding: "utf-8" }).trim().split("\n")

function isNum(item) {
  return !isNaN(parseInt(item, 10))
}

sumPart1 = 0
sumPart2 = 0
const words = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

input.forEach(calibration => {
  let firstDigitPart1 = -1
  let lastDigitPart1 = -1
  let firstDigitPart2 = -1
  let lastDigitPart2 = -1

  for (let i = 0; i < calibration.length; i++) {
    let char = calibration[i]
    if (isNum(char)) {
      if (firstDigitPart1 === -1) {
        firstDigitPart1 = char
      }
      lastDigitPart1 = char

      if (firstDigitPart2 === -1) {
        firstDigitPart2 = char
      }
      lastDigitPart2 = char
    } else {
      for (let j = 0; j < words.length; j++) {
        const potentialMatch = calibration.slice(i, i + words[j].length)
        if (potentialMatch === words[j]) {
          if (firstDigitPart2 === -1) {
            firstDigitPart2 = j + 1
          }
          lastDigitPart2 = j + 1
        }
      }
    }
  }
  sumPart1 += parseInt(`${firstDigitPart1}${lastDigitPart1}`)
  sumPart2 += parseInt(`${firstDigitPart2}${lastDigitPart2}`)
})

console.log(`Part 1: ${sumPart1}`)
console.log(`Part 2: ${sumPart2}`)
