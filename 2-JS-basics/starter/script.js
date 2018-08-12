// console.log("Hello world!!!");

// var firstName = "John";

// // Undefined - declaration but no assignment
// var job;
// console.log(job); // undefined

// job = "Teacher";
// console.log(job); // Teacher

//*****************************/
// Type Coersion              //

// var firstName = "John";
// var age = 28;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "Teacher";
// isMarried = false;

// // Basic Operators

// var yearJohn = 2018 - 28;
// var yearMark = 2018 - 28;

// var johnOlder = yearJohn < yearMark;
// console.log(johnOlder);

// console.log(typeof johnOlder);
// console.log(typeof null); //wtf - object
// console.log(typeof undefined); //undefined
// var x;
// console.log(typeof x);

// *******************
// Operator precedence
// *******************/
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 then 32 - 6 // 26
// console.log(x, y);

// SKIPPED A FEW SIMPLE VIDEOS

//*****************************/
// Truthy Falsey values       //
//*****************************/

// falsy values:  undefined, null, null, 0, '', NaN
// truthy values: NOT falsy

// var height;

// height = 23;
// if (height || height === 0) {
// 	console.log("Variable defined");
// } else {
// 	console.log("Variable NOT defined");
// }

// // Equality Operators
// if (height == "23") {
// 	console.log("The == operator does type coercion!");
// }

//*****************************/
// Functions                  //
//*****************************/

//*****************************/
// Statements and Expressions //
//*****************************/

//Function Declaration
// function whatDoYouDo(job, firstName) {}

//Function Expression
// var whatDoYouDo = function(job, firstName) {
// 	switch (job) {
// 		case "teacher":
// 			return firstName + " teaches kids how to code";
// 		case "driver":
// 			return firstName + " drives a cab in Lisbon";
// 		case "designer":
// 			return firstName + " designs beautiful websites";
// 		default:
// 			return firstName + " does something else!";
// 	}
// };

// console.log(whatDoYouDo("teacher", "John"));

// Differences between statements and expressions
// Expressions always produce a value
// Example:
// 2+3 << Expression
// 5

// Statements don't produce a result by themselves
// Example:
// ifs, whiles, etc.
// if(true) { console.log(23) }

//*****************************/
// Objects and Methods        //
//*****************************/

var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1992,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};
john.calcAge();
console.log(john.age);
