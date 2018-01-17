function upperCaser(input) {
	// SOLUTION GOES HERE
	if(input)
		return input.toUpperCase()
	else{
		return null
	}
}
module.exports = upperCaser
// console.log('should work for strings', upperCaser('hello') === 'HELLO')
// console.log('should not work for empty strings', upperCaser('') === null)
