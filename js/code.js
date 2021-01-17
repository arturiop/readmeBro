"use strict"
//task 17

let f = new Function('a', 'return a+1');

function f(b, a) {
	console.log(a + b);
}
setTimeout(f, 10000, "5", "4");
let timerId = setInterval(() => console.log('tick'), 1000);
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 50000);

let timeout = 1000;
setTimeout(function f() {
	let i = 0;
	i++;
	console.log(i);
	setTimeout(f, timeout);
}, timeout);





// task 17.1
function printNumbers(from, to) {
	setTimeout(() => {
		if (from <= to) {
			console.log(from);
			from += printNumbers(from + 1, to);
		}
	}, 1000);

}
printNumbers(1, 10);




//task17.3
function sayHi() {
	console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

sayHi.call(user); // John
sayHi.call(admin); // Admin


let st = Object.getOwnPropertyDescriptors(Math);
console.log(st);




//task17.5
let user = {
	name: "John",
	surname: "Smith",

	get fullName() {
		return `${this.name} ${this.surname}`;
	},

	set fullName(value) {
		this.name = value;
	}
};

user.fullName = "Alice Cooper";
console.log(`${user.name} ${user.surname}`);