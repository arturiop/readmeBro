"use stric"

function comp(array1, array2) {
	//your code here
	if (array1.length == 0) {
		return null;
	}

	let result = true;
	for (let i = 0; i < array2.length; i++) {
		array2[i] = Math.sqrt(array2[i]);
	};
	array2.filter(function (item) {

		if (array1.includes(item) == false) {
			result = false;
		}
	});

	return result;


};
a1 = [121, 144, 11, 19, 161, 19, 144, 19];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

console.log(comp(a1, a2));
