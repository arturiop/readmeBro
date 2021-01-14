"use strict"
//task 15

function getW(d) {
	let i = d.getDay();
	switch (i) {
		case 0: return "ВС";

		case 1: return "ПН";

		case 2: return "ВТ";

		case 3: return "СР";

		case 4: return "СТ";

		case 5: return "ПТ";

		case 6: return "СБ";

		default: console.log("und");
	}

}
let date = new Date(2012, 3, 20, 13, 12);

console.log(getW(date));
console.log(performance.now());