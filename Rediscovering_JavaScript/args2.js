// using `(...)Rest` Operator

const max = function(...numbers) {

	// Functional style of programming (Elegant code)
	return numbers.reduce((large, e) => e > large ? e : large)

}


const values = [1, 2, 4, 12]

// console.log(max(values))

// Instead try this
//console.log(max(values[0], values[1], values[2]))  /* Not an elegant way of writing the code */

// Elegant way of writing using spread(...) operator
console.log(max(...values))


console.log(max(1, 7));
console.log(max(3, 2));
console.log(max(1, 8, 3));


