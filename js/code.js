"use strict"
// task 5.0
for (let i = 1; i <= 10; i++) {
	if (i % 2) continue;
	alert(i);
}


// task 5.1
let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}

// task 5.2
outlabel: while (true) {
	let writeNumber = prompt("write number biggest 100", "");
	if (writeNumber == null) {
		break outlabel;
	} else if (writeNumber < 100) {
		continue;
	} else if (writeNumber >= 100) {
		break outlabel;
	}
}
