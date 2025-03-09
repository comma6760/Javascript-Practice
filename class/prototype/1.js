//부모 객체 (Person)
function Person(name, age) {
	this.name = name;
	this.age = age;
}

//부모 객체에 메서드 추가
Person.prototype.sayHello = function() {
	console.log(`Hi, My name is ${this.name}, I'm ${this.age} years old.`)
}

//자식 객체 (Student) 생성
function Student(name, age, grade) {
	Person.call(this, name, age) //부모 생성자 호출 (상속)
	this.grade = grade
}

//Student 객체의 프로토타입을 Person 객체로 설정
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

//자식 객체에 새로운 메서드 추가
Student.prototype.study = function() {
	console.log(`${this.name} study in No.${this.grade} class`)
}

//객체 생성
const student1 = new Student("John", 20, "A")
const student2 = new Student("Alice", 22, "B")

//자식 객체의 메서드 호출
student1.sayHello()
student1.study()
console.log('')
student2.sayHello()
student2.study()