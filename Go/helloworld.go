package main

import "fmt"

func main() {
	ages := []int{10, 12, 30}
	ages = append(ages, 40, 18)
	fmt.Println(ages)
}
