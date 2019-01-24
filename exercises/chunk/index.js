// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const resultArr = [];
	const chunlkArr = [];
	for (let n of array) {
		if (chunlkArr.length < size) {
			chunlkArr.push(n)
		}
		console.log(n); // TODO remove console.log
	}
	
	console.log(chunlkArr); // TODO remove console.log
}

console.log(chunk([1, 2, 3, 4], 2)); // TODO remove console.log

module.exports = chunk;
