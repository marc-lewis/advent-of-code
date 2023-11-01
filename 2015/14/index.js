const fs = require('fs')
const input = fs.readFileSync('./example.txt', { encoding: 'utf8' }).trim().split('\n')
const reindeers = {};

input.forEach(reindeer => {
  const parts = reindeer.split(' ')
  reindeers[parts[0]] = {
    speed: parseInt(parts[3], 10),
    duration: parseInt(parts[6], 10),
    rest: parseInt(parts[13], 10),
    distance: 0,
    points: 0
  }
})

for (let second = 0; second < 2503; second++) {
  let leader;
  for (const reindeer of Object.values(reindeers)) {
    const remainder = second % (reindeer.duration + reindeer.rest)
    if (remainder < reindeer.duration) {
      reindeer.distance += reindeer.speed
    }
    if (!leader || (reindeer.distance > leader.distance)) {
      leader = reindeer
    }
  }
  leader.points += 1
}
console.log(reindeers)
