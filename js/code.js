"use strict"
//task 14
function sumSalaries(obj) {
	let sum = 0;
	for (let rs of Object.values(obj)) {
		sum += rs;
	}
	return sum;
}


let salaries = {

};

console.log(sumSalaries(salaries)); // 650

//task14.1
function count(us) {

	return Object.keys(us).length;
}
let user = {
	name: 'John',
	age: 30
};

console.log(count(user)); 