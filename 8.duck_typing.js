function duckCount() {
	let values = Object.values(arguments)
	// function call_back(value){
	// 	if (Object.prototype.hasOwnProperty.call(value, 'quack'))
	// 		return 1
	// 	else
	// 		return 0
	// }
	// let temp = values.map(call_back)
	// let result = temp.reduce(function(prev, curr){
	// 	return prev + curr
	// }, 0)
	// return result
	let result = values.reduce(function(count, value){
		if (Object.prototype.hasOwnProperty.call(value, 'quack')){
			return count + 1
		}
		else{
			return count
		}
	}, 0)
	return result
}

// module.exports = duckCount
let notDuck = Object.create({quack: true})
let duck = {quack: true}
let notDuckAlso = {meow: true}
let empty = {}
console.log('should work for basic case', duckCount(notDuck, duck, notDuckAlso) === 1)
console.log('should work for empty case', duckCount(notDuck, duck, notDuckAlso, empty) === 1)
