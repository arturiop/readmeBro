"use strict"

// task 12
let m = ["sdg", "sdkgjsd", "skgjwerewrwqe", "f", "sedg", "sdwkgjsd", "skgjwewrewrwqe", "fq"];
for (let i of m) {
	console.log(m);
}





// task 12.1
let styles = ["Jaz", "Bluz"];
console.log("5" + styles);
styles.push("Rock and roll");
console.log("4" + styles);
styles[2] = "Classic";
console.log("3" + styles);
styles.shift();
console.log("2" + styles);
styles.unshift("Rap", "Reggi");
console.log("1" + styles);

m.forEach(alert);

m.forEach((item, index) => {
	console.log(item + "---------" + index);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((array) => {
	console.log(array);
});








//task 12.2
let users = [
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 3, name: "Маша" }
];

let user = users.find(index => index == 1);

console.log(user); // Вася






// task 12.1.0
let users = [
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 3, name: "Маша" },
	4, 4, "dfksjg"
];

let someUsers = users.find(item => item.name === "Вася");

console.log(someUsers);

let lengths = users.map(item => item.length);

console.log(lengths); // 5,7,6







//task 12.1.2

let arr = [1, 2, 5, 324, 6, 7, 57, 25, 24, 77, 2, 15];

arr.sort((a, b) => b - a);
arr.reverse();
console.log(arr);

let arr = [1, 2, 3, 4, 5, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15









//task 12.3
function filterRange(arrr, numb, num) {
	let ar = arrr.filter(item => item >= numb && item < num);

	return ar;
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)








//task 12.3.0
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b)
arr.reverse();
console.log(arr); // 8, 5, 2, 1, -10

function copySorted(arg) {
	let copyArrr = arg.slice().sort();
	return copyArrr;
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
for (let i of sorted) {
	console.log(sorted + "3");
}
for (let i of arr) {
	console.log(arr + "2");
}






//task 12.4

function Calc() {
	this.calculate = function (str) {
		let g = str.split(' ');
	}

};
let calc = new Calc;
console.log(calc.calculate("3 - 7")); // 10

let powerCalc = new Calc;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8










//task12.4.1
function getAverageAge(user) {
	let sum = 0;
	for (let i = 0; i < user.length; i++) {
		sum += user[i].age;
	}
	return Math.floor(sum / user.length);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];
console.log("averege " + getAverageAge(arr));

//clone 11.4
function getAverageAge(user) {
	let sum = user.reduce((i, c) => i + c.age, 0);
	return Math.floor(sum / user.length);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];
console.log("averege " + getAverageAge(arr));






//task 12.5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names); // Вася, Петя, Маша







//task 12.6
function s(arr) {
	return arr.sort((a, b) => a.age - b.age);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];
s(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);





//task 12.7
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}));
console.log(usersMapped[1]);





//task 12.8
function shuffle(arr) {
	arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);







//task 12.9
function unique(arr) {
	let str = [];
	for (let i = 0; i < arr.length; i++) {
		if (!(str.includes(arr[i]))) {
			str.push(arr[i]);
		}
	}
	return str;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O