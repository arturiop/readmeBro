"use strict"
//task 16
function pow(a, b) {
	let sum = a;
	for (let j = 0; j <= b; j++) {
		sum *= a;
	}
	return sum;
}
console.log(pow(2, 5));





// task 16.1
function sumTo(numb) {

	return (numb == 1) ? 1 : numb * sumTo(numb - 1);
}
console.log(sumTo(5));






//task 16.2
let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printList(list) {

	console.log(list.value);

	if (list.next) {
		printList(list.next);
	}

}

printList(list);

function sum(a) {

	return function (b) {
		return a + b;
	}

}
console.log(sum(4)(5));






//task16.3
function inArray(arrr) {
	return function (y) {
		for (let i = 0; i < arrr.length; i++) {
			if (y == arrr[i]) {
				return y;
			}
		}
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inArray([1, 2, 10])));




//task 16.4

function byField(str) {
	return ((a, b) => a[str] > b[str] ? 1 : -1);
}

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];
users.sort(byField('age'));
console.log(users);

