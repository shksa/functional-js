function call_back(table, word){
    if(table[word]){
        table[word] += 1
    }
    else{
        table[word] = 1
    }
    return table
}

function countWords(inputWords) {
    let table = {}
    let result = inputWords.reduce(call_back, table)
    return result
}

module.exports = countWords

// let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//
// let output = {
//       Apple: 2,
//       Banana: 1,
//       Durian: 3
//     }
//
// function compare(result, expected){
//   let len = result.length
//   for (let i=0;i<len;i++){
//     if(result[i] === expected[i]){
//       continue;
//     }
//     else{
//       return false
//     }
//   }
//   return true
// }


// console.log('should work', compare(countWords(inputWords), output));
