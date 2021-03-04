class Wheel {}
class Car {
    constructor() {
        this.wheels = [
            new Wheel(),
            new Wheel(),
            new Wheel(),
            new Wheel(),
        ];
    }
    // special name for a method
    [Symbol.iterator]() {
        let index = 0
        const self = this
        //console.log('called...')
        return {
            next: function() {
                return { done: index == 4, value: self.wheels[index++]}
            }
        };
    }   
}

const car = new Car();

for (wheel of car) {
    console.log(wheel)
}