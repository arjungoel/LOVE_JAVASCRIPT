const max = function() {

	console.log(arguments instanceof Array);

	// console.log(arguments.reduce())

	// Imperative style of programming
	let large = 0;
	
	for(let i = 0; i < arguments.length; i++) {
		if (arguments[i] > large) large = arguments[i]
	}
	return large;
}

console.log(max(1, 7));
console.log(max(3, 2));
console.log(max(1, 8, 3));


