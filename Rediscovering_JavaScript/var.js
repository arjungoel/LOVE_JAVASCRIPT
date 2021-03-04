var foo = function() {
	var local1 = 2;

	{
		var local2 = 3;

		console.log(local2);
	}

	console.log(local1);
	console.log(local2);  // not a good practice

	var local1 = 4;
}

foo();

// console.log(local1); -> Error
