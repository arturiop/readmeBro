"use strict"
// task 7
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}

// task 7.1
function min(a, b) {
	return (a <= b) ? a : b;

}
alert(min(5, 5));

// task 7.2
// enter data
let userNumberY = prompt("write Y ", "");
let userNumberN;
if (userNumberY !== null) {
	userNumberN = prompt("write N ", "");
	if (userNumberN == null) {
		alert("incorrect input");
	}
} else {
	alert("incorrect input");
}

function pow(y, n) {
	let sum = y;
	let i = 0;
	while (++i < n) {
		sum *= y;
	}
	return sum;
}

console.log(pow(userNumberY, userNumberN));