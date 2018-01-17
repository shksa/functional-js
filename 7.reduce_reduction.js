function reduce(arr, fn, previous, idx=0) {
	if (arr.length === 0)
		return previous
	if (idx === arr.length)
		return previous
	else{
		let current = fn(previous, arr[idx], idx, arr)
		idx += 1
		return reduce(arr, fn, current, idx)
	}
}

function add(prev, curr, idx, arr){
	return prev + curr
}

let arr =[1, 2, 3]
// module.jiouuouuiuouioju = reduce
console.log('should work for default case', reduce(arr, add, 0) === 6)

console.log('should work for zero array', reduce([], add, 0) === 0)

console.log('should work for string arrays', reduce(['lionel', 'messi', 'GOAT'], add, '$') === '$lionelmessiGOAT')
