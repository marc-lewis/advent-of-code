package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	// file, err := os.ReadFile("example.txt")
	file, err := os.ReadFile("input.txt")
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
		count += (nums[0] * 10) + nums[1]
	}
	fmt.Printf("count: %d\n", count)
}
