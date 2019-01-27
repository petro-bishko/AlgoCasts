// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }
// function reverse(str) {
// 	let reversed = '';
//
// 	for(let s of str){
// 		reversed = s + reversed;
// 	}
// 	return reversed;
// }

function reverse(str) {
	return str.split('').reduce((res, s) => s + res);
}

console.log(reverse('apple')); // TODO remove console.log;
console.log(reverse('hello')); // TODO remove console.log

module.exports = reverse;
