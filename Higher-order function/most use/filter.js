const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter(num => num % 2 == 0)
const oddNumbers = numbers.filter(num => num % 2 != 0)
console.log(numbers)
console.log('Even number: ' + evenNumbers);
console.log('Odd number: ' + oddNumbers)