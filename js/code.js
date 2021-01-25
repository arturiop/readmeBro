"use stric"
//task 21


function DNAStrand(str) {
	let ourArray = Array.from(str);
	for (let key in ourArray) {

		switch (ourArray[key]) {
			case "A":
				ourArray[key] = "T";
				break;
			case "T":
				ourArray[key] = "A";
				break;
			case "G":
				ourArray[key] = "C";
				break;
			case "C":
				ourArray[key] = "G";
				break;
		}
	}
	return ourArray.join("");
};
console.log(DNAStrand("AATTGGCC"));



