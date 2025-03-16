const people = [
	{name: "Alice", age: 17},
	{name: "Bob", age: 18},
	{name: "Charlie", age: 20}
];
const eighteen = people.filter(person => person.age >= 18);
console.log(eighteen); // [{name: "Bob", age: 18},{name: "Charlie", age: 20}]