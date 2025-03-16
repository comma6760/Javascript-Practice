class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(`Hello. My name is ${this.name}. And I'm ${this.age} years old`)
	}
}

let person1 = new Person('Alice', 30)
person1.greet()