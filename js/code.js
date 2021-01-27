"use stric"

function generateHashtag(str) {
	if (str.length == 0) {
		return false;
	}
	let result = generate(str);

	if ((result.length <= 140) && ((result.length > 1))) {
		return result;
	} return false;





	function generate(str) {
		let res = str.split(" ");
		for (let key in res) {
			res[key] = res[key].charAt(0).toUpperCase() + res[key].slice(1);
		}
		let result = "#" + res.join("");
		return result;
	}

};

console.log(generateHashtag("codewars is nice"));
