function reduce(arr, fn, prev, idx=0) {
	if (idx === arr.length)
		return prev
	else{
		let curr = fn(prev, arr[idx], idx, arr)
		idx += 1
		return reduce(arr, fn, curr, idx)
	}
}

function add(prev, curr, idx, arr){
	return prev + curr
}

let arr =[1, 2, 3]
// module.jiouuouuiuouioju = reduce
console.log('should work for default case', reduce(arr, add, 0) === 6)
