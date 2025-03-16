const person = {name: 'Bob', age: 30, greet: function() {
	console.log(`hello. I'm ${this.name}.`)
	}
}

console.log(person.name);
person.greet()