function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce(function(a, b){
		return a + b;
	}, 0); // We’ve set our initial value to zero which allows us to use empty arrays with our sum functions.
}

function multiply (arr) {
	return arr.reduce(function(a, b) {
		return a * b;
	});
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	return (a != 0) ? a * factorial(a - 1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}