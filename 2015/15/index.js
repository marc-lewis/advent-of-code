const fs = require("fs");
const input = fs.readFileSync("./example.txt", { encoding: "utf-8" }).trim().split("\n");

const properties = []
for (let i = 0; i < input.length; i++) {
  const parts = input[i].split(" ")
  properties[i] = [
    parseInt(parts[2]),
    parseInt(parts[4]),
    parseInt(parts[6]),
    parseInt(parts[8])
  ]
}
let max = 0;

for (let sugar = 0; sugar <= 100; sugar++) {
  for (let sprinkles = 0; sprinkles <= 100; sprinkles++) {
    for (let candy = 0; candy <= 100; candy++) {
      for (let chocolate = 0; chocolate <= 100; chocolate++) {
        if (sugar + sprinkles + candy + chocolate === 100) {
          const amounts = [sugar, sprinkles, candy, chocolate]
          const sums = []
          for (let i = 0; i < properties[0].length; i++) {
            let sum = 0;
            for (let j = 0; j < properties.length; j++) {
              sum += properties[j][i] * amounts[i]
            }
          }
        }
      }
    }
  }
}




