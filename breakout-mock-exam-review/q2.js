/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

const median = function(arr) {
	console.log('we are running. arr=', arr);
	console.log('we are running. arr.length=', arr.length);
	console.log('we are running. arr.length % 2 =', arr.length % 2);

	const sorted = arr.sort((a, b) =>  a - b);
	console.log('we are running. sorted=', sorted);

	const medianKey = Math.floor(sorted.length / 2.0);
	console.log('medianKey', medianKey);

	if ( sorted.length % 2 === 0 ){ // if arr.length is EVEN
		console.log('sorted.length is even');
		return (sorted[medianKey] + sorted[medianKey - 1]) / 2.0;
	} else {
		console.log('sorted.length is odd');
		return sorted[medianKey];
	}

};

console.log('median([6,2,3,4,9,6,1,0,5])', median([6,2,3,4,9,6,1,0,5]));
console.log('median([6,2,3,4,9,6,1,0])', median([6,2,3,4,9,6,1,0]));

// Don't change below:
module.exports = { median };
