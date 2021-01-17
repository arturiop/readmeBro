"use strict"
//task 18

let artur = {
	name: "artur",
	age: 26,

	get fullName() {
		if (this.surName == null) {
			return `${this.name} Piloian`;
		} else {
			return `${this.name} ${this.surName}`;
		}
	},

	set fullName(value) {
		this.surName = value;
	}
}


console.log(artur.fullName);
artur.fullName = "iam";
console.log(artur.fullName);



//task18.1
let head = {

	glasses: 1
};

let table = {
	__proto__: head,
	pen: 3
};

let bed = {
	__proto__: table,
	sheet: 1,
	pillow: 2
};

let pockets = {
	__proto__: bed,
	money: 2000
};



