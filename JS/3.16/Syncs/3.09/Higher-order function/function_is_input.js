function greet(name, callback, n) {
	console.log(`Hello, ${name}!`);
	callback(n);
}

function sayGoodbye(a) {
	console.log("Goodbye! " + a);
}

greet("Alice", sayGoodbye, 3);