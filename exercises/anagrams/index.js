// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
/** My solution */
// function anagrams(stringA, stringB) {
// 	stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
// 	stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
// 	const arrA = {};
// 	const arrB = {};
//
// 	for (let el of stringA) {
// 		arrA[el] = arrA[el] + 1 || 1;
// 	}
//
// 	for (let el of stringB) {
// 		arrB[el] = arrB[el] + 1 || 1
// 	}
//
// 	if (Object.keys(arrA).length !== Object.keys(arrB).length) {
// 		return false;
// 	}
//
// 	for (let char in arrA) {
// 		if (arrA[char] !== arrB[char]) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }
/** Solution 1 */
// function anagrams(stringA, stringB) {
// 	const charMapA = buildCharMap(stringA);
// 	const charMapB = buildCharMap(stringB);
//
// 	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	}
//
// 	for (let char in charMapA) {
// 		if (charMapA[char] !== charMapB[char]) {
// 			return false;
// 		}
// 	}
//
// 	return true;
//
// }
//
// function buildCharMap(str) {
// 	str = str.replace(/[^\w]/g, '').toLowerCase();
// 	const charMap = {};
// 	for (let char of str) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
//
// 	return charMap;
// }

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}


console.log(anagrams('rail safety', 'fairy tales')); // TODO remove console.log
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // TODO remove console.log
console.log(anagrams('Hi there', 'Bye there')); // TODO remove console.log
//
module.exports = anagrams;
