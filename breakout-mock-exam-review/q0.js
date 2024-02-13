/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
	let countSoFar = 0;
	for (let ii = 0; ii < arr.length; ii++) {
		// countSoFar = countSoFar + 1;
		countSoFar += 1;
	}
	return countSoFar; // return arr.length;
};

const returnValue = count([6,2,3,4,9,6,1,0,5]);
console.log('count', returnValue);

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
	let sumSoFar = 0;
	// for (let ii = 0; ii < arr.length; ii++) {
	// 	// countSoFar = countSoFar + 1;
	// 	sumSoFar += arr[ii];
	// }
	for (let key in arr) {
		sumSoFar += arr[key];
	}
	return sumSoFar;
};

console.log('sum:', sum([6,2,3,4,9,6,1,0,5]));

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
	if (arr.length === 0) {
		return null;
	}

	const total = sum(arr);
	const mean = round(total / count(arr));
	return mean;
};

console.log('rounded mean: ', mean([7,2,3,4,9,6,1,0,5]));

// Don't change below:
module.exports = { count, sum, mean };
