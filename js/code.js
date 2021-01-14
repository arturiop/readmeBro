"use strict"
//task 13
function unique(arr) {
	let rs = new Set(arr);
	return rs;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O




//task 13.1
let map = new Map();

map.set("name", "John");

let keys = [];
for (let i of map.keys()) {
	keys.push(i);
}

keys.push("more");
console.log(keys);