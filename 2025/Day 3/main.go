package main

import (
	"fmt"
	"math"
	"os"
	"strings"
)

// Keep getting the largest number until the window size is reached
// then start fililng the stack
// This is a greedy algo, similar to
// "Create Maximum Number" (LeetCode 321)
// and "Remove K Digits" (LeetCode 402)
func enableCells(numCellsToTurnOn int) int {
	// fmt.Println("Part 2")
	file, err := os.ReadFile("input.txt")
	// file, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}

	count := 0
	banks := strings.Split(strings.TrimSpace(string(file)), "\n")
	for _, bank := range banks {
		stack := make([]int, 0, numCellsToTurnOn)
		toSkip := len(bank) - numCellsToTurnOn

		// fmt.Println(bank)
		for i := 0; i < len(bank); i++ {
			joltage := int(bank[i] - '0')
			for len(stack) > 0 && toSkip > 0 && joltage > stack[len(stack)-1] {
				stack = stack[:len(stack)-1]
				toSkip--
			}

			if len(stack) < numCellsToTurnOn {
				stack = append(stack, joltage)
			} else {
				toSkip--
			}
			// fmt.Println(stack)
		}

		for i, num := range stack {
			count += num * int(math.Pow(10, float64(numCellsToTurnOn-i-1)))
		}
	}
	return count
}

func main() {
	// fmt.Printf("Part 1: %d\n", enableCells(2))
	fmt.Printf("Part 2: %d\n", enableCells(12))
}
