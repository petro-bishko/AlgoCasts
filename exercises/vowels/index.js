// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
// 	let count = 0;
// 	const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//
// 	for (let char of str.toLowerCase()) {
// 		if (vowelsArr.includes(char)) {
// 			count++;
// 		}
// 	}
//
// 	return count;
// }


function vowels(str) {
	const matched = str.match(/[aeiou]/gi);
	
	return matched ? matched.length : 0;
}

console.log(vowels('Hi There!')); // TODO remove console.log

module.exports = vowels;
