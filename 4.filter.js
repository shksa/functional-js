
function getShortMessages(objs) {
	let result_objs = objs.filter(obj => obj.message.length < 6)
	let result_msgs = result_objs.map(obj => obj.message)
	return result_msgs
}

// module.exports = getShortMessages
let objs = [
	{
		message:'jagyjagsjka'
	},
	{
		message:'shgjkshdjkcdnckncjdsncjk'
	},
	{
		message:'hello'
	},
	{
		message:'world'
	}
]

function compare(result, expected){
	let len = result.length
	for (let i=0;i<len;i++){
		if(result[i]===expected[i]){
			continue
		}
		else{
			return false
		}
	}
	return true
}

console.log('should work', compare(getShortMessages(objs), ['hello', 'world']))
