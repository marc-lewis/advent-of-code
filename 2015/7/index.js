const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

/**
 * @typedef {Object} Node
 * @property {string} key - The key of the node
 * @property {string} value - The value of the node
 */

class Graph {
  #nodes = {};
  #memo = {}

  /**
   * @param {Node} node
   */
  addNode(node) {
    if (!this.#nodes[node.key]) {
      this.#nodes[node.key] = node.value;
    } else {
      console.error(`The node ${node.key} already exists`);
    }
  }

  /**
   * @param {Node}
   * @returns {number}
   */
  #evaluateNode(node) {
    let left, op, right;
    const parts = node.value.split(" ");
    if (parts.length === 3) {
      [left, op, right] = parts;
    } else if (parts.length === 2) {
      [op, right] = parts;
    } else {
      const result = parseInt(node.value);
      if (isNaN(result)) {
        return this.getNode(node.value);
      } else {
        return result;
      }
    }
    switch (op) {
      case "NOT":
        return (~this.getNode(right)) & 0xffff;
      case "AND":
        return (
          (parseInt(left) || this.getNode(left))
          &
          this.getNode(right)
        ) & 0xffff;
      case "OR":
        return (
          this.getNode(left)
          |
          this.getNode(right)
        ) & 0xffff;
      case "LSHIFT":
        return (
          this.getNode(left)
          <<
          parseInt(right)
        ) & 0xffff;
      case "RSHIFT":
        return (
          this.getNode(left)
          >>
          parseInt(right)
        ) & 0xffff;
    }
  }

  getNode(key) {
    if (!this.#memo[key]) {
      this.#memo[key] = this.#evaluateNode({ key, value: this.#nodes[key] });
    }
    return this.#memo[key];
  }

  getNodes() {
    return this.#nodes;
  }
}

function part1() {
  const graph = new Graph();
  input.forEach(node => {
    const [value, key] = node.split(" -> ");
    graph.addNode({ key, value });
  });
  return graph.getNode("a");
}
console.log(`the answer to part1 is ${part1()}`);
