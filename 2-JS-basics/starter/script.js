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
// *******************
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 then 32 - 6 // 26
console.log(x, y);
