"use stric"

function solution(number) {
	let ourArray = String(number).split("");
	let cont = 0;
	let result = [];

	for (let i = ourArray.length - 1; i >= 0; --i) {

		++cont;
		if (cont == 1) {
			result.unshift(createNum(+ourArray[i]));
		} else if (cont == 2) {
			result.unshift(createTens(+ourArray[i]));
		} else if (cont == 3) {
			result.unshift(createHundreds(+ourArray[i]));
		} else if (cont == 4) {
			result.unshift(createThousand(+ourArray[i]));
		}
	};

	return console.log(result.join(""));



	function createNum(str) {
		switch (str) {
			case 1:
				return "I";
			case 2:
				return "II";
			case 3:
				return "III";
			case 4:
				return "IV";
			case 5:
				return "V";
			case 6:
				return "VI";
			case 7:
				return "VII";
			case 8:
				return "VIII";
			case 9:
				return "IX";
		}
	};
	function createTens(str) {
		switch (str) {
			case 1:
				return "X";
			case 2:
				return "XX";
			case 3:
				return "XXX";
			case 4:
				return "XL";
			case 5:
				return "L";
			case 6:
				return "LX";
			case 7:
				return "LXX";
			case 8:
				return "LXXX";
			case 9:
				return "XC";
		}
	};
	function createHundreds(str) {
		switch (str) {
			case 1:
				return "C";
			case 2:
				return "CC";
			case 3:
				return "CCC";
			case 4:
				return "CD";
			case 5:
				return "D";
			case 6:
				return "DC";
			case 7:
				return "DCC";
			case 8:
				return "DCCC";
			case 9:
				return "CM";
		}
	};
	function createThousand(str) {
		switch (str) {
			case 1:
				return "M";
			case 2:
				return "MM";
			case 3:
				return "MMM";
			case 4:
				return "MMMM";
		}
	};
};


solution(22);
solution(19);
solution(11);
solution(10);
solution(5);
solution(121);
solution(2);


