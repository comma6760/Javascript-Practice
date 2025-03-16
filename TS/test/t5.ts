class Animal {
	private name:string; // private field
	constructor(name:string) {
		this.name = name;
	}

	speak():void {
		console.log(`${this.name} makes a nosie.`);
	}
}

class Dog extends Animal {
	constructor(name:string) {
		super(name);
	}

	speak():void {
		console.log("Woof! Woof!");
	}
}

let animal:Animal = new Animal("cat");
animal.speak();

let dog:Dog = new Dog("Dog");
dog.speak();