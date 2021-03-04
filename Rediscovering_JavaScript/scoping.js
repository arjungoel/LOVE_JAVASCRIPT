const stuff = 4;
this.something = 12

// regular function
/*
const foo = function(n) {
    console.log(n)
    console.log(stuff)  // lexical scoping

    console.log(this.something)
}
*/

// arrow function
const foo = n => {
    console.log(n)
    console.log(stuff)  // lexical scoping

    console.log(this.something)  // dynamic for regular function, lexical for arrow function
}

//foo(7)
foo.call({something: 42}, 7)
console.log("================")
foo.call({something: 77}, 7)