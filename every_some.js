function checkUsersValid(goodUsers) {

    function isInGoodUsers(subUser){
        let result = goodUsers.some(goodUser => goodUser.id === subUser.id)
        return result
    }

    function allUsersValid(submittedUsers) {
        let result = submittedUsers.every(isInGoodUsers)
        return result
    }
    return allUsersValid
}
module.exports = checkUsersValid
// let goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]
//
// let test = [
//       { id: 2 },
//       { id: 1 }
//     ]
//
// console.log('should work ', checkUsersValid(goodUsers)(test) === true)
