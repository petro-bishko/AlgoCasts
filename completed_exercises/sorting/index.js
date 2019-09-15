// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function polidrom(str) {
	let reversed = '';
	
	for(let s of str){
		reversed = s + reversed;
	}
	
	return reversed === str;
	
	
}

console.log(polidrom('mam')); // TODO remove console.log

function bubbleSort(arr) {
	// Implement bubblesort
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				const lesser = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = lesser;
			}
		}
	}
	
	// return the sorted array
	return arr;
}

console.log(bubbleSort([2, 3, 5, 3, 1, 55, 323])); // TODO remove console.log

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

console.log(selectionSort([3, 4, 5, 1, 2, 3, 4, 5, 4])); // TODO remove console.log

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

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
