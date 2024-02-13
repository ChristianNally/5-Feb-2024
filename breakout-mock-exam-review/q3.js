/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {

	const countOfOccurrences = {};

	// as we encounter each value in the array, 
	for (let key in arr) {
		// console.log('countOfOccurrences before', countOfOccurrences);
		// console.log('arr[key]', arr[key]);
		// console.log('typeof arr[key]', typeof arr[key]);

		if (typeof countOfOccurrences[arr[key]] === 'undefined') {
			// console.log('first time for this value');
			countOfOccurrences[arr[key]] = 1;
		} else {
			// console.log('i have seen this value before');
			countOfOccurrences[arr[key]]++;
		}
		// console.log('countOfOccurrences after', countOfOccurrences);
	}

	let maxSoFar = null;
	let propertyCorrespondingToMaX = 	null;
	for (let key in countOfOccurrences){
		if (maxSoFar === null){
			maxSoFar = countOfOccurrences[key];
			propertyCorrespondingToMaX = key;
		}
		if (countOfOccurrences[key] > maxSoFar){
			maxSoFar = countOfOccurrences[key];
			propertyCorrespondingToMaX = key;
		}
	}

	return propertyCorrespondingToMaX;

};

console.log('returnValue', mode([6,2,3,4,9,6,1,0,5]));

// Don't change below:
module.exports = { mode };
