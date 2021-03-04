const greet = function(name, msg = `Hey!.${name.toUpperCase()}`) {
    console.log(`${msg} ${name}!!`)
}

greet('Jane')
greet('Shane', 'Hi!')

// if you pass null
greet('Arjun', null)

greet('Arpit', undefined)  
