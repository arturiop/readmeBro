"use strict"
// task 9

let calcilator = {

	read() {
		this.numb1 = prompt("num1", "");
		this.numb2 = prompt("numb2", "");
	},

	sum() {
		return +this.numb1 + +this.numb2;
	},

	muuult() {
		return this.numb1 * this.numb2;
	}

}
calcilator.read();
console.log(calcilator.sum());
console.log(calcilator.muuult());
