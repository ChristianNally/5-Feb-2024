/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
	let minSoFar = null;
	for (let key in arr){
		if (minSoFar === null){
			minSoFar = arr[key];
		}
		if (arr[key] < minSoFar){
			minSoFar = arr[key];
		}
	}
	return minSoFar;
};

console.log('minimum', min([6,2,3,4,9,6,1,0,5]));

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
	let maxSoFar = null;
	for (let key in arr){
		if (maxSoFar === null){
			maxSoFar = arr[key];
		}
		if (arr[key] > maxSoFar){
			maxSoFar = arr[key];
		}
	}
	return maxSoFar;
};

console.log('maximum', max([6,2,3,4,9,6,1,0,5]));

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
	return max(arr) - min(arr);
};

console.log('range', range([6,2,3,4,9,6,2,2,5]));
// Don't change below:

module.exports = { min, max, range };
