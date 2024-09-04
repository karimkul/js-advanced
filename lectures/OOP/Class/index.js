// Class
// ES6 ClassesES6 Classes
class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    start() {
        console.log(`${this.make} ${this.model} has started`);
    }
    stop() {
        console.log(`${this.make} ${this.model} has stopped`);
    }
}
let car1 = new Car("Toyota", "Camry", 2018, 500000);
let car2 = new Car("Honda", "Accord", 2020, 300000);

console.log(car1);
console.log(car2);

// Adding and Modifying Methods in Classes
class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.make} ${this.model} has started.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}

// Modifying an Existing Method:

class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.year} ${this.make} ${this.model} has started.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}
// Behind the Scenes
// console.log(Car.prototype.start); // Logs the function definition of start
// console.log(Car.prototype.drive); // Logs the function definition of drive

// Summary
// Simpler Syntax: Classes provide a more straightforward and intuitive syntax for defining object constructors and methods.

// Cleaner Code: By using classes, your code becomes more readable and easier to maintain. You don’t have to manually assign methods to the prototype.

// Automatic Inheritance: When you use the extends keyword (not shown in this example), classes make it easier to handle inheritance, automatically setting up the prototype chain for you.

// In conclusion, ES6 classes simplify the process of creating and managing objects and inheritance in JavaScript by providing a more familiar, object-oriented syntax. This syntactic sugar helps avoid the manual prototype manipulation required in the traditional constructor function approach, making your code cleaner and easier to understand.
