function checkUsersValid(goodUsers) {

    function isInGoodUsers(user){
        let result = goodUsers.some(guser => guser.id === user.id)
        return result
    }

    function allUsersValid(submittedUsers) {
        let result = submittedUsers.every(isInGoodUsers)
        return result
    }
    return allUsersValid
}
// module.exports = checkUsersValid
var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

var test = [
      { id: 2 },
      { id: 1 }
    ]

console.log('should work ', checkUsersValid(goodUsers)(test) === true)
