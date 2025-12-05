// import example.txt
package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func partOne(input string) int {
	line := strings.TrimSpace(input)
	numStart := 0
	numEnd := 0
	count := 0

	numRanges := strings.Split(line, ",")
	for _, numRanges := range numRanges {
		numParts := strings.Split(numRanges, "-")
		numStart, _ = strconv.Atoi(numParts[0])
		numEnd, _ = strconv.Atoi(numParts[1])

		for i := numStart; i <= numEnd; i++ {
			s := strconv.Itoa(i)
			length := len(s)
			if length%2 == 0 {
				mid := length / 2
				if s[:mid] == s[mid:] {
					count += i
				}
			}
		}
	}
	return count
}

func partTwo(input string) int {
	line := strings.TrimSpace(input)
	numStart := 0
	numEnd := 0
	count := 0

	numRanges := strings.Split(line, ",")
	for _, numRanges := range numRanges {
		numParts := strings.Split(numRanges, "-")
		numStart, _ = strconv.Atoi(numParts[0])
		numEnd, _ = strconv.Atoi(numParts[1])

		for i := numStart; i <= numEnd; i++ {
			factors := []int{}
			length := len(strconv.Itoa(i))
			for j := 2; j <= length; j++ {
				if length%j == 0 {
					factors = append(factors, j)
				}
			}
			for _, factor := range factors {
				numString := strconv.Itoa(i)
				numStringParts := []string{}
				splitLength := length / factor
				for j := 0; j < len(numString); j += splitLength {
					numStringParts = append(numStringParts, numString[j:j+splitLength])
				}
				allSame := true
				for _, numStringPart := range numStringParts {
					if numStringPart != numStringParts[0] {
						allSame = false
						break
					}
				}
				if allSame {
					count += i
					break
				}
			}
		}
	}
	return count
}


func main() {
	// file, _ := os.ReadFile("example.txt")
	file, _ := os.ReadFile("input.txt")
	fileContent := string(file)

	partOneCount := partOne(fileContent)
	fmt.Printf("Part 1: %d", partOneCount)
	partTwoCount := partTwo(fileContent)
	fmt.Printf("Part 2: %d\n", partTwoCount)
}

