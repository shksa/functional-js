// function count_calls(fn){
//     function wrapper(a, b){
//         wrapper.count += 1
//         let result = fn(a, b)
//         return result
//     }
//     return wrapper
// }
// function dummy(){
//   return 1
// }
// dummy = count_calls(dummy)

function repeat(operation, num) {
      // SOLUTION GOES HERE
      // operation.count = 0
      for(let i=0;i<num;i++){
        operation()
      }
      // return operation.count
}
module.exports = repeat
// console.log('should work ', repeat(dummy, 4) === 4)
//
// console.log('should work for n=0', repeat(dummy, 0) === 0)
