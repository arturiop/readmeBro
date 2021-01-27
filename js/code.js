"use stric"

function bouncingBall(h, bounce, window) {
	if ((h < 1) || (bounce <= 0) || (bounce >= 1) || (h < window)) {
		return -1;
	}

	let count = 0;
	while (h > window) {
		h = h * bounce;
		count += 2;
	}
	count += (-1);
	return count;
}


console.log(bouncingBall(1, 0.1, 0.1));
console.log(bouncingBall(0, 0.66, 1.5));
console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 0.66, 1.5));
