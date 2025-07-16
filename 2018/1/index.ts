import { readFileSync } from 'fs'

/**
 * @returns The sum of all the frequencies
 */
function part1 (): number {
  const input = readFileSync('./input.txt', 'utf-8').trim().split('\n')
  let freq = 0
  for(let i = 0; i < input.length; i++) {
    freq += parseInt(input[i], 10)
  }
  return freq
}

/**
 * @returns The first frequency that is reached twice
 */
function part2 (): number | undefined {
  const input = readFileSync('./input.txt', 'utf-8').trim().split('\n')
  let seen = new Set()
  let freq = 0
  let i = 0
  while (true) {
    seen.add(freq)
    freq += parseInt(input[i], 10)
    if (seen.has(freq)) {
      return freq
    }
    i = (i + 1) % input.length
  }
}

console.log(`part1: ${part1()}`)
console.log(`part2: ${part2()}`)
