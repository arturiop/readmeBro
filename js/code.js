"use strict"
//task 15

let student = {
	name: 'John',
	age: 30,
	isAdmin: false,
	courses: ['html', 'css', 'js'],
	wife: null
};

let user = {
	name: "Василий Иванович",
	age: 35
};

let json = JSON.stringify(user);
let i = JSON.parse(json);


console.log(json);
console.log(i);