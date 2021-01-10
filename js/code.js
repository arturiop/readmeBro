"use strict"
// task 10

function Calcilator(name) {

	this.read = function () {
		this.numb1 = prompt("num1", "");
		this.numb2 = prompt("numb2", "");
	},

		this.sum = function () {
			return +this.numb1 + +this.numb2;
		},

		this.muuult = function () {
			return this.numb1 * this.numb2;
		}
	console.log(name);


}
let calc = new Calcilator("VAsy");
calc.read();
console.log(calc.sum());
console.log(calc.muuult());

// task 10.1
function Accumulator(startingValue) {

	this.numb = startingValue;
	this.read = function () {
		this.numb += +prompt("numb", "");
	};
}
let b = new Accumulator(5);
b.read();
b.read();

alert(b.numb);
