'use strict';

const factor = 2;

const printIt = (e) => console.log(e * factor);

//factor = 0;
printIt(4);

// If you really want to protect the object
const person = Object.freeze({name: 'Arjun', age: 25})

console.log(person)

// person = person

// const protect the reference not the object itself
//person.age = 26

console.log(person)

