const price = 12.25

// Template Literals
console.log(`The price is: $${price}`)

/*
const theName = 'Arjun';
const theAge = 25
*/

// If we change it to name and age
const name = 'Arjun'
const age = 25

// Object Literals

/*
const person = {
    name: name,
    age: age
}
*/

// there is a better way
const person = {name, age}

console.log(person)