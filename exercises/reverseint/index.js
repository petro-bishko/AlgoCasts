// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/** Solution 1 */
// function reverseInt(n) {
// 	const reversed = n.toString().split('').reverse().join('');
//
// 	if(n < 0){
// 		return parseInt(reversed) * -1;
// 	}
//
// 	return parseInt(reversed);
// }
/** Solution 2 */
function reverseInt(n) {
	const reversed = n.toString().split('').reverse().join('');
	
	console.log(Math.sign(n)); // TODO remove console.log
	return parseInt(reversed) * Math.sign(n);
}


console.log(reverseInt(15)); // TODO remove console.log
console.log(reverseInt(981)); // TODO remove console.log
console.log(reverseInt(500)); // TODO remove console.log
console.log(reverseInt(-15)); // TODO remove console.log
console.log(reverseInt(-90)); // TODO remove console.log

module.exports = reverseInt;
