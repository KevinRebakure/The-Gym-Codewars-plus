package main

import "strings"
import "regexp"


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



func GetCountOthersSolution(str string) (count int) {
	r := regexp.MustCompile("[aeiou]")
	vowels := r.FindAllString(str, -1)
	return len(vowels)
}