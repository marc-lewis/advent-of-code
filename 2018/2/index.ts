import { readFileSync } from 'fs'

function part1 (): number {
  const input = readFileSync('./input.txt', 'utf-8').trim().split('\n')

  let countTwo = 0
  let countThree = 0

  for(let i = 0; i < input.length; i++) {
    const counts = new Map()
    for(let j = 0; j < input[i].length; j++) {
      const char = input[i][j]
      counts.set(char, (counts.get(char) || 0) + 1)
    }
    for(let [_, value] of counts) {
      if(value === 2) {
        countTwo++
        break
      }
    }
    for(let [_, value] of counts) {
      if(value === 3) {
        countThree++
        break
      }
    }

  }
  return countTwo * countThree
}

function part2(): string {
  const input = readFileSync('./input.txt', 'utf-8').trim().split('\n')
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let diff = 0
      let common = ''
      for (let k = 0; k < input[i].length; k++) {
        if (input[i][k] !== input[j][k]) {
          diff++
        } else {
          common += input[i][k]
        }
      }
      if (diff === 1) {
        return common
      }
    }
  }
  return ''
}

console.log(part1())
console.log(part2())
