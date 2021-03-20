// find the missing number in a given integer array 1 to 100
let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const findMissingNumber = (arr) => {
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] + 1 != arr[i + 1]) {
			return arr[i] + 1;
		}
	}

	return false;
}

// console.log(findMissingNumber(arr));

// Find duplicate number in an array of integers.
//  *********RETURN********* integer - the duplicate number ******ASSUMPTION******* if no duplicate number found return false

const arr1 = [1, 2, 3, 4, 5, 5, 9, 10];

const findDupes = (arr1) => {

	// Create a hash
	const observed = {};

	for (let i = 0; i < arr1.length; i++) {
		if (observed[arr1[i]]) {
			return arr1[i]
		} else {
			observed[arr1[i]] = arr1[i];
		}
	}

	return false;
}

// console.log(findDupes(arr1));

// Find the largest and smallest number in an unsorted array of integers
const arr2 = [1, 2, 3, 4, 10];

const findMaxMin = () => {
	let max = arr2[0];
	let min = arr2[0];

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] > max) {
			max = arr2[i];
		} else if (arr2[i] < min) {
			min = arr2[i];
		}
	}

	return {
		"max": max, "min": min
	};
}

// console.log(findMaxMin(arr2));


const a = [1, 10, 100, 1000];

a.map( i => {
	return i
}).filter( b => {
	return b > 100
})
console.log(a)
