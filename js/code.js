"use strict"
// //task 19
// let age = 26;
// class User {
// 	name = "Аноним";


// 	sayHi() {
// 		console.log(`Привет, ${this.name}! ${age}`);
// 	}
// }

// new User().sayHi();



// class MyClass {
// 	prop = value; // свойство
// 	constructor(...) { // конструктор
// 		// ...
// 	}
// 	method(...) { } // метод
// 	get something(...) { } // геттер
// 	set something(...) { } // сеттер

// 	[Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
// 	// ...
// }


// class A {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.surName = "artur";
// 	}

// }
class Animal {

	constructor(name) {
		this.name = name;
	}

}

class Rabbit extends Animal {
	constructor(name) {
		super(name);
		this.created = Date.now();
	}
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);