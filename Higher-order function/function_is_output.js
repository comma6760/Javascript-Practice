function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}

const double = multiplier(2); // factor = 2
console.log(double(5)); // 10

const triple = multiplier(3) // factor = 3
console.log(triple(5)); // 15