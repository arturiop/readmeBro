"use stric"

function scramble(str1, str2) {
	let rst1 = Array.from(str1);
	let rst2 = Array.from(str2);

	let retult = (rst2.filter(item => rst1.includes(item))).join("");


	if (retult == str2) {
		return true;
	} else return false;

};
console.log(scramble('rkqodlw', 'worsld'));