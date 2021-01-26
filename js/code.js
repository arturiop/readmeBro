"use stric"

function findOutlier(integers) {
	//your code herefor
	let c = 0;
	let nc = 0;
	for (let key in integers) {
		if (integers[key] % 2 == 0) {
			c++;
			// console.log(integers[key]);
		} else nc++;
	}
	let whichArray = (c > nc) ? c : nc;
	if (whichArray == c) {
		for (let key in integers) {
			if (integers[key] % 2 !== 0) {
				return integers[key];

			}
		}
	} else for (let key in integers) {
		if (integers[key] % 2 == 0) {
			return integers[key];

		}
	}
}
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 1, 0, 1, 1]));