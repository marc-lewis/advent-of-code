package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// file, err := os.ReadFile("example.txt")
	file, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}

	fileContent := strings.TrimSpace(string(file))
	fileArray := strings.Split(fileContent, "\n")

	result1 := partOne(fileArray)
	// result2 := partTwo(fileArray)
	fmt.Printf("Part 1: %d\n", result1)
	// fmt.Println(result1 + result2)
}

func partOne(fileArray []string) int {
	position := 50
	zeroCount := 0

	for i := 0; i < len(fileArray); i++ {
		instruction := fileArray[i]
		direction := instruction[0]
		initialDistance, _ := strconv.Atoi(instruction[1:])

		distance := initialDistance % 100

		if direction == 'L' {
			position -= distance
			if position < 0 {
				position = 100 + position
			}
		} else {
			position += distance
			if position > 99 {
				position = position - 100
			}
		}

		if position == 0 {
			zeroCount++
		}
	}

	return zeroCount
}

func partTwo(fileArray []string) int {
	position := 50
	zeroCount := 0

	for i := 0; i < len(fileArray); i++ {
		instruction := fileArray[i]
		direction := instruction[0]
		distance, _ := strconv.Atoi(instruction[1:])

		for distance > 0 {
			if direction == 'L' {
				position--
			} else {
				position++
			}
			if position == -1 {
				position = 99
			} else if position == 100 {
				position = 0
			}
			if position == 0 {
				zeroCount++
			}
			distance--
		}
	}

	return zeroCount
}

