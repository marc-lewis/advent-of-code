package main

import (
	"fmt"
	"os"
	"slices"
	"strconv"
	"strings"
)

func main() {
	sum := 0
	// data, err := os.ReadFile("./example.txt")
	data, err := os.ReadFile("./input.txt")
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		return
	}
	content := string(data)

	var left = []int{}
	var right = []int{}

	lines := strings.Split(strings.TrimSpace(content), "\n")
	for i := 0; i < len(lines); i++ {
		parts := strings.Split(lines[i], "   ")
		leftVal, _ := strconv.Atoi(parts[0])
		rightVal, _ := strconv.Atoi(parts[1])
		left = append(left, leftVal)
		right = append(right, rightVal)
	}

	slices.Sort(left)
	slices.Sort(right)

	for i := 0; i < len(left); i++ {
		value := left[i] - right[i]
		if value < 0 {
			value = -value
		}
		sum += value
	}
	fmt.Println("Total Sum:", sum)
}
