"use stric"
//task 21



// let prommise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("fds"), 2000);
// });
// prommise.finally(() => console.log("fuction load"))
// prommise.then(console.log);
// prommise.catch(console.log);






// new Promise((resolve, reject) => {
// 	console.log("1");
// 	resolve("ок");
// }).then((result) => {
// 	throw new Error("Ошибка!"); // генерируем ошибку
// }).then((result) => {
// 	console.log("2"); // генерируем ошибку
// }).catch(console.log);






// new Promise(function () {
// 	noSuchFunction(); // Ошибка (нет такой функции)
// })
// 	.then(() => {

// 	}); 


// async function loadJson(url) {
// 	let response = await fetch(url);

// 	if (response.status == 200) {
// 		let json = await response.json();
// 		return json;
// 	}
// 	throw new Error(response.status);

// }


// loadJson('no-such-user.json') // (3)
// 	.catch(console.log); 




class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}

async function loadJson(url) {
	let response = fetch(url);

	if (response.status == 200) {
		return response.json();
	} else {
		throw new HttpError(response);
	}
})
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

	let name = prompt("Введите логин?", "iliakan");

	let response = loadJson(`https://api.github.com/users/${name}`);
	let user = await (user => {
		console.log(`Полное имя: ${user.name}.`);
		return user;
	})
		.catch(err => {
			if (err instanceof HttpError && err.response.status == 404) {
				alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
				return demoGithubUser();
			} else {
				throw err;
			}
		});
}

demoGithubUser();