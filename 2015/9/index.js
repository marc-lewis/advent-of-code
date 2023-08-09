const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).trim().split("\n");

function createPairs(input) {
  const cityPairs = {};
  input.forEach(route => {
    const [cities, distance] = route.split(" = ");
    const [start, finish] = cities.split(" to ");
    if (!cityPairs[start]) {
      cityPairs[start] = {};
    }
    if (!cityPairs[finish]) {
      cityPairs[finish] = {};
    }
    cityPairs[start][finish] = parseInt(distance);
    cityPairs[finish][start] = parseInt(distance);
  });
  return cityPairs;
}
// Heap's Algorithm
function permuteRoutes(cities) {
  var length = cities.length,
    result = [cities.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = cities[i];
      cities[i] = cities[k];
      cities[k] = p;
      ++c[i];
      i = 1;
      result.push(cities.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const cityPairs = createPairs(input);
const routes = permuteRoutes(Object.keys(cityPairs));
const routeLengths = [];
for (let i = 0; i < routes.length; i++) {
  let distance = 0;
  let route = routes[i];
  for (let j = 0; j < route.length - 1; j++) {
    distance += cityPairs[route[j]][route[j + 1]];
  }
  routeLengths.push(distance);
}

console.log(Math.min(...routeLengths));
console.log(Math.max(...routeLengths));
