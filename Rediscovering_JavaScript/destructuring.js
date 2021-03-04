const getPerson = function() {
    return ['Aman', 'Arjun', 'Harsh']
}

const person = getPerson();

console.log(person)

// How do I get the values separately
/*
const first = person[0]
const second = person[1]
const third = person[2]
*/

//console.log(`${first} ${second} ${third}`)

// There must be a better way
const [first, second, third] = getPerson();

console.log(`${first} ${second} ${third}`)

// If I want to get rid of one variable
const [fourth, , sixth] = getPerson();

console.log(`${fourth} ${sixth}`)

/* But if you want everything after first variable in a neat way. One of the disadvantages of using it is it is working based on an array which means
the position matters. But most of the time we don't care about position, we just want property name to work with. */ 
const [seventh, ...all] = getPerson();

console.log(`${seventh} ${all}`)
