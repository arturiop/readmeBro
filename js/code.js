
//task 20
let er = new SyntaxError("eroorina");

let json = '{ "age": 30 }';
try {
	let use = JSON.parse(json);

	if (!use.name) {
		throw new SyntaxError("lfyyst");
	}
	console.log(use.name);

} catch (er) {
	console.log(er.message);
}



// task 20.1
class MyErrorClass extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

class ValidationError extends MyErrorClass {

}

class PropertyRequiredError extends ValidationError {
	constructor(property) {
		super("Not property:" + property);
		this.property = property;
		this.name = "PropertyRequiredError";
	}
}

// Использование
function readUser(json) {
	let user = JSON.parse(json);

	if (!user.age) {
		throw new PropertyRequiredError("age");
	}
	if (!user.name) {
		throw new PropertyRequiredError("name");
	}

	return user;
}

// Рабочий пример с try..catch

try {
	let user = readUser('{"name": "ff" }');
} catch (err) {
	if (err instanceof ValidationError) {
		console.log(err.message);
		console.log(err.property);
		console.log(err.name);
	} else if (err instanceof SyntaxError) { // (*)
		console.log('');
		("JSON Ошибка Синтаксиса: " + err.message);
	} else {
		throw err;
	}
}


class FormatError extends SyntaxError {
	constructor(message) {
		this.name = "FormatError";
		super(message);
	}
}