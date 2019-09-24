/////////////////////////////////////////////////////// polidrom

function polidrom(str) {
	let reversed = '';
	for (let s of str) {
		reversed = s + reversed;
	}
	
	//   const reversed = str
	//     .split('')
	//     .reverse()
	//     .join('');
	
	return reversed === str;
}

/////////////////////////////////////////////////////// reverseInt

function reverseInt(n) {
	const reversed = n
	.toString()
	.split('')
	.reverse()
	.join('');
	
	return parseInt(reversed) * Math.sign(n);
}

/////////////////////////////////////////////////////// fib

function fib(n) {
	if (n < 2) {
		return n;
	}
	
	return fib(n - 1) + fib(n - 2);
}

/////////////////////////////////////////////////////// maxChar

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

//////////////////////////////////////////////////////// array chunk

function chunk(array, size) {
	const chunked = [];
	let index = 0;
	
	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}
	
	return chunked;
}

/////////////////////////////////////////////////////// capitalize

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

/////////////////////////////////////////////////////// fizzBuzz

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		// Is the number a multiple of 3 and 5?
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			// Is the number a multiple of 3?
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

///////////////////////////////////////////////////////
// SORTING ARRAYS
///////////////////////////////////////////////////////

/////////////////////////////////////////////////////// bubleSrot

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

/////////////////////////////////////////////////////// binarySort

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

/////////////////////////////////////////////////////// selectionSort

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		
		if (indexOfMin !== i) {
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	
	return arr;
}

/////////////////////////////////////////////////////// mergeSort

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	
	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);
	
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const results = [];
	
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	
	return [...results, ...left, ...right];
}

