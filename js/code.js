// task 5.0
"use strict"
let userLogin = "Admin";
let userPassword = "ffgg05";
let enteredUserLogin = prompt("write login", "");

if (userLogin === enteredUserLogin) {
	let enterefUserPassword = prompt("write password", "");
	if (enterefUserPassword === userPassword) {
		alert("hi boss");
	} else if (enterefUserPassword == null) {
		alert("canceling");
	} else {
		alert("not correct pessword");
	}
} else if (enteredUserLogin == null) {
	alert("canceling");
} else {
	alert("indefinitely");
}