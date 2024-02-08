// // // - JavaScript has 7 primitive types:

// // //   - Boolean
// // //   - Number
// // //   - String
// // //   - Undefined

// // //   - Null

// // //   - BigInt
// // //   - Symbol

// // let modifiable = false;
// // const dontGoChangin = true;

// // let num = 4;

// // if (num < 5) {
// // 	console.log('num is less than 5');
// // } 

// // if (false) {
// // 	console.log('we are in a post truth world');
// // } 

// // let result = num < 5;

// // console.log('result', result);

// // let xx = 42;
// // let yy = 42.1;

// // let name = 'Monkey Fuzz ${xx}';
// // let name2 = "Monkey Fuzz ${xx}";
// // let name3 = `Because with backticks you can interpolate ${xx}`;

// // let theFuture = undefined;

// // console.log('theFuture', theFuture);

// // function dostuff(zz){
// //   zz = zz + 1;
// // }

// // const returnValue = dostuff(4);
// // console.log('returnValue', returnValue);


// // const voterOneName = "Betty Ford";
// // const voterOneDidVote = true;
// // const voterOneAge = 255;

// // const voterTwoFullName = "Sam Light";
// // const voterTwoDidVotes = false;

// // const voterThree = "Sandra Day OConner";

// // let voteTotal = 0;

// // if (voterOneDidVote) {
// // 	voteTotal = voteTotal + 1;
// // }

// // ///


// // const propertyName = 'didVote';

// // for (let ii = 0; ii < listOfVoters.length; ii++){
// // //	console.log('ii', ii);
// // //	console.log('listOfVoters[ii]', listOfVoters[ii]);
// // 	console.log('listOfVoters[ii].didVote', listOfVoters[ii].didVote);
// // 	console.log("listOfVoters[ii]['didVote']", listOfVoters[ii]['didVote']);
// // 	console.log("listOfVoters[ii][propertyName]", listOfVoters[ii][propertyName]);
// // 	console.log("listOfVoters[ii].propertyName", listOfVoters[ii].propertyName);
// // }

// // for (let propName in voter1){
// // 	console.log('propName', propName);
// // 	console.log('voter1[propName]', voter1[propName]);
// // }


// // console.log('console', console);

// function addOne(number){
// 	number = number + 1;
// 	return number;
// }

// const zz = 4;
// const returnValue = addOne(zz);
// console.log('returnValue', returnValue);
// console.log('zz', zz);

// //
// // ... and now for objects
// //

// // const voter3 = {
// // 	firstName: 'Monkey',
// // 	lastName: 'Fuzz',
// // 	age: 40,
// // 	didVote: false
// // };

// console.log('listOfVoters', listOfVoters);
// listOfVoters[3] = voter1;
// console.log('listOfVoters', listOfVoters);


// function makeVote(voter){
// 	voter.didVote = true;
// 	return voter;
// }

// console.log('voter3', voter3);
// const returnValue2 = makeVote(voter3);
// console.log('returnValue2', returnValue2);
// console.log('voter3', voter3);

const printFunc = function(){
	console.log(`${this.firstName} ${this.lastName} didVote? ${this.didVote}`);
};

const voter1 = {
	firstName: 'Betty',
	lastName: 'Ford',
	age: 233,
	didVote: true
};

const voter2 = {
	firstName: 'Sam',
	lastName: 'Light',
	age: 30,
	didVote: false
};

const voter3 = {
	firstName: 'Monkey',
	lastName: 'Fuzz',
	age: 40,
	didVote: false
};

const listOfVoters = [
	voter1,
	voter2,
	voter3
];

for (let obj of listOfVoters){
	obj.print = printFunc;
}



voter1.print();
voter2.print();
voter3.print();

console.log(voter3.print, 'voter3.print');
console.log('voter3.print()', voter3.print());


