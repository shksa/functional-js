function doubleAll(numbers) {
      // SOLUTION GOES HERE
      doubled_numbers = numbers.map(x => x * 2);
      return doubled_numbers
    }

function compare(result, expected){
  let len = result.length
  for (let i=0;i<len;i++){
    if(result[i]===expected[i]){
      continue;
    }
    else{
      return false
    }
  }
  return true
}

// module.exports = doubleAll
console.log('should work for array', compare(doubleAll([1, 2, 3, 4]), [2, 4, 6, 8]))
