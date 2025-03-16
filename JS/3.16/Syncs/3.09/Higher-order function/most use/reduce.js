const numbers = [1,2,3,4,5];

console.log('add')
const sum1 = numbers.reduce((acc,num) => { 
	console.log(`Acc: ${acc}, Num: ${num}`)
	return acc + num
}, 0);
console.log(sum1 + '\n'); //15


console.log('minus')
const sum2 = numbers.reduce((acc,num) => {
	console.log(`Acc: ${acc}, Num: ${num}`)
	return acc - num
}, 0);
console.log(sum2+'\n'); //-15


console.log('multiple')
const sum3 = numbers.reduce((acc,num) => {
	console.log(`Acc: ${acc}, Num: ${num}`)
	return acc * num
}, 0);
console.log(sum3+'\n'); //-15


console.log('power')
const sum4 = numbers.reduce((acc,num) => {
	console.log(`Acc: ${acc}, Num: ${num}`)
	return acc ** num
}, 1);
console.log(sum4); //-15