function squareSum(array) {
	return array.map(square).reduce(sum)
}

function square(number) {
	return number * number
}

function sum(first, second) {
	return first + second
}