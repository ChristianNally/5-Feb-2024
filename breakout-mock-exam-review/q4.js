/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
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

const mean = function(arr) {
	if (arr.length === 0) {
		return null;
	}

	const total = sum(arr);
	const mean = round(total / arr.length);
	return mean;
};

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {

// stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)

	let stdev = 0;
	const numberOfValues = arr.length;
	console.log('numberOfValues', numberOfValues);

	const populationMean = mean(arr);
	console.log('populationMean', populationMean);

	const transformedValues = arr.map((item) => {return (item - populationMean) ** 2});
	console.log('transformedValues', transformedValues);

	const sumOfSquares = sum(transformedValues);

	stdev = round(Math.sqrt(sumOfSquares / numberOfValues));

	return stdev;

};

console.log('stdev', stdev([6,2,3,4,9,6,1,0,5]));

// Don't change below:
module.exports = { stdev };
