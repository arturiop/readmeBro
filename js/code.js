"use strict"
// task 10.2
function g() {

	let i = prompt("1", "");
	if (i !== null) {
		alert("numb " + i);
	} else {
		alert("null");
	}
}
g();
let i = 0;
while (i != 10) {
	console.log(`fsdjkfsa ${i}`);
	i += 0.2;
	if (i > 11) {
		break;
	}
}
//task 10.3
function ucFirst(str) {
	let con = str[0].toUpperCase() + str.slice(1);
	return alert(con)
}
ucFirst("sadgfsdagasdася");

//task 10.4
function checkSpam(str) {
	let stric = str.toUpperCase();
	if (!stric.indexOf("VIAGRA")) {
		return true;
	} else {
		return false;
	}
}

console.log(checkSpam('viagra'));
console.log(checkSpam("innocent viagra rabbit"));


//task 10.5
function extractCurrencyValue(str) {
	let numb = str.slice(1);
	return numb;
}
alert(extractCurrencyValue('$120'));

