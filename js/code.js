"use stric"
//task 21

function spinWords(str) {

	let newArray = str.split(" ");

	if (newArray.length > 1) {
		for (let i = 0; i < newArray.length; i++) {
			let wi = Array.from(newArray[i]);

			if (wi.length > 4) {
				wi.reverse();
				newArray[i] = wi.join("");
			} else {
				newArray[i] = wi.join("");
			}
		}
		newArray = newArray.join(" ");
	} else {
		let ww = Array.from(newArray[0]);
		ww.reverse();
		newArray = ww.join("");
	}

	return newArray;

}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
