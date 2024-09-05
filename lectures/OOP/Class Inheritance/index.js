// Class Inheritance

// What is Inheritance?
// Inheritance allows us to define a new class (child class) that is based on an existing class (parent class). The child class inherits all the properties and methods of the parent class, which allows us to reuse and extend the functionality.

// Benefits of Inheritance:
// Code Reusability: Shared code can be defined once in a parent class and reused by multiple child classes.

// Maintainability: Changes to shared behavior need only be made in one place (the parent class), which simplifies maintenance.

// Organization: Related functionality can be grouped into classes, making the codebase more organized and easier to understand.

// Problem
class Car {
    constructor(make, model, year, mileage, doors) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.doors = doors;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }
}

class Motorcycle {
    constructor(make, model, year, mileage, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.type = type;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }
}

// Repetition of Code: The Car and Motorcycle classes have similar properties (make, model, year, mileage) and methods (start, drive, stop). Writing the same code in both classes leads to duplication.

// Hard to Maintain: If the logic in one of the shared methods changes (e.g., how start works), you have to remember to update it in every class that has this method, which can be error-prone.

// Solution with Inheritance
// Parent Class
class Vehicle {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }
}

// Child Class: Car
class Car extends Vehicle {
    constructor(make, model, year, mileage, doors) {
        super(make, model, year, mileage); // Call the parent class constructor with super()
        this.doors = doors; // Car-specific property
    }
}

// Child Class: Motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year, mileage, type) {
        super(make, model, year, mileage); // Call the parent class constructor with super()
        this.type = type; // Motorcycle-specific property
    }

    doAWheelie() {
        console.log(`${this.make} ${this.model} did a wheelie!`);
    }
}

let myCar = new Car("Toyota", "Camry", 2019, 30000, 4);
myCar.start(); // logs: 'Toyota Camry is starting.'
myCar.drive(); // logs: 'Toyota Camry is driving.'
myCar.stop(); // logs: 'Toyota Camry has stopped.'

let myBike = new Motorcycle(
    "Harley Davidson",
    "Street 750",
    2018,
    8000,
    "Cruiser"
);
myBike.start(); // logs: 'Harley Davidson Street 750 is starting.'
myBike.doAWheelie(); // logs: 'Harley Davidson Street 750 did a wheelie!'
myBike.stop(); // logs: 'Harley Davidson Street 750 has stopped.'

// Super
class Car extends Vehicle {
    constructor(make, model, year, mileage, doors) {
        super(make, model, year, mileage); // Call the parent class constructor
        this.doors = doors;
    }

    start() {
        super.start(); // Call the parent start method
        console.log(`All ${this.doors} doors are closed.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, mileage, type) {
        super(make, model, year, mileage); // Call the parent class constructor
        this.type = type;
    }

    start() {
        super.start(); // Call the parent start method
        console.log(`Safety gear has been checked.`);
    }

    doAWheelie() {
        console.log(`${this.make} ${this.model} did a wheelie!`);
    }
}
