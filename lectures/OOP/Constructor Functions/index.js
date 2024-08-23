// Constructor Functions

let car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2017,
    mileage: 50000,
    start: function () {
        console.log(this.make + " " + this.model + " has started.");
    },
    stop: function () {
        console.log(this.make + " " + this.model + " has stopped.");
    }
};

let car2 = {
    make: "Honda",
    model: "Accord",
    year: 2019,
    mileage: 30000,
    start: function () {
        console.log(this.make + " " + this.model + " has started.");
    },
    stop: function () {
        console.log(this.make + " " + this.model + " has stopped.");
    }
};

// A Better Way
function Car(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.start = function () {
        console.log(this.make + " " + this.model + " has started.");
    };
    this.stop = function () {
        console.log(this.make + " " + this.model + " has stopped.");
    };
}
let car3 = new Car("Toyota", "Camry", 2017, 50000);
let car4 = new Car("Honda", "Accord", 2019, 30000);
let car5 = new Car("Ford", "Mustang", 2020, 15000);
let car6 = new Car("Chevrolet", "Malibu", 2018, 45000);

console.log(car3.make); // "Ford"
console.log(car4.year); // 2018
car5.start(); // "Ford Mustang has started."
car6.stop(); // "Chevrolet Malibu has stopped."
