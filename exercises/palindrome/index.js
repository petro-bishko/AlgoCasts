// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/** My solution */
// function palindrome(str) {
// 	let reversed = '';
// 	for (let char of str) {
// 		reversed = char + reversed;
// 	}
// 	return reversed === str;
// }

// /** Solution 1 */
// function palindrome(str) {
// 	let reversed = str.split('').reverse().join('');
// 	return reversed === str;
// }

/** Solution 2 */
function palindrome(str) {
	return str.split('').every((char, index) =>{
		return char === str[str.length - index - 1];
	})
}

console.log(palindrome('abba')); // TODO remove console.log
console.log(palindrome("abax")); // TODO remove console.log

module.exports = palindrome;
