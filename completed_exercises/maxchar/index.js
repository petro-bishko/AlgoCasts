// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const chartMap = {};
	let max = 0;
	let maxChart = '';
	
	for (let char of str) {
		if (chartMap[char]) {
			chartMap[char]++;
		} else {
			chartMap[char] = 1;
		}
	}
	
	for (let c in chartMap) {
		if (chartMap[c] > max) {
			max = chartMap[c];
			maxChart = c;
		}
	}
	
	return maxChart;
}

console.log(maxChar('eeeeedfsdfsdf')); // TODO remove console.log

function bubleSrot(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr
	
}

console.log(bubleSrot([4, 1, 5, 8, 2, 8])); // TODO remove console.log

function binarySort(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	
	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);
		
		if (arr[mid] === target) {
			return mid;
		}
		
		if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	
	return -1;
	
}

console.log(binarySort([1, 4, 6, 7], 1)); // TODO remove console.log

function polidrom(str) {
	let reversed = '';
	for (let s of str) {
		reversed = s + reversed;
	}
	
	return reversed === str;
}

console.log(polidrom('mam')); // TODO remove console.log


function fib(n) {
	if (n < 2) {
		return n;
	}
	
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // TODO remove console.log

module.exports = maxChar;
