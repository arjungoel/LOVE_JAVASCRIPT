const names = ['Tom', 'Jerry']

// Imperative style of programming
for (let i = 0; i < names.length; i++) {
    console.log(`${i}--${names[i]}`)
}

// However we cannot index here. 
for (const name of names) {
    console.log(name)
}

// However we cannot separate the index and value here
for (const entry of names.entries()) {
    console.log(entry)
}

// There must be a better way.
for (const entry of names.entries()) {
    console.log(`$entry[0]--$entry[1]`)  // however the code is smelly.
}

// There must be a better way
for (const entry of names.entries()) {
    const i = entry[0]
    const name = entry[1]
    console.log(`${i}--${name}`) // one line of code gets converted to three lines. There must be a better way.
}

// destructuring
for (const entry of names.entries()) {
    const [i, name] = entry 
    console.log(`${i}--${name}`) // There must be a better way.
}

// better code (destructuring while you are iterating over the entries)
for (const [i, name] of names.entries()) {
    console.log(`${i}--${name}`) 
}