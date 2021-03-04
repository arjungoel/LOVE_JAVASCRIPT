const greet = function(name1, name2) {
    console.log(`hello ${name1} ${name2}`)
}

greet('Arjun', 'Harsh')

const names = ['Arman', 'Aman']

greet(...names)


// another way of using spread(...)

const names1 = ['Tom', 'Jerry']
const names2 = ['Tyke']

console.log([...names, 'Spike', ...names2])

// another way of using it
const person = {name: 'Arjun', age: 25, twitter: "arjungoel1995@gmail.com"}

/* don't want to mutate the person object but want to alter it.
Bad code as if in case person starts using new social media we need to update both person and olderPerson object and this could lead to
breaking of things */

// const olderPerson = {name: person.name, age: person.age + 1, twitter: person.twitter}

// Instead do
const olderPerson = {...person, age: person.age + 1}

console.log(person)

console.log(olderPerson)