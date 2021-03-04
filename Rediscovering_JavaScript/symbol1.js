class Person {
    [Symbol.for('play')]() {
        console.log("playing")
    }
}

const arjun = new Person();

const playMethod = Symbol.for('play')

arjun[playMethod]()