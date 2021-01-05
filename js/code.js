// task 4.0

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12

// task 4.1

let useranswer = prompt("what oficial name JS?", "");
let trueAnswer = "ECMAScript";
if (useranswer.toUpperCase == trueAnswer.toUpperCase) {
	alert("wonderful");
} else {
	alert("go lean my friends")

}

// task 4.2

let userNumb = prompt("write number now!", " ");
let trueNumb = 1;
let falseNumb = -1;
let zero = 0;
if (userNumb > 0) {
	alert(trueNumb);
} else if (userNumb < 0) {
	alert(falseNumb);
} else if (userNumb == 0) {
	alert(zero);
}

// task 4.3

let result = (a + b < 4) ? "this few" : "this many";

// task 4.4
let message = (login == "emploer") ? "Hello" :
	(login == "director") ? "Hello sir" :
		(login == " ") ? "not login" : " ";

