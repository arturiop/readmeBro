"use stric"
//task 21


function nbYear(p0, percent, aug, p) {
	let years = 0;
	while (p0 < p) {
		let procent = p0 * percent / 100;
		p0 += aug + procent;
		years++;
	};

	return years;

};
console.log(nbYear(1500000, 2.5, 10000, 2000000));



// Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
// Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
// Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
