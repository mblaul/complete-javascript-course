///////////////////////////////////////
// Lecture: Hoisting

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}
// Result: Window object

var john = {
	name: "John",
	yearOfBirth: 1989,
	calculateAge: function() {
		// Method call
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		// function innerFunction() {
		// 	// Regular function call
		// 	console.log(this);
		// }
		// innerFunction();
	}
};

john.calculateAge();
// Result calculateAge:     John object
// Result innerFunction:    Window object

var mike = {
	name: "Mike",
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// Result: Mike object with mike's yearOfBirth and age calculated
// The example shows that 'this' is assigned only when it's called
