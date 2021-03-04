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
    *[Symbol.iterator]() {        // it will be called a generator
        //yield this.wheels[0]
        //yield this.wheels[0]
        //yield this.wheels[0]
        //yield this.wheels[0]

        /*the above code will be modified to */

        /*
        for (const wheel of this.wheels) {
            yield wheel
        }
        */

        // or it can be modified as:
        yield *this.wheels   // generator will result in other generator

        };
    }   

const car = new Car();

for (wheel of car) {
    console.log(wheel)
}