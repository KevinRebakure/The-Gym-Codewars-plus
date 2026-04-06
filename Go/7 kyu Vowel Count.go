package main

import "strings"

func GetCount(str string) (count int) {
	vowels := "aeiouAEIOU"
	characters := strings.Split(str, "")

	count = 0

	for _, character := range characters {
		if strings.ContainsRune(vowels, rune(character[0])) {
			count++
		}
	}

	return count
}
