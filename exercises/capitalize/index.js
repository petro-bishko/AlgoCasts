// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/** Solution 1 */
// function capitalize(str) {
// 	const arr = [];
//
// 	for (let el of str.split(' ')) {
// 		arr.push(el[0].toUpperCase() + el.slice(1));
// 	}
//
// 	return arr.join(' ');e
// }
/** Solution 2 */
function capitalize(str) {
	let result = str[0].toUpperCase();
	
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	
	return result;
}

console.log(capitalize('look, it is working!')); // TODO remove console.log
module.exports = capitalize;
