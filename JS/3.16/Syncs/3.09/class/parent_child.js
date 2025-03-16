//부모 클래스
//부모 클래스는 자식 클래스에게 기능을 물려주지만 자식 클래스에 있는 기능을 받지는 못함.
//부모 클래스 ---> 자식 클래스, 자식 클래스 -/-> 부모 클래스
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	//부모 자식 둘 다 사용 가능
	greet() {
		console.log(`Hello. My name is ${this.name}. And I'm ${this.age} years old`)
	}
}

//자식 클래스 (부모 클래스로부터 상속받음 => 부모 클래스에 있는 기능을 자식 클래스가 받는 것)
//자식 클래스는 부모 클래스가 없어지면 자식 클래스는 기능이 사라짐.
class Employee extends Person { //부모 클래스로부터 기능 받음
	constructor(name, age, job) {
		super(name, age) //부모 클래스(Person)의 생성자를 호출
		this.job = job
	}
	
	//Employee에 맞는 새로운 매서드 정의 (자식 클래스만 사용 가능)
	introduce() {
		console.log(`Hi, I'm ${this.name} and my job is ${this.job}`)
	}
}


let person1 = new Person('Alice', 30)
let employee1 = new Employee('Bob', 35, 'engineer')

person1.greet()
employee1.greet()
employee1.introduce()
// person1.introduce() //오류