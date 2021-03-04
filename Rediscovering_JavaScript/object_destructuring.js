// Object Destructuring

const getEmployee = function() {
    return {
        first: 'Anil',
        middle: 'Kumar',
        last: 'Goel'
    }
}

const employee = getEmployee();
console.log(`${employee.first}`)  // disadvantage: this code is little verbose