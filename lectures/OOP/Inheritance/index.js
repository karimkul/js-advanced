// Inheritance

// Introduction
// Imagine you're developing a zoo simulation game where you have various types of animals like dogs, birds, and cats. Each animal type can perform actions such as eating, sleeping, and playing, but some animals have unique behaviors, like barking for dogs or flying for birds.

// Initially, you might think to create separate constructor functions for each animal type and define their properties and methods within those constructors. However, you soon realize that many of these properties and methods are common across different animals.

// Pain Point
// Code Duplication: If you create separate constructor functions for each animal type without using inheritance, you will end up writing the same code multiple times for common behaviors and properties. For example, every animal needs an eat method to gain energy and a sleep method to rest.

// Maintenance Nightmare: When you have duplicated code, any change you need to make to a common method, such as updating how eat works, has to be done in every single constructor function. This not only increases the chances of errors but also makes the code harder to maintain and extend.

// Here’s how your code might look without using inheritance:

// Constructor for Dog
function Dog(name, age, energy, breed) {
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.breed = breed; // Specific to Dog
}

Dog.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
    this.energy += 5;
};

Dog.prototype.sleep = function (hours) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
    this.energy += hours * 2;
};

Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};

// Constructor for Bird
function Bird(name, age, energy, canFly) {
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.canFly = canFly; // Specific to Bird
}

Bird.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
    this.energy += 5;
};

Bird.prototype.sleep = function (hours) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
    this.energy += hours * 2;
};

Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};

// Problems Without Inheritance:

// Duplicate Code: The eat and sleep methods are repeated in both Dog and Bird. This is inefficient because both animals share these behaviors.

// Hard to Maintain: If you wanted to update how eat works, you'd have to change it in every animal constructor, which could lead to errors if you miss one.

// Solution: Using Inheritance
// To solve this problem, we can use inheritance. By creating a parent constructor function that contains the shared properties and methods, we can have each specific animal type inherit from this parent. This way, we define common behaviors only once, making the code DRY (Don't Repeat Yourself) and easier to maintain.

// Step 1: Create the Parent Constructor Function
// Define a parent constructor function (Animal) that includes properties and methods common to all animals.

// Parent Constructor Function
// function Animal(name, age, energy) {
//   this.name = name;
//   this.age = age;
//   this.energy = energy;
// }

// // Adding methods to Animal's prototype
// Animal.prototype.eat = function(food) {
//   console.log(`${this.name} eats ${food}.`);
//   this.energy += 5;
// };

// Animal.prototype.sleep = function(hours) {
//   console.log(`${this.name} sleeps for ${hours} hours.`);
//   this.energy += hours * 2;
// };
// Common Properties: name, age, and energy are properties that all animals have.

// Common Methods: eat and sleep are behaviors that all animals perform. These methods are defined on the Animal.prototype so they can be shared across all instances of Animal.

// Step 2: Create the Child Constructor Functions
//  Create child constructor functions (Dog and Bird) that inherit from the parent constructor (Animal) and add their unique properties and methods.

// Pain Point Without Solution: If we don’t use call to invoke the parent constructor, the child will not inherit the properties initialized in the parent, leading to code duplication.

// Use Animal.call(this, name, age, energy) to invoke the parent constructor in the context of the child.

// Child Constructor Function for Dog
function Dog(name, age, energy, breed) {
    Animal.call(this, name, age, energy); // Call the parent constructor to initialize common properties
    this.breed = breed; // Child-specific property
}

// Adding a method specific to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};
Copy;
// Child Constructor Function for Bird
function Bird(name, age, energy, canFly) {
    Animal.call(this, name, age, energy); // Call the parent constructor to initialize common properties
    this.canFly = canFly; // Child-specific property
}

// Adding a method specific to Bird
Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};
Animal.call(this, name, age, energy);
// : This line calls the Animal constructor function with the context of Dog or Bird, meaning the common properties (name, age, and energy) are initialized by the parent constructor.

// Child-Specific Properties and Methods: breed and bark are specific to Dog, and canFly and fly are specific to Bird.

// Step 3: Set Up the Inheritance
// Ensure that the child constructor functions (Dog and Bird) inherit the methods from the parent constructor function (Animal).

// Without correctly setting up the prototype chain, child instances would not have access to the methods defined on Animal.prototype.

// Use Object.create(Animal.prototype) to create a new prototype object for each child that is linked to Animal.prototype.

Copy;
// Set up inheritance for Dog
Dog.prototype = Object.create(Animal.prototype);

// Set up inheritance for Bird
Bird.prototype = Object.create(Animal.prototype);
Object.create(Animal.prototype);
// : This creates a new object whose prototype is Animal.prototype. Assigning this new object to Dog.prototype and Bird.prototype means all instances of Dog and Bird will inherit from Animal.

// Step 4: Reset the Constructor Property
// Ensure that the constructor property on each child's prototype points to the correct constructor function.

// If you don't reset the constructor property, it will point to Animal, which can cause confusion and errors when checking the type of an instance.

// Manually reset the constructor property to Dog and Bird.

// // Reset the constructor property for Dog
// Dog.prototype.constructor = Dog;

// // Reset the constructor property for Bird
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog
//  and
// Bird.prototype.constructor = Bird
// : These lines explicitly set the constructor property on each child prototype to the correct constructor function, ensuring instances created by Dog and Bird will have their constructor property correctly pointing to Dog and Bird.

// Step 5: Add Child-Specific Methods
// Add methods that are unique to the Dog and Bird constructor functions.

// If you don’t add child-specific methods to the child’s prototype, the child class can’t have unique behaviors.

// Define methods on the child’s prototype to extend functionality.

// Adding methods specific to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};

// Adding methods specific to Bird
Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};
// bark and fly: These methods are unique to Dog and Bird respectively and modify the Dog’s or Bird's energy while performing actions that are typical for dogs and birds.

// Step 6: Create Instances and Use Them
// Create instances of Dog and Bird and demonstrate the use of inherited and own methods.

// Without using inheritance, creating a Dog or Bird instance would require duplicating all the methods and properties of Animal, leading to code duplication.

// Use the inheritance setup to create
