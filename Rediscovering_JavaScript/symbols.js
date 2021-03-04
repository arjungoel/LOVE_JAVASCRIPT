const s1 = Symbol.for('hi') 
const s2 = Symbol.for('hello');
const s3 = Symbol.for('hi');


console.log(s1);
console.log(s2);
console.log(s3);


// comparing the symbol(s)
console.log(s1 === s2)
console.log(s1 === s3)
