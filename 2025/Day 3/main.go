package main

import (
	"fmt"
	"math"
	"os"
	"strings"
)

func partOne() int {
	fmt.Println("Part 1")
	file, err := os.ReadFile("example.txt")
	// file, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}
	lines := strings.Split(strings.TrimSpace(string(file)), "\n")
	count := 0
	for _, line := range lines {
		nums := [2]int{0, 0}
		length := len(line)
		for i := 0; i < length; i++ {
			num := int(line[i] - '0')
			if (num > nums[0] && i < length - 1) {
				nums[0] = num
				nums[1] = int(line[i + 1] - '0')
			} else if (num > nums[1]) {
				nums[1] = num
			}
		}
		// add the product
		// fmt.Println(line)
		// fmt.Println(nums)
		count += (nums[0] * 10) + nums[1]
	}

	return count
}

func partTwo(numCellsToTurnOn int) int {
	fmt.Println("Part 2")
	// file, err := os.ReadFile("input.txt")
	file, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}

	count := 0
	banks := strings.Split(strings.TrimSpace(string(file)), "\n")
	for _, bank := range banks {
		joltages := make([]int, numCellsToTurnOn)
		bankLength := len(bank)
		for i := 0; i < bankLength; i++ {
			cell := int(bank[i] - '0')
			remainingCells := bankLength - i
			pointerStart := 0
			if (remainingCells >= numCellsToTurnOn) {
				pointerStart = 0
			} else {
				pointerStart = len(joltages) - remainingCells
			}
			for j := pointerStart; j < len(joltages); j++ {
				if (cell > joltages[j]) {
					joltages[j] = cell
					for k := j + 1; k < len(joltages); k++ {
						joltages[k] = int(bank[i + k] - '0')
					}
					break
				}
			}
		}
		fmt.Println(bank)
		fmt.Println(joltages)
		for i, num := range joltages {
			count += num * int(math.Pow(10, float64(numCellsToTurnOn - i - 1)))
		}
	}
	return count
}

func main() {
	fmt.Printf("Part 1: %d\n", partOne())
	fmt.Printf("Part 2: %d\n", partTwo(3))
}

// ABCDEFGHI
// X
// 0000
