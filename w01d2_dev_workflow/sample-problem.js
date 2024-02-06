// Write a node program that takes in an unlimited number of command line arguments, 
// goes through each and prints out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument is not a number, output an 
// error message. We need at least 2 arguments.


// takes in an unlimited number of command line arguments
console.log(`process.argv`, process.argv);

let sum = 0;

// go through each and ...
for (let arg = 2; arg < process.argv.length; arg++){

	// If any argument is not a whole number, skip it.
	console.log(`arg: ${arg} value: ${process.argv[arg]}`);

	sum = sum + Number(process.argv[arg]); // convert the string into a Number so that we can add it numerically.

}

// ... prints out the sum of them
console.log('sum', sum);

