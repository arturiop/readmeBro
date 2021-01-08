"use strict"
// task 8.0
let user = {};
user.name = "John";
console.log(user.name);
user.surname = "Smith";
user.name = "Pete";
console.log(user.name);
delete user.name;
console.log(user.name);

task 8.1

function isEmpty(ob) {
	for (let key in ob) {
		return false;
	}
	return true;
}

let obj = {};
console.log(isEmpty(obj));

// task 8.2
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let sum = 0;
for (let ij in salaries) {
	sum += salaries[ij];
}
console.log(sum);

//task 8,3
function multiplyNumeric(obj) {
	for (let ij in obj) {
		if (Number.isInteger(obj[ij])) {
			let i = obj[ij];
			i *= 2;
			obj[ij] = i;

		}
	}
}
let menu = {

};
multiplyNumeric(menu);
console.log(Object.values(menu));
