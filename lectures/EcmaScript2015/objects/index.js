// Objects
// Pre-ES2015 Syntax:
const name = "Alice";
const age = 30;

const person = {
    name: name,
    age: age
};

// ES2015 Shorthand Syntax:
const name1 = "Alice";
const age1 = 30;

const person1 = { name, age };
console.log(person1);

// Object Destructuring

// Basic Destructuring:

const person2 = {
    name2: "Alice",
    age2: 30
};

const { name2, age2 } = person2;

console.log(name2); // Outputs: "Alice"
console.log(age2); // Outputs: 30

// Nested Object Destructuring:

const person3 = {
    name3: "Alice",
    age3: 30,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

const {
    name3,
    age3,
    address: { city, zip }
} = person3;

// Retaining Nested Objects:
// Separate Destructuring:
// const { name, age, address } = person;
// const { city, zip } = address;

// Combined Destructuring:
// const {
//     name,
//     age,
//     address,
//     address: { city, zip }
// } = person;
