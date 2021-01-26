"use stric"

function scramble(str1, str2) {

	let result;
	for (let i = 0; i < str2.length; i++) {

		if (str1.indexOf(str2[i]) == -1) {
			result = false;
			break;
		}
		result = true;
	}
	return result;

};
console.log(scramble('rkqodlw', 'worsld'));